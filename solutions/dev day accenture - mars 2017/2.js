/*
Enoncé

Un « chatbot » est un robot logiciel pouvant dialoguer avec un consommateur par le biais d’un service de conversations automatisées (Messenger par exemple). Un acteur de la grande distribution décide de mettre en place un chatbot pour informer les consommateurs des horaires d'ouverture du magasin le plus proche de chez eux. Les magasins sont présents dans les villes de Paris, Lyon, Nantes et Marseille.

On considère que le nom d'une ville figure dans un message, à partir du moment où les lettres qui composent le nom apparaissent consécutivement dans le message (en majuscules ou minuscules). Par exemple Paris figure dans parisienne mais Nantes ne figure pas dans maintenant est-ce possible ?.

Format des données

Entrée
Ligne 1 : un entier N correspondant au nombre de messages envoyés par le client
Ligne 2 à N+1 : une chaîne C comprenant entre 5 et 100 caractères correspondant à un message du client. Il y aura au plus une ville citée dans l'ensemble des lignes.

Sortie
Si le robot identifie une ville, retourner son nom. Sinon retourner la chaîne Pas de magasin.
*/
function ContestResponse(){
    //implement your code here using input array
    const nb = +input.shift()
    
    if(input.join(' ').toLowerCase().includes('paris')) {
        console.log('Paris')
    }
    else if (input.join(' ').toLowerCase().includes('nantes')) {
        console.log('Nantes')
    }
    else if(input.join(' ').toLowerCase().includes('lyon')) {
        console.log('Lyon')
    }
    else if(input.join(' ').toLowerCase().includes('marseille')) {
        console.log('Marseille')
    }
    else {
        console.log('Pas de magasin')
    }
}