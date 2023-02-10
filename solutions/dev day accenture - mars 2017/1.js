/*
Enoncé

Une méthode agile est une approche itérative et collaborative pour mener à bien un projet. Elle génère un produit de haute qualité tout en prenant en compte l’évolution des besoins des clients.

La méthode la plus connue est Scrum.

Au début d'un projet un « backlog », ensemble de tache à réaliser, est défini avec le client. Ce « backlog » évolue dans le temps en fonction du besoin de client. On peut y rajouter des taches comme on peut en enlever.

Durant le projet, une réunion avec l'équipe technique et l'équipe opérationnelle est organisée à chaque « sprint » (unité de temps composé de quelques semaines). Lors cette réunion, le client valide ou non les taches qui ont été réalisées durant la période de « sprint ».

Dans ce challenge, vous devez déterminer si à la date de la livraison finale, le client obtient la totalité de son produit.


Format des données

Entrée
Ligne 1 : un entier N correspondant au nombre de sprints(réunion).
Ligne 2 : un entier T correspondant au nombre de taches dans le « backlog » initial.
Ligne 3 à N+2 : un entier V et un entier U séparés par un espace où V est le nombre de taches validées et U le nombre de taches à ajouter (si U est positif) ou à supprimer (si U est négatif) dans le « backlog ».

Sortie
La chaîne OK si le backlog est vide. Sinon retourner la chaîne KO.
*/
function ContestResponse(){
    //implement your code here using input array
    const nbSprint = +input.shift()
    let nbTaches = +input.shift()
    
    input = input.map(i => i.split(' ').map(Number))
    
    console.error(input)
    
    for(let i of input) {
        const [tachesValidees, tachesAjoutees] = i
        nbTaches -= tachesValidees
        nbTaches += tachesAjoutees
    }
    
    if(nbTaches === 0) {
        console.log('OK')
    } else {
        console.log('KO')
    }
}