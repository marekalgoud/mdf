/*
Énoncé

Avec les JO de 2022 à Paris, le marché des logiciels de classement s'annonce prometteur pour les éditeurs français. Vous travaillez donc sur un pilote : le saut à la perche. Le classement d'un concours de saut à la perche demande un peu de travail car les règles sont les suivantes :
- Chaque sauteur peut choisir la hauteur à laquelle il débute le concours.
- S'il passe une barre de hauteur X, il peut continuer le concours en tentant ensuite une barre à une hauteur strictement supérieure à X.
- S'il échoue à une barre de hauteur X, il peut soit retenter cette hauteur soit continuer le concours à n'importe quelle hauteur strictement supérieure à X.

Les concurrents sont classés selon la hauteur de la dernière barre franchie. En cas d'égalité, ils sont départagés en premier lieu par le nombre d'essais qu'ils ont réalisé à la hauteur de la dernière barre qu'ils ont franchie, en second lieu par le nombre total d'échecs durant le concours. Si sur ces 3 critères, on ne peut pas départager les vainqueurs potentiels, alors il n'y a pas de vainqueur.

Format des données

Entrée

Ligne 1 : un entier N compris entre 1 et 1000 représentant le nombre d'essais réalisés pendant le concours.
Lignes 2 à N+1 : une chaine de 6 caractères en minuscules , un nombre décimal compris entre 4 et 10 avec deux chiffres après la virgule et une lettre (S ou E) séparés par des espaces. La chaîne représente le nom de l'athlète, le nombre représente la hauteur de l'essai et la lettre indique le résultat S pour Succès ou E pour Echec. Ces données sont fournies par ordre chronologiques : la hauteur de la barre est globalement croissante.

Sortie

Le nom du vainqueur du concours ou la chaine KO s'il y a égalité parfaite entre plusieurs vainqueurs potentiels.

Exemples
9
aaaaaa 4.25 S
bbbbbb 4.25 E
bbbbbb 4.25 S
bbbbbb 4.30 E
aaaaaa 4.30 E
aaaaaa 4.30 E
aaaaaa 4.30 E
Dans ce cas aaaaaa gagne car il a passé la 4.25 au 1er essai alors qu'il a fallu 2 essais à bbbbbb. Ensuite, les deux concurrent on échoué à 4.30.

7
aaaaaa 4.25 S
bbbbbb 4.25 E
aaaaaa 4.27 E
bbbbbb 4.30 S
aaaaaa 4.30 S
bbbbbb 4.35 E
aaaaaa 4.38 E
Dans ce cas, la réponse est KO. Les deux concurrents ont une meilleure barre à 4m30 qu'ils ont tous les deux réussie au 1er essai à cette hauteur et ils ont chacun 2 échecs en tout sur le concours.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = +input.shift()
    
    input = input.map(i => {
        const [name, height, result] = i.split(' ')
        return {
            name,
            height: +height,
            result
        }
    })
    
    let athletes = []
    for(let i of input) {
        const index = athletes.findIndex(a => a.name == i.name)
        if(index > -1) {
            athletes[index].jump.push({height: i.height, result: i.result})
        } else {
            athletes.push({
                name: i.name,
                jump: [
                    {height: i.height, result: i.result}
                ]
            })
        }
    }
    // find heighest bar for each athletes
    athletes = athletes.map(a => {
        const nbTotalEchec = a.jump.reduce((acc, cur) => cur.result == 'E' ? acc + 1 : acc, 0)
        
        let heighestBar = 0
        let nbEchecHeighestBar = 0
        let curBar = 0
        let currentNbEchec = 0
        
        for(let jump of a.jump) {
            if(curBar != jump.height) {
                curBar = jump.height
                currentNbEchec = 0
            }
            if(jump.result == 'S') {
                heighestBar = curBar
                nbEchecHeighestBar = currentNbEchec
            } else {
                currentNbEchec++
            }
        }
        
        return {name: a.name, nbTotalEchec, heighestBar, nbEchecHeighestBar}
    })
    
    athletes.sort((a, b) => {
        if(b.heighestBar > a.heighestBar) {
            return 1
        }
        else if(a.heighestBar > b.heighestBar) {
            return -1
        }
        else {
            if(b.nbEchecHeighestBar > a.nbEchecHeighestBar) {
                return -1
            }
            else if(a.nbEchecHeighestBar > b.nbEchecHeighestBar) {
                return 1
            }
            else {
                return a.nbTotalEchec - a.nbTotalEchec
            }
        }
    })
    
    if( athletes.length >= 2 && 
        athletes[0].heighestBar == athletes[1].heighestBar && 
        athletes[0].nbEchecHeighestBar == athletes[1].nbEchecHeighestBar &&
        athletes[0].nbTotalEchec === athletes[1].nbTotalEchec ) 
    {
        console.log('KO')
    } else {
        console.log(athletes[0].name)
    }
}