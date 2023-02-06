/*
Énoncé

De retour dans votre maison d’enfance pour le weekend, vous tombez sur votre ancienne console de jeu. Trois minutes plus tard, vous l’avez déjà branchée et vous jouez au seul jeu qui marche encore : saute brique. Le principe est simple : vous êtes dans un monde en 2D et vous avancez en sautant de brique en brique. L’objectif est de faire un maximum de sauts sans tomber dans le vide. Un saut vous permet d’avancer d’une case et chaque case est composée soit d’une brique, soit du vide. Si vous sautez dans le vide, vous avez perdu.

La particularité de ce jeu est que vous pouvez décider au début de la partie de commencer sur n’importe quelle case.

Après une heure de jeu, vous vous rendez compte que vous pouvez afficher la liste des cases avant même le début de la partie. En réfléchissant un peu, vous pouvez optimiser votre brique de départ pour maximiser votre score final.

On vous garantit qu'il y a au minimum une brique dans la partie pour que vous puissiez commencer à jouer mais il est possible que vous ne puissiez pas sauter sur autre brique. Dans ce cas votre score est 0.

Format des données

Entrée

Ligne 1 : un entier N compris entre 2 et 1 000 correspondant au nombre de cases dans le partie.
Ligne 2 à N+1 : un caractère correspondant à la valeur de la ième case pouvant prendre la valeur B pour une brique ou X pour le vide.

Sortie

Le nombre de sauts maximal qu'un joueur peut faire en sélectionnant de façon optimale sa brique de départ.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = input.shift()
    const bricks = input.join('').split('X').filter(i => i != '').map(i => i.length).sort((a, b) => b - a)
    console.log(bricks.shift() - 1)
}