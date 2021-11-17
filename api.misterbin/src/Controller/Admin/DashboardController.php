<?php

namespace App\Controller\Admin;
use App\Entity\Bin;
use App\Entity\City;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
    /**
     * @Route("/admin", name="admin")
     */
    public function index(): Response
    {
        return parent::index();
        // $routeBuilder = $this->get(AdminUrlGenerator::class);
        // $url = $routeBuilder->setController(BinCrudController::class)->generateUrl();

        // return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Api Misterbin');
    }

    public function configureMenuItems(): iterable
    {
         yield MenuItem::linktoDashboard('Dashboard', 'fa fa-home');
         yield MenuItem::linkToCrud('Bin', 'fas fa-map-marker-alt', Bin::class);
+        yield MenuItem::linkToCrud('City', 'fas fa-comments', City::class);
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}