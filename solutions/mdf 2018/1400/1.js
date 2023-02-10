/*
Enoncé

L’été est une période où le nombre de voyageurs augmente considérablement et les avions s'entassent dans les aéroports.

La tour de contrôle est constamment sollicitée et les consignes sont strictes pour empêcher les collisions sur une piste donnée:
- Il doit s’écouler au minimum 6 minutes entre l’atterrissage de deux avions
- Il ne doit pas y avoir plus de X avions qui atterrissent dans une période de 45 minutes glissantes

Ce nombre X est lié à l’état des pistes et il varie en fonction des aéroports.

Format des données

Entrée

Ligne 1 : un entier N compris entre 1 et 1000 correspondant au nombre d’atterrissages dans une journée.
Ligne 2 : un entier X compris entre 1 et 50 correspondant au nombre d’atterrissages maximum sur une durée de 45 minutes glissantes sur une piste donnée.
Lignes 3 à N+2 : une chaîne de caractères H et un entier P séparés par un espace où H représente une heure d’atterrissage au format « hh:mm » et P correspond au numéro de la piste. Ces données sont triées par ordre chronologique.

Sortie

La chaîne de caractères COLLISION s'il y a eu un risque de collision, OK sinon.

Exemples

Exemple n°1
2
2
20:10 1
20:16 1

Dans ce cas, il y a un risque de collision car un avion a atterri 6 minutes après le premier avion. Or il doit s’écouler au minimum 6 minutes entre deux atterrissages sur une même piste.

Exemple n°2
2
2
12:10 1
12:13 2

Dans ce cas, il n'y a pas de risque de collision car les avions ont atterri sur deux pistes différentes.

Exemple n°3

3
3
20:02 1
20:25 1
20:47 1

Dans ce cas, il ne faut pas qu'il y ait pas plus de trois avions qui atterrissent dans une période de 45 minutes glissantes. Il y en a exactement trois qui ont atterrit dans une période de 45 minutes, il n'y a donc pas de risque de collision.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = +input.shift()
    const nbMax = +input.shift()

    input = input.map(i => {
        const[time, piste] = i.split(' ')
        
        const [hour, min] = time.split(':').map(Number)
        return {
            piste: parseInt(piste),
            time: hour * 60 + min
        }
    })

    input.sort((a, b) =>  {
        if(a.piste > b.piste) {
            return 1
        } else if(b.piste > a.piste) {
            return -1
        } else {
            return a.time - b.time
        }
    })

    let curPiste
    let lastLanding
    let collision = false

    for(let i of input) {
        if(curPiste != i.piste) {
            curPiste = i.piste
        } else {
            if(i.time - lastLanding < 6) {
                collision = true
                break
            } // compte du nombre d'avion du même type qui a atterri durant les 45 dernières minute
            const nbLandingLast45min = input.filter(p => p.piste == i.piste && p.time >= i.time - 45 && p.time <= i.time).length
            if(nbLandingLast45min > nbMax) {
                collision = true
            }
        }
        lastLanding = i.time
    }
    
    if(collision) {
        console.log('COLLISION')
    } else {
        console.log('OK')
    }
}