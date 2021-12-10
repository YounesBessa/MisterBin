<?php

namespace App\Controller\Admin;
use App\Entity\Bin;
use App\Entity\City;
use App\Entity\User;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admincGAJygygzuApWLGGnuRSmyxRxQbRjgQPrvBiXrsEBXzjPSJaqDAGLbGVxfuyVRcT", name="admin")
     */
    public function index(): Response
    {
        // return parent::index();

        $routeBuilder = $this->get(AdminUrlGenerator::class);

        return $this->redirect($routeBuilder->setController(BinCrudController::class)->generateUrl());
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Api Misterbin');

    }

    public function configureMenuItems(): iterable
    {
        //  yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');
         yield MenuItem::linkToCrud('Gestion des bennes', 'fas fa-map-marker-alt', Bin::class);
         yield MenuItem::linkToUrl('Mister Bin', 'fas fa-wine-bottle', 'https://localhost:3000');
    }
}
