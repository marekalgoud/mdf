/*
Énoncé

Votre compétition annuelle de paintball approche à grand pas et vous vous réunissez avec vos amis pour vous entraîner. Vous êtes tous suréquipés, armure, casque, arme semi-automatique dernier cri, grenade, etc... Mais cela ne vous a pas empêché de vous faire humilier l’année dernière : vos adversaires ont pris votre forteresse en moins de 10 minutes.

Cette année, vous décidez de barricader votre forteresse et surtout, de mettre en place un système de sécurité pour ne pas laisser entrer n’importe qui. Vous avez une super idée. Le gardien de la forteresse criera une phrase avec un certain nombre de mots et la personne souhaitant entrer devra répéter cette même phrase en gardant uniquement les mots palindromes.

Un palindrome est une chaîne de caractères qui se lit de la même façon dans les deux sens (de droite à gauche et de gauche à droite, par exemple "kayak" ou "elle").

On vous garantit qu’il y aura toujours au minimum un palindrome dans la phrase.


Format des données

Entrée

Ligne 1 : un entier N compris entre 1 et 100 correspondant au nombre de mots criés par le gardien de la forteresse.
Ligne 2 à N+1 : une chaîne comprenant entre 3 et 10 caractères en minuscules correspondant au ième mot crié.

Sortie

La phrase composée uniquement des palindromes dans le même ordre qu'énoncés dans la phrase initiale séparés par des espaces.
*/


function ContestResponse(){
    //implement your code here using input array
    const nb = input.shift()
    console.log(input.filter(i => i.split('').reverse().join('') === i).join(' '))
}