/*
Objectif

Vous commencez à y voir plus clair ! Dolan semble bien faire partie d'un immense réseau d'influenceurs malintentionnés... Grâce à votre analyse précédente, vous savez quels comptes cibler pour votre enquête.

Vous essayez maintenant de révéler au grand jour les principaux acteurs des manipulations que subissent des éléctions en Russie. Après avoir identifié les comptes suspects, vous vous penchez maintenant sur leurs tweets.

Vous trouvez une bonne méthode pour distinguer les comptes qui sont effectivement russes des comptes dangeureux : si le compte publie trop de contenu la nuit (heure russe), alors c'est très probablement le compte d'un agent.

A partir de la liste des heures de publication d'un compte (les heures sont déjà converties en heure russe), déterminez si ce compte a plus d'activité la nuit que le jour. Si plus de 50% des tweets sont entre 20h et 8h, alors c'est un compte de fake news.


Données

Entrée

Ligne 1 : un entier N compris entre 5 et 1000, représentant le nombre de publications faites par le compte à examiner.
Lignes 2 à N+1 : une chaîne de caractères de la forme hh:mm représentant l'heure d'une publication

Sortie

Votre programme devra renvoyer une seule ligne : SUSPICIOUS si le compte est suspect, OK sinon.

Un compte est considéré suspect si plus de la moitié des publications sont faites la nuit (entre 20:00 et 7:59 compris). Il est garanti qu'aucun compte n'a autant de publications la nuit que le jour.


Exemple

Pour l'entrée :

5
20:04
20:23
08:00
09:15
13:00


Votre code devra renvoyer : OK
En effet, seulement 2 publications ont été faites la nuit sur ce compte.

Pour l'entrée :

5
20:00
00:29
22:58
15:06
17:50


Votre code devra renvoyer : SUSPICIOUS
*/

function parseTime(str) {
    return {
        hour: parseInt(str.substr(0, 2)),
        minute: parseInt(str.substr(3, 2)),
    };
}

function ContestResponse(){
    const lines = parseInt(input[0]);
    let suspicious = 0;
    
    for (let i = 0; i < lines; i++) {
        const time = parseTime(input[i + 1]);

        if (time.hour >= 20 || time.hour < 8) {
            suspicious++;
        }
    }
    if (suspicious * 2 + 1 > lines) {
        console.log('SUSPICIOUS');
    } else {
        console.log('OK');
    }
}