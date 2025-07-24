import Route from "./Route.js";

//Définir vos routes ici
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/carte", "La carte", "/pages/carte.html"),
];

//le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
