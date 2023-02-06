/*
Énoncé

C’est enfin les vacances et vous prenez la route en voiture avec vos amis. Vous avez économisé un peu d’argent pour profiter du séjour mais pas question de dépenser des sous aux péages. Vous prendrez la route nationale.

Cette route est une longue ligne droite qui commence au nord de la France et se termine dans le sud. Vous débutez votre voyage dans le nord et vous vous dirigez vers le sud sans retour en arrière possible. Le problème de cet itinéraire est qu'il n'y a que trois stations-services sur le trajet. Ce n'est peut-être pas grave, vous allez calculer s'il y a un risque de panne d’essence.

Votre voiture à un réservoir de X litres et consomme Y litres tous les 100 kilomètres. Sur la carte, vous situez les trois stations-services et votre destination finale. L’objectif est de déterminer si la route est faisable ou non.

Nous supposerons que vous prenez la route avec un plein d’essence et au kilomètre 0.


Format des données

Entrée

Ligne 1 : un entier compris entre 20 et 500 représentant à la capacité du réservoir.
Ligne 2 : un entier compris entre 1 et 10 correspondant à la consommation exprimée litres par 100 kilomètres.
Lignes 3 à 5 : pour chaque station-service, un entier compris entre 1 et 10 000 correspondant à la distance qui sépare votre point de départ de cette station-service.
Ligne 6 : un entier compris entre 5 et 10 000 correspondant à la distance en kilomètres qui vous sépare de votre destination finale.

Sortie

La chaîne de caractère OK si la route est faisable, KO sinon
*/

function ContestResponse(){
    //implement your code here using input array
    const capa = +input.shift()
    const conso = +input.shift()
    input = input.map(Number)
    const capak = Math.floor(capa / conso * 100)

    let cur = 0
    let ok = true
    for(let stop of input) {
        if(stop > cur + capak) {
            ok = false
            break
        }
        cur = stop
    }
    console.log(ok ? 'OK' : 'KO')
}