/*
Objectif

En temps de résistance (contre l'empire intergalactique), il est crucial de pouvoir communiquer des messages en toute discrétion ! Tapis dans votre « planque », vous êtes à l’affut de messages codés dans les petites annonces du journal local. En effet, un texte anodin peut, en effaçant judicieusement des lettres (et sans en changer l’ordre), révéler un tout autre message ! On vous demande ici, si un texte précis (un signal que guettes nos amis résistants) peut ou non être caché de cette façon dans un texte donné.

Données

Entrée

Ligne 1 : une suite de 7 à 30 caractères correspondant au message à rechercher. Les caractères peuvent être des lettres minuscules ou des espaces ou les ponctuations '.', '!', '?' et ','.
Ligne 2 : un entier N compris entre 1 et 10 décrivant le nombre de lignes du texte.
Lignes 3 à N+2 : une chaine comprenant entre 3 et 100 caractères représentant une ligne du texte.


Sortie

1 si le message peut-être trouvé en supprimant certains caractères du texte, 0 sinon.

Exemple

Entrée

les carottes sont cuites
6
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sortie

1
*/

function ContestResponse(){
    //implement your code here using input array
    const msg = input.shift().split('')
    const nbLine = +input.shift()
    
    input = input.join(' ').split('')
    
    let found = true
    for(let car of msg) {
        const index = input.findIndex(i => car === i)
        if(index > -1) {
           input = input.slice(index + 1)
        } else {
            found = false
            break;
        }
    }
    console.log(found ? 1 : 0)
}