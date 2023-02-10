/*
Objectif

Le pachinko est un jeu de hasard où vous pouvez perdre beaucoup d'argent. Mais vous, vous allez utiliser votre connaissance des probabilités pour gagner beaucoup d'argent.
Le principe du pachinko est très simple : une bille en métal tombe sur une pyramide de goupilles, le prix que vous gagnez dépend du bac dans lequel la bille atterrit. La bille saute de goupille en goupille, elle ne peut que tomber sur l'une des deux goupilles (ou deux bacs) directement en dessous.

Vous remarquez que les goupilles sont biaisées : la bille n'a pas la même probabilité de tomber à gauche et à droite.
Vous notez alors pour chaque goupille la probabilité p que la bille tombe à droite, la probabilité qu'elle tombe à gauche est alors 1-p.
À partir des probabilités que vous avez relevées, vous cherchez à écrire un programme trouvant le bac dans lequel la bille a le plus de chance de tomber.

Remarque : Un pachinko de N rangées est constitué de N+1 bacs et de goupilles sur les différentes rangées : 1 seule goupille sur la première rangée, 2 sur la seconde et N goupilles sur la dernière rangée.

Données

Entrée

Ligne 1 : un entier N entre 1 et 100, le nombre de rangée de goupilles
Lignes 2 à N+1, sur la i-ème ligne : une suite de i nombres décimaux entre 0 et 1 avec au plus 14 chiffres significatifs, la probabilité que la bille tombe à droite pour chaque goupille de la rangée.

Sortie

Un entier entre 0 et N (inclus), le bac dans lequel la bille a le plus de chance de tomber. Si plusieurs bacs de probabilité maximale existent, vous pouvez renvoyer n'importe lequel d'entre eux.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = +input.shift()
    input = input.map(i => i.split(' ').map(x => parseFloat(x)))

    function calc(prob, p) {
      let n = prob.length;
      let r = [prob[0] * (1 - p[0])];
      for (let i = 0; i < n - 1; i++) {
        r.push(prob[i] * p[i] + prob[i + 1] * (1 - p[i + 1]))
      }
      r.push(prob[n - 1] * p[p.length - 1])
      return r
    }

    let prob = [1.0];
    for (let line of input) {
      prob = calc(prob, line)
    }

    console.log(prob.findIndex(i => i == Math.max(...prob)))
}