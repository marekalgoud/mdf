/*
Pour cette nouvelle édition du challenge "Meilleur·e développeur.euse de La Poste", vous serez le temps de ces 3 challenges l'assistant de professeur Nicolas Sleta. Le professeur Sleta est un des plus grands scientifiques de son temps, parti en quête de la machine ultime : la machine à voyager dans le temps. La machine est presque fonctionnelle, mais encore instable : elle crée des portails temporels de manière incontrôlée. Un matin en travaillant sur la machine, un portail se forme sous vos pieds et vous tombez dedans ! Saurez-vous retourner en 2021 ?
Préhistoire
Vous atterrissez de l'autre côté du portail : vous vous trouvez dans une grotte où des Hommes préhistoriques peignent des animaux sur les murs. Vous apercevez un autre portail temporel, il se trouve au milieu d'une des peintures sur un mur. Pour pouvoir passer dedans et sortir de la préhistoire, vous devrez identifier le symbole se trouvant au centre de la peinture.
Données
Entrée
Ligne 1 : 2 entiers impairs M et N compris entre 1 et 15 séparés par des espaces, représentant les dimensions de la peinture M lignes suivantes : une chaîne de N caractères formant une ligne des symboles de la peinture
Sortie
Le caractère se trouvant au centre de la peinture. Remarque : M et N étant impairs, il est garanti de n'avoir qu'un seul caractère au centre.
Exemples
Exemple 1
3 3
/-\
|+|
\-/
Votre programme devra renvoyer +.
Exemple 2
7 9
..,._.,..
.(.o.o.).
/'`.'.`'\
|oXoXoXo|
|\\'''//|
..."""...
#########
Votre programme devra renvoyer X
*/

function ContestResponse(){
    //implement your code here using input array
    const [m, n] = input.shift().split(' ').map(Number)
    input = input.map(i => i.split(''))
    console.log(input[(m - 1) / 2][(n -1) / 2])
}