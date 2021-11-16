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

    #[Route('/getBin', name: 'getbin')]
    public function index(): Response
    {
        $data = [
            'data' => null,
            'message' => 'Route api to get all bin in the api'
        ];
        $content = $this->serializer->serialize($data, 'json', ['json_encode_options' => JSON_UNESCAPED_SLASHES]);

        $response = new Response();
        $response->setContent($content);
        $response->setStatusCode(Response::HTTP_OK);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}
