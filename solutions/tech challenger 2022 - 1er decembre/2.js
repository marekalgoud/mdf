/*
Dérèglement climatique
Après avoir brillamment géré la charge du réseau électrique, la Brigade vous envoie sur une des missions les plus importantes pour l'Ordre de l'Innovation : le dérèglement climatique. Pour mettre en évidence les écarts à la normale, vous devez effectuer un traitement simple basé sur les médianes successives d'une série de températures. En partant du début de la liste, donnez la température médiane du premier mois, des 3 premiers mois, des 5 premiers mois, etc. Pour rappel, la médiane d'une série est la valeur telle que l'on y trouve autant de valeurs inférieures, que de valeurs supérieures. Comme nous calculons uniquement des médianes sur des sous-listes de taille impaire, la médiane sera toujours un élément de la sous-liste.
Données
Entrée
Ligne 1 : un entier N, le nombre de mesures de température disponibles. Ligne 2 : N entiers séparés par des espaces, les mesures mensuelles de température.
Sortie
Les médianes successives de la première mesure, puis des 3 premières mesures, puis des 5 premières, et ainsi de suite jusqu'à la dernière mesure. Affichez tous les nombres sur une seule ligne, séparés par des espaces.
Contraintes
Il y a entre 1 et 1000 mesures de températures disponibles.
Chaque température est comprise entre -273 et 10 000.
Exemple
Pour l'entrée :
7
2 -12 -4 9 11 13 17
Les médianes sont :
2 -4 2 9
Explication
La médiane d'une seule mesure, ici 2, est égale à cette mesure. Le premier résultat sera donc 2.
La médiane sur les trois premier mois [2, -12, -4] est -4.
La médiane de [2, -12, -4, 9, 11] est 2 à nouveau.
La médiane de [2, 12, 4, 9, 11, 5, 17] vaut 9.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = input.shift()
    const temperatures = input.shift().split(' ').map(Number)

    let i = 1
    const result = [temperatures[0]]
    while(i < nb / 2) {
        const tmp = temperatures.slice(0, 2*i + 1).sort((a, b) => a - b)
        result.push(tmp[i])
        i++
    }

    console.log(result.join(' '))
}