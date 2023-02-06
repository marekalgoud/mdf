/*
Objectif

Préparer des cocktail (sans alcool) c'est tout un art. Un art dans lequel vous ne vous débrouillez pas si mal que ça, mais pour que votre talent soit reconnu à sa juste valeur et que vous décrochiez le titre prestigieux du « Meilleur Barman de France » vous devez encore vous entrainer.
Vous vous posez la question de comment automatiser un peu la préparation de vos boissons et vous vous rendez compte que vous perdez à chaque fois un temps fou à réfléchir à dans quel ordre mélanger les ingrédients. Si vous étiez capable d’apprendre une bonne fois pour toute par cœur l’enchainement des ingrédients, pour sûr vous seriez plus efficace (et un barman plus efficace est un meilleur Barman).
Vous savez un peu programmer (vous n’êtes pas non plus encore le meilleur), et vous voulez générer la liste des ingrédients nécessaires à la préparation d’un cocktail dans un ordre qui respecte les règles de base d’une boisson, à savoir que certains ingrédients doivent être ajoutés à la préparation avant d’autres (par exemple le sucre avant le tonic).
Et hop’, il ne vous reste plus qu'à agiter énergiquement le shaker pendant une dizaine de secondes.

Données

Entrée

Ligne 1: deux entiers séparés par des espaces, le premier N compris entre 1 et 149 décrivant le nombre d'ingrédients au plus pour cette préparation, le second M compris entre 1 et 3N décrivant le nombre de contraintes dans la recette du cocktail.
Lignes 2 à M + 1: deux chaines comprenant entre 1 et 128 caractères A et B qui représentent le nom de deux ingrédients en minuscule qui exprime que A doit être mélangé avec la mixture avant B. Les noms d'ingrédients peuvent aussi inclure le caractère -.


Sortie

Une liste d'ingrédients séparé par " < " (avec un espace avant et après le signe <) décrivant un ordre dans lequel il faut mélanger les ingrédients pour fabriquer le merveilleux brevage, si un tel ordre n'existe pas, retournez KO.
N.B : Plusieurs solutions existent, vous pouvez retourner n'importe laquelle.

Exemple

Entrée

5 4
club-mate pamplemousse
pamplemousse grenadine
mojito club-mate
fraise club-mate


Sortie

mojito < fraise < club-mate < pamplemousse < grenadine
*/


function ContestResponse(){
    //implement your code here using input array
    const [nbIngredients, nbContraintes] = input.shift().split(' ').map(Number)
    const graph = new Graph()
    for(let contrainte of input) {
        const [from, to] = contrainte.split(' ')
        graph.addEdge(from, to)
    }
    if(graph.hasCycle()) {
        console.log('KO')
    } else {
        console.log(graph.topologicalSort().join(' < '))
    }
}