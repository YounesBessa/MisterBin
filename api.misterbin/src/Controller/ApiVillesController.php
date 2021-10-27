<?php

namespace App\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class ApiVillesController extends AbstractController
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

    #[Route('/cityApi', name: 'cityApi')]
    public function index(): Response
    {
        $data = [
            'data' => null,
            'message' => 'Fuck younes'
        ];
        $content = $this->serializer->serialize($data, 'json', ['json_encode_options' => JSON_UNESCAPED_SLASHES]);

        $response = new Response();
        $response->setContent($content);
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }



    /**
     * @Route("/api/updateBennes", name="update_bennes", methods={"GET"})
     */
    // public function apiGetGouvRegions(Request $request, CityRepository $cityRepository, BinRepository $binRepository): Response
    // {
    //     $response = new Response();
    //     $httpClient = HttpClient::create();
    //     $reponseApi = $httpClient->request('GET', 'https://geo.api.gouv.fr/regions');
    //     $content = json_decode($reponseApi->getContent(), true);
    //     $nbrRegionCreated = 0;
    //Boucler sur le tableau et insérer toutes les régions
    // foreach ($content as $regionData){
    //     $existingRegion = $regionRepository->findOneBy(([
    //         'code' => $regionData["code"],
    //         'nom' => $regionData["nom"]
    //     ]));
    //     if (empty($existingRegion)) {
    //         $nbrRegionCreated++;
    //         $region = new Region();
    //         $region->setCode($regionData["code"])->setNom($regionData["nom"]);
    //         $this->entityManager->persist($region);
    //     }
    // }
    // $this->entityManager->flush();
    //     $response->setStatusCode(Response::HTTP_OK);
    //     $response->setContent($nbrRegionCreated . " regions added");
    //     return $response;
    // }
}
