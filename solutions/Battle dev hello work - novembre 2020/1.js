/*
Objectif

Après de longues recherches ous avez réussi à trouver le compte Twitter de Dolan : @DolanGrump ! Vous décidez de vous intéresser à ses millions de followers : vu le nombre de retweets sur chaque article partagé, vous suspectez grandement que beaucoup de ces followers sont en réalité des bots...

Vous décidez de faire une première analyse pour identifier les potentiels bots : vous remarquez que la plupart des bots ont un nom de compte ne terminant que par des chiffres, contrairement aux comptes de personnes réelles.

Ecrivez un algorithme permettant de déterminer les comptes suspects. Un compte est suspect s'il se termine par 5 chiffres.

Données

Entrée

Ligne 1 : un entier N compris entre 1 et 1000, représentant le nombre de comptes à vérifier
Lignes 2 à N+1 : une chaîne de caractères (composée uniquement de chiffres et de lettres et d'une longueur comprise entre 6 et 15 caractères) représentant le nom d'un compte à examiner.

Sortie

Un entier représentant le nombre de comptes suspects parmi la liste donnée en entrée.
Un compte est considéré comme suspect s'il se termine par 5 chiffres.

Exemple

Pour l'entrée :

6
h25io
gn0mi12345
realDon4321
yaNNd3v
cup0ft3444455
bienvenueCorbier
BClukschoco


Votre programme doit renvoyer :
2
Effectivement, les comptes cup0ft3444455 et gn0mi12345 sont suspects, pas les autres.
*/

function ContestResponse(){
    console.log(input.slice(0).filter(e => /\d{5}$/.test(e)).length)
}