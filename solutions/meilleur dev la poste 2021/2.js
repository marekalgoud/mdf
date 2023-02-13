/*
Combat magique
A l'autre bout du portail, vous vous rendez vite compte que vous n'êtes pas encore en 2021... Vous vous trouvez quelque part durant le Moyen-Age, au milieu d'une foule assistant à un combat de sorciers, qui s'échangent des formules magiques incompréhensibles. Avec le vacarme de votre arrivée vous avez attiré l'attention, mais vous apercevez le prochain portail. Pour écarter la foule qui se trouve entre le portail et vous, vous avez l'idée de crier une fausse incantation qui paraîtra suffisamment démoniaque pour faire fuir les badauds. A partir d'une phrase, vous devrez créer une fausse incantation en inversant l'ordre des lettres de chaque mot de la phrase. A chaque incantation, une séquence de lettres "magique" vous sera donnée : les mots contenant cette séquence seront plus puissants dans leur forme originale et ne devront pas être inversés.
Données
Entrée
Ligne 1 : une chaîne de 1 à 5 lettres minuscules, représentant la séquence magique Ligne 2 : une chaîne de caractères composée de 1 à 10 mots séparés par des espaces. Ces mots sont composés de 3 à 10 lettres minuscules.
Sortie
Une chaîne de caractères de même longueur, où l'ordre des lettres de chaque mot ne contenant pas la séquence magique a été inversé.
Exemples
Exemple 1
magie
sorcieres
Votre programme devra renvoyer : sereicros
Exemple 2
lor
lorem ipsum dolor sit amet
Votre programme devra renvoyer : lorem muspi dolor tis tema
*/

function ContestResponse(){
    //implement your code here using input array
    const magique = input.shift()
    console.log(input.shift().split(' ').map(i => i.includes(magique) ? i : i.split('').reverse().join('')).join(' '))
}