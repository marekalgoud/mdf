/*
Objectif

Vous passez votre après-midi avec Sacha, qui vous propose encore de jouer au jeu de la bataille entière :
- Chaque joueur commence la partie avec un deck contenant un nombre de cartes identiques pour les deux joueurs.
- Chaque tour de jeu, les deux joueurs présentent sur la table la carte se trouvant sur le dessus de leur deck.
- Le joueur avec la carte à la valeur la plus élevée remet la carte en dessous de son deck, le joueur avec la carte la plus faible se débarrasse définitivement de sa carte.
Lorsque deux cartes sont de mêmes valeurs, les deux cartes sont éliminées.
- Le jeu continue ainsi jusqu'à ce que l'un des deux joueurs ne possède plus de cartes.


Connaissant les decks des deux joueurs, on vous demande de prédire si c'est vous ou Sacha qui remportera la partie. Il y a match nul dans le cas où les dernières cartes des decks se trouvent être de valeurs identiques.

Données

Entrée

Ligne 1 : Un entier N, inférieur ou égal à 50, indiquant le nombre de cartes contenu dans les decks de chacun des joueurs.
Ligne 2 : N entiers compris entre 1 et 42 séparés par des espaces décrivant la valeur de chaque carte du deck de Sacha, du sommet vers le fond de la pile de carte.
Ligne 3 : N entiers compris entre 1 et 42 séparés par des espaces décrivant la valeur de chaque carte de votre deck, du sommet vers le fond de la pile de carte.

Sortie
La lettre :
G : si vous gagnez la partie
P : si c'est Sacha qui gagne
N : en cas de match nul


Exemple

Entrée

3
1 2 3
3 2 1

Sortie

N
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = input.shift()
    const sachaDeck = input.shift().split(' ').map(Number)
    const myDeck = input.shift().split(' ').map(Number)

    while (sachaDeck.length > 0 && myDeck.length > 0) {
        const sachaCard = sachaDeck.shift()
        const myCard = myDeck.shift()

        if(sachaCard > myCard) {
            sachaDeck.push(sachaCard)
        }
        else if(sachaCard < myCard) {
            myDeck.push(myCard)
        }
    }

    if(sachaDeck.length === 0 && myDeck.length === 0) {
        console.log('N')
    } else if(sachaDeck.length === 0) {
        console.log('G')
    } else {
        console.log('P')
    }
}