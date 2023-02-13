/*
Décodage temporel
A l'autre bout du portail, vous vous rendez vite compte que vous n'êtes toujours pas en 2021... mais dans un couloir métallique avec des hublots. En vous rapprochant de l'un deux, vous réalisez que vous êtes dans l'espace près d'une étoile double, vous semblez être dans le futur ! Vous croisez alors un petit nain vert, aux oreilles pointues, armé d'une sorte de grande lame de lumière. Il se tourne vers vous, visiblement pressé, et vous dit "Prendre la machine temporelle tu dois !" en faisant des signes vers une grande porte. Quelle étrange manière de s'exprimer ! Derrière la porte, vous trouvez effectivement une grande machine qui semble pouvoir vous ramener en 2021. Problème : il vous manque le code. En fouillant le registre, vous trouvez le protocole à suivre : pour faire fonctionner la machine vous devez saisir une séquence de symboles '_' , '|' correspondant à un code composé de chiffres. Chaque chiffre de 0 à 9 est représenté par une séquence de 3 ou 4 symboles parmi '_' et '|'. Vous ne connaissez pas le code, mais vous arrivez à trouver, dans la pièce, deux codes différents correspondant à des séquences de 10 chiffres comportant chaque chiffre de 0 à 9 une seule fois. Cela devrait être suffisant pour comprendre le mécanisme de traduction et composer votre propre code, nécessaire à votre retour. Vous trouvez aussi votre propre suite de chiffres dans la base de donnée, il ne vous reste donc qu'à faire la traduction en une séquence de symboles. Indice : un seul code valide est possible pour chaque entrée.
Données
Entrée
Ligne 1 : un chaîne de caractères de longueur 10 comportant tous les chiffres de 0 à 9, un espace, et une chaine de caractère de longueur 30 à 40 composée uniquement des symboles '_' et '|'. C'est la première séquence de chiffres et son code associé. Ligne 2 : même convention que la ligne 1. C'est la seconde séquence de chiffres et son code associé. Ligne 3 : un chaine de caractères de longueur 12 à 16 composée de chiffres de 0 à 9. C'est votre propre séquence de chiffres dont vous devez trouver le code.
Sortie
Sur une seule ligne : Le code de la chaine sur la ligne 3.
Exemple
Pour l'entrée :
4573628901 _||_|___|_|_|____|||_||______||||__
0754296318 __||_|_||___||_|||________|_||___||
585571121004456
Votre programme devra renvoyer :
|___|||__|___|_|||__||__|||||____||__||_||__||_|_____
car le seul code possible (sachant qu'on utilise toujours 3 ou 4 caractères pour chaque chiffre) pour les 2 premières lignes est d'associer à chaque chiffre le code suivant :
0 __||
1 ||__
2 |||
3 _|_
4 _||_
5 |__
6 ___
7 _|_|
8 _||
9 ____
On en déduit alors que, pour votre propre numéro 585571121004456, il faut obtenir la solution proposée. 
*/

function ContestResponse() {
    //implement your code here using input array
    const [nb1, ch1] = input.shift().split(' ')
    const [nb2, ch2] = input.shift().split(' ')
    const nb = input.shift()

    let combi = product([3, 4], 10).filter(i => i.reduce((a, b) => a + b, 0) == ch1.length)

    let code = []
    for(let c of combi) {
        let count = 0
        code = []
        for(let i = 0; i < c.length; i++) {
            code[nb1[i]] = ch1.substr(count, c[i])
            count = count + c[i]
        }
        if(nb2.split('').map(i => code[i]).join('') == ch2) {
            break
        }
    }
    console.log(nb.split('').map(i => code[i]).join(''))
}

function product(iterables, repeat) {
  var argv = Array.prototype.slice.call(arguments), argc = argv.length;
  if (argc === 2 && !isNaN(argv[argc - 1])) {
    var copies = [];
    for (var i = 0; i < argv[argc - 1]; i++) {
        copies.push(argv[0].slice()); // Clone
    }
    argv = copies;
  }
  return argv.reduce(function tl(accumulator, value) {
    var tmp = [];
    accumulator.forEach(function(a0) {
      value.forEach(function(a1) {
        tmp.push(a0.concat(a1));
      });
    });
    return tmp;
  }, [[]]);
}