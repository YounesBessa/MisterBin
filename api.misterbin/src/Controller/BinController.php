<?php

namespace App\Controller;

use App\Repository\BinRepository;
use App\Repository\CityRepository;
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
    private $entityManager;

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

    #[Route('/updateBin', name: 'updateBin')]
    public function updateBin(BinRepository $binRepository, CityRepository $cityRepository): Response
    {

        $httpClient = HttpClient::create();
        $reponseApi = $httpClient->request('GET', 'https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dapport-volontaire-dechets-et-moyens-techniques&q=&lang=fr&rows=10000&refine.flux=R%C3%A9cup%27verre');
        $content = json_decode($reponseApi->getContent(), true);

        $content = $content['records'];
        $allBin = $binRepository->findAll();



        foreach ($content as $item) {

            foreach ($allBin as $bin) {
                if ($bin->getName() === $item['recordid']) {
                    //yezs
                }
            }



            if (empty($item['fields']['voie']) || $item['fields']['voie'] == '') {
                $item['fields']['voie'] = 'Rue inconnue';
            }

            if (empty($item['fields']['numero']) || $item['fields']['numero'] == '') {
                $item['fields']['numero'] = 'Numero inconnu';
            }
            $bin['id'] = $item['recordid'];
            $bin['address'] = $item['fields']['numero'] . ', ' . $item['fields']['voie'];
            $bin['lat'] = $item['geometry']['coordinates'][1];
            $bin['lon'] = $item['geometry']['coordinates'][0];
            array_push($allBin, $bin);
        }

        $yestes = [
            'bin' => $allBin,
            // 'city' => $allCity
        ];


        $content = $this->serializer->serialize($yestes, 'json', ['json_encode_options' => JSON_UNESCAPED_SLASHES]);
        $response = new Response();
        $response->setContent($content);
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}
