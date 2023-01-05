<?php

require __DIR__ . '/vendor/autoload.php';

use Twig\Environment;
use Twig\loader\FilesystemLoader;

$loader = new FilesystemLoader(__DIR__. '/views');
$twig = new Environment($loader,[
    'cache' => false
]);

$page = isset($_GET['page']) ? $_GET['page'] : null;

switch($page){
    case 'form': // si on veux se diriger vers la page 
        echo $twig->render('form.html.twig');
        break;
        
       default:
        echo $twig->render('form.html.twig');
}


?>