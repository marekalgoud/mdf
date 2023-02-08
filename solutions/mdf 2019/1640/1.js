/*
Énoncé

Nous sommes en l'an 2100 et un nouveau type de transport en commun fait son apparition. Il s'agit de métros supersoniques et flottant dans l’air : le Transport Air.

Ce nouveau mode de transport est composé de sept lignes empruntant toutes le même chemin circulaire à sens unique composé de 37 gares (numérotées de 0 à 36). Ces lignes ont pour identifiant : 1, 2, 3, 6, 9, 12 et 18 (oui, en 2100 la population a l'esprit plus matheux qu'en 2019). Chaque ligne se déplace à une altitude différente des autres et ne s'arrête pas à toute les gares.

Les lignes débutent toutes leur trajet à la gare 0, s'arrêtent aux gares correspondant à des multiples de leur identifiant, terminent leur trajet au terminus 36 puis reprennent de nouveau leur cycle à la gare 0.

Par exemple la ligne 6 commence à la gare 0, s'arrête à la gare 6, puis à la gare 12 etc… jusqu'au terminus à la gare 36 puis reprend à nouveau son chemin à la gare 0.

Pour fêter cet événement, vous décidez de vous retrouver avec un ami en prenant le fameux Transport Air. En fonction de vos gares de départ et de la ligne que vous empruntez, vous essayez d'optimiser vos temps de trajet afin de vous retrouver à la première gare commune, sans effectuer de correspondance.

Dans le meilleur des cas, vous commencez votre chemin à la même gare, vous n'avez même pas besoin de prendre le train. Dans le pire des cas, vous vous retrouvez au terminus à la gare 36.

L’objectif est donc de déterminer la première gare commune à vos trajet.

Format des données

Entrée

Ligne 1 : deux entiers séparés par un espace représentant respectivement à votre gare de départ et la ligne empruntée.
Ligne 2 : deux entiers séparés par un espace représentant respectivement la gare de départ et la ligne empruntée par votre ami.

Sortie

Un entier correspondant la première gare commune.
*/

function ContestResponse(){
    //implement your code here using input array
    let [mypos, myline] = input.shift().split(' ').map(Number)
    let [friendpos, friendline] = input.shift().split(' ').map(Number)
    
    while(mypos != friendpos) {
        if(mypos > friendpos) {
            friendpos += friendline
        } else {
            mypos += myline
        }
    }
    console.log(mypos)
}