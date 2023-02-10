/*
Enoncé

Dans votre jeu vidéo favori, vous avez le choix entre plusieurs classes pour votre personnage. Ensuite, au cours de l'aventure, votre personnage devra se spécialiser dans une sous-classe de sa classe et même vers la fin du jeu dans une sous-sous-classe. Vous avez envie de garder le jeu le plus ouvert possible en choisissant au début un personnage de la classe qui vous donnera le plus de possibilités de sous-sous-classes.

Pour cela, vous disposez de la liste des spécialisations possibles à partir d'une classe ou d'une sous-classe. La première valeur donne une classe ou une sous-classe, la 2ème valeur est une spécialisation possible de la 1ère valeur.

Exemple:
5
aaaa bbbb
cccc eeee
bbbb oooo
aaaa gggg
gggg dddd
eeee uuuu

Dans cet exemple, la réponse est « aaaa ». En effet, aaaa vous permet de devenir bbbb ou gggg, qui vous permettent de devenir dddd ou oooo, soient deux possibilité de sous-sous-classes, alors que cccc ne vous permet que de devenir eeee qui ne vous permet que de devenir uuuu, soit une seule possibilité de sous-sous-classe.

On vous garantit que toutes les sous-classes permettent de se spécialiser dans au moins une sous-sous-classe. Par ailleurs, chaque sous-sous-classe ou sous-classe n'a qu'un seul "parent".

Format des données

Entrée

Ligne 1 : un entier N compris entre 2 et 1000 correspondant au nombre d'éléments de la liste des spécialisations.
Ligne 2 à N+1 : deux chaînes de 4 caractères en minuscules respectivement P et E séparées par un espace où P correspond au nom d'une classe ou sous-classe et E correspond au nom d'une sous-classe ou sous-sous-classe dans laquelle P permet de se spécialiser.

Sortie

Une chaîne de caractères correspondant à la classe offrant le plus grand choix de sous-sous-classes. S'il y en a plusieurs, affichez les toutes séparées par un espace.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = +input.shift()
    
    const graph = new Graph()
    for(let i of input) {
        const [from, to] = i.split(' ')
        graph.addEdge(from, to)
    }
    
    const nodes = graph.nodes()
    
    const rootNodes = []
    for(let node of nodes) {
        if(graph.indegree(node) == 0) {
            rootNodes.push(node)
        }
    }
    
    const nodesWithResult = []
    for(let node of rootNodes) {
        nodesWithResult.push({
            node,
            nb: nbChildren(node)
        })
    }
    nodesWithResult.sort((a, b) => b.nb - a.nb)
    
    const maxNodes = nodesWithResult.filter(i => i.nb === nodesWithResult[0].nb).map(i => i.node)
    
    console.log(maxNodes.join(' '))
    
    function nbChildren(node) {
        const nodes = graph.adjacent(node)
        if(nodes.length == 0) {
            return 1
        } else {
            let nb = 0
            for(let n of nodes) {
                nb += nbChildren(n)
            }
            return nb
        }
    }
}