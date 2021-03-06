# Projet-Sushi

## Présentation
SushiShop est une application visant à permettre à un client de commander un plat de nourriture à distance.

![screenshot](https://user-images.githubusercontent.com/78152375/145978823-aac7d44e-eec8-4d3f-aa8f-e3ae9f0435bc.png)

## Fonctionnement
L’appli fonctionne à l’aide de MongoDB, qui contient les bases de données, et de l’API, qui s’affiche sur la vue HTML. 
L'application fonctionne sur 2 pages (3 si on compte les mentions légales).

![screenshot](https://user-images.githubusercontent.com/78152375/145639775-a81ec115-d56f-47c5-a40a-49950525e735.png)

Page d’accueil :
- Le menu de navigation contenant les différentes pages
- 1 bouton "ajouter au panier" pour chaque menu

Page du panier :
- Contient les menus rajoutés de la page d’accueil dans la page du panier
- 1 bouton "supprimer " à coté des menus dans le panier pour les retirer


## Explication du code

Contenu de panier.component.ts

![screenshot](https://user-images.githubusercontent.com/78152375/154743338-427318a4-6654-4554-ba08-eb0198fa0984.PNG)

Les lignes de 23 à 25 permettent de déclarer une fonction permettant de supprimer les menus du panier.

Contenu de accueil.component.html

![screenshot](https://user-images.githubusercontent.com/78152375/154757252-d4848ba1-ef93-4c40-baf2-1ecb525e9c7a.PNG)

Ce fichier sert à la visualisation de l'accueil, possédant les menus à ajouter au panier.

## Evil user story

![screenshot](https://user-images.githubusercontent.com/78152375/154741054-536cfdf5-573c-4ae9-a30a-1306abaa90dd.PNG)



Lien du dépôt : https://github.com/Rayquane/Projet-Sushi

Collaborateurs :
- DE SOUSA Océane
- FORNARELLI Evan
- BERCIER Ethan
