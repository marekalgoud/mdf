/*
Énoncé

Le grand prix de Monaco a lieu tous les ans et vous vous retrouvez systématiquement avec vos amis dans le garage pour le regarder. C'est devenu votre rituel.

Manque de chance cette année, la box ne fonctionne pas très bien. Il est impossible de regarder la télé. Vous avez une connexion internet limitée mais vous arrivez quand même à vous procurer la grille de départ et la liste des événements (dépassements ou incidents obligeant un pilote à quitter la course).

Pas question d'abandonner votre rituel, vous allez vous servir de ces données pour continuer à vivre la course. Vous devez déterminer le classement final de votre pilote favori.


On considère que la position de chacun des 20 pilotes de la grille de départ définit leur identifiant et que les événements sont ordonnés dans l'ordre chronologiquement.


Format des données

Entrée

Ligne 1 : un entier compris entre 1 et 20 correspondant à la position initiale de votre pilote favori.
Ligne 2 : un entier N compris entre 1 et 100 correspondant au nombre d’événements.
Lignes 3 à N+2 : Un entier et un caractère séparés par un espace représentant respectivement l’identifiant du pilote concerné par l’événement et le type d'événement. Si le caractère est D, cela signifie que le pilote vient d’effectuer un dépassement, il gagne une place. Si le caractère est I, cela signifie que le pilote a subi un incident, il doit quitter la course et tous ses poursuivants gagnent une place dans le classement.

Sortie

Un entier correspondant au classement final de votre pilote favori. KO s'il a dû quitter la course.
*/
function ContestResponse(){
    //implement your code here using input array
    const fav = +input.shift()
    const evt = +input.shift()

    let pilotes = Array(20).fill().map((i, index) => index + 1)

    input = input.map(i => i.split(' '))
    
    for(let [p, e] of input) {
        const index = pilotes.findIndex(i => i == p)
        if(index > -1) {
            if(e == 'I') {
                pilotes.splice(index, 1)
            }
            if(e == 'D') {
                const tmp = pilotes[index - 1]
                pilotes[index - 1] = p
                pilotes[index] = tmp
            }
        }
    }

    const classement = pilotes.findIndex(i => i == fav)
    if(classement > - 1) {
        console.log(classement + 1)
    } else {
        console.log('KO')
    }
}