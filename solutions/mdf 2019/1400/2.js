/*
Objectif

Vous n'êtes pas très habile au jeu des échecs. Pour vous aider, Blue décide de vous initier à une variante du jeu afin de travailler vos fins de partie. Les échecs "de la Tour" se jouent ainsi :
- Un des joueurs n'a qu'une seule pièce, un roi, blanc, qui peut se déplacer d'une case dans n'importe quelle direction (diagonales incluses).
- Le joueur adverse ne possède que des tours (potentiellement bien plus que deux), noires, qui peuvent avancer de n'importe quel nombre de cases, mais uniquement en restant sur la même ligne ou sur la même colonne.
- Chaque pièce (le roi ou une tour) peut prendre l'éventuelle pièce se trouvant sur la case sur laquelle elle se déplace.

On vous donne un plateau de jeu de 8x8 cases, avec les positions de chaque pièce dessus. Vous devez indiquer à cet instant précis (sachant que c'est aux blancs de jouer), quelle est la situation, à savoir :
- still-in-game : si le roi peut encore se déplacer vers une case où il ne sera pas pris dès le tour suivant.
- check-mat : si le roi ne peut se déplacer que dans des positions où il sera pris dès le tour suivant et qu'il est "échec" au tour présent (c'est à dire qu'il serait également pris au tour suivant s'il ne de déplaçait pas).
- pat : si le roi ne peut se déplacer que vers des cases où il sera pris au tour suivant et mais qu'il n'est pas "échec" au tour présent (c'est à dire qu'il ne serait pas pris au tour suivant s'il ne se déplaçait pas).



Format des données

Entrée

Lignes 1 à 8 : 8 caractères R, T ou . où R représente le Roi, T une tour et . une case vide.

Sortie

La chaine still-in-game ou check-mat ou pat en fonction de la situation de l’échiquier.

Exemple

Entrée

........
........
........
..T.....
..TR....
....T...
........
........

Sortie

still-in-game

En effet, si le roi se déplace en diagonale vers le bas - droite. Il va prendre la tour et les deux tours restantes ne le pourront pas le prendre au tour suivant.

Entrée

T..R....
T.......
........
........
........
........
........
........

Sortie

check-mat
*/