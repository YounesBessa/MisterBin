<?php

namespace App\Controller;

use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ApiVillesController extends AbstractController
{
    #[Route('/api/villes', name: 'api_villes')]
    public function index(): Response
    {
        return $this->render('api_villes/index.html.twig', [
            'controller_name' => 'ApiVillesController',
        ]);
    }

        /**
     * @Route("/api/updateBennes", name="update_bennes", methods={"GET"})
     */
    public function apiGetGouvRegions(Request $request, RegionRepository $regionRepository): Response {
        $response = new Response();
    
        $httpClient = HttpClient::create();
        $reponseApi = $httpClient->request('GET', 'https://geo.api.gouv.fr/regions');
        $content = json_decode($reponseApi->getContent(), true);
        $nbrRegionCreated = 0;
        //Boucler sur le tableau et insérer toutes les régions
        foreach ($content as $regionData){
            
            $existingRegion = $regionRepository->findOneBy(([
                'code' => $regionData["code"],
                'nom' => $regionData["nom"]
            ]));
            
            if (empty($existingRegion)) {
                $nbrRegionCreated++;
                $region = new Region();
                $region->setCode($regionData["code"])->setNom($regionData["nom"]);
                $this->entityManager->persist($region);
            }
        }
        
        $this->entityManager->flush();
        $response->setStatusCode(Response::HTTP_OK);
        $response->setContent($nbrRegionCreated . " regions added");
        
        return $response;
    }
}
