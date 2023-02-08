/*
Objectif

Vous travaillez comme programmeur à bord du vaisseau ..., dont le capitaine caractériel vient de décider de traverser un champ d'astéroïde malgré les chances de succès de 1/3720.

Votre rôle est d'empêcher les astéroïdes de venir menacer de trop près la carrosserie du précieux engin. Vous disposez heureusement d'images de mauvaise résolution acquises par le performant système de vidéoprotection. Vous décidez donc d'écrire un programme analysant ces images pour y détecter les astéroïdes, et envoyer leur position au système de défense rapprochée qui les pulvérisera, et ainsi vous éviter les foudres du capitaine.

Votre programme devra accepter en entrée une carte rectangulaire quadrillée où certaines cases contiennent de l'astéroïde et d'autres du vide sidéral, et identifier le nombre d'astéroïdes présents sur l'image. Un seul astéroïde peut être composé de plusieurs cases adjacentes (les diagonales ne comptent pas) et devra être compté une seule fois !

Format des données

Entrée

- Ligne 1 : deux entiers M et N compris entre 2 et 100 séparés par un espace indiquant respectivement le nombre de lignes et de colonnes de l'image.
- Lignes 2 à M+1 : N caractères représentant une ligne de l'image. Chaque caractère a 2 valeurs possibles : X indiquant de l’astéroïde, ou . du vide.

Sortie

Un nombre entier, indiquant le nombre d'astéroïdes détectés sur l'image.

Exemple

Entrée

8 22
.....................X
.........XXX..........
X..XXXXXX.......X.....
X..XX..XX....XXXXX....
X..XX..XX...XX...XX...
X..XX..XX...X..X.XX...
...XXXXXX...X.....X...
............XXXXXXX...

Sortie

6

Note : Attention, certains astéroïdes peuvent contenir du vide, et même d'autres astéroïdes ! Dans l'exemple ci-dessus, le gros astéroïde présent en bas à droite contient à l'intérieur de lui-même un petit astéroïde d'une seule case.
*/

function ContestResponse() {
    //implement your code here using input array
    const [ligne, col] = input.shift().split(' ').map(Number)
    
    input = input.map(i => i.split(''))
    
    let nbAsteroide = 0
    
    for(let x = 0; x < input.length; x++) {
        for(let y = 0; y < input[x].length; y++) {
            if(input[x][y] == 'X') {
                nbAsteroide++
                removeAsteroide(x, y, nbAsteroide)
            }
        }
    }

    console.log(nbAsteroide)

    function removeAsteroide(x, y, nb) {
        
        if(input[x][y] == 'X') {
            input[x][y] = nb
            if(x > 0) {
               removeAsteroide(x - 1, y, nb) 
            }
            if(x < ligne - 1) {
                removeAsteroide(x + 1, y, nb)
            }
            if(y > 0) {
               removeAsteroide(x, y - 1, nb) 
            }
            if(y < col - 1) {
                removeAsteroide(x, y + 1, nb)
            }
        }
    }
}