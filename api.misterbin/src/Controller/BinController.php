<?php

namespace App\Controller;

use App\Entity\Bin;
use App\Repository\BinRepository;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class BinController extends AbstractController
{

    /**
     * @Serializer
     */
    private $serializer;

    /**
     * @var ObjectManager
     */
    private $manager;

    public function __construct(EntityManagerInterface $em)
    {
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getNom();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);
        $this->serializer = new Serializer([$normalizer], [$encoder]);
        $this->entityManager = $em;
    }

    #[Route('/updateBin', name: 'updateBin', methods: ['GET'])]
    public function updateBin(EntityManagerInterface $manager, BinRepository $binRepository): Response
    {

        $httpClient = HttpClient::create();
        $raw = $httpClient->request('GET', 'https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dapport-volontaire-dechets-et-moyens-techniques&q=&lang=fr&rows=10000&refine.flux=R%C3%A9cup%27verre');
        $jsonAPI = json_decode($raw->getContent(), true);
        $content = $jsonAPI['records'];
        $newBinCreated = 0;

        foreach ($content as $item) {
            $existingBin = $binRepository->findOneBy([
                'Name' => $item['recordid'],
            ]);

            if (empty($existingBin) || is_null($existingBin)) {
                $newBin = new Bin();
                $newBin->setName($item['recordid']);
                if (empty($item['fields']['voie']) || $item['fields']['voie'] == '') {
                    $item['fields']['voie'] = 'Rue inconnue';
                }
                if (empty($item['fields']['numero']) || $item['fields']['numero'] == '') {
                    $item['fields']['numero'] = 'Numero inconnu';
                }

                $newBin->setAdress($item['fields']['numero'] . ', ' . $item['fields']['voie']);
                $newBin->setLon($item['geometry']['coordinates'][0]);
                $newBin->setLat($item['geometry']['coordinates'][1]);
                $newBinCreated++;
                $manager->persist($newBin);
            } else {
                $apiRecordsID = array_column($content, 'recordid');
                if (!in_array($existingBin->getName(), $apiRecordsID)) {
                    $manager->remove($existingBin);
                } else {
                    if ($existingBin->getLat() != $item['geometry']['coordinates'][1]) {
                        $existingBin->setLat($item['geometry']['coordinates'][1]);
                    }
                    if ($existingBin->getLon() != $item['geometry']['coordinates'][0]) {
                        $existingBin->setLon($item['geometry']['coordinates'][0]);
                    }
                }
            }
        }

        $manager->flush();

        $responseAPI = [
            'newBin' => $newBinCreated
        ];


        $content = $this->serializer->serialize($responseAPI, 'json', ['json_encode_options' => JSON_UNESCAPED_SLASHES]);
        $response = new Response();
        $response->setContent($content);
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}
