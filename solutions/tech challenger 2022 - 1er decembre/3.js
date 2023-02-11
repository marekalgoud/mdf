/*
Le meilleur parcours
Vous vous faites vite remarquer au sein de la Brigade. Depuis vos exploits sur le dérèglement climatique, vous avez été un des éléments les plus prometteurs de l'Ordre. Mais durant vos missions, vous avez remarqué qu'un méta-humain très puissant va plus vite que vous, et anticipe encore mieux que la Brigade certaines catastrophes... Vous n'en parlez pas encore à votre direction, mais vous lancez vos recherches sur ce mystérieux bienfaiteur inconnu de la Brigade. Dans votre quête, vous remarquez un motif étrange : il semblerait que celui-ci se déplace en minimisant à tout prix son empreinte carbone. Pour commencer vos recherches, vous décidez de vous concentrer uniquement sur les trajets de la nouvelle ville sous-marine, projet phare pour évaluer la possibilité de construire, plus tard, une ville dans l'espace. Dans ce village sous-marin du futur, chaque maison est munie de coordonnées x,y,z en 3 dimensions. Pour se déplacer d'une maison à l'autre, on utilise un transport économe qui suit un réseau de lignes droites. Ainsi la distance entre deux points (x₁,y₁,z₁) et (x₂,y₂,z₂) est définie par la formule :
|x₂-x₁| + |y₂-y₁| + |z₂-z₁|
(la somme des valeurs absolues des différences de chaque coordonnée) Trouvez un parcours passant par les 8 maisons du village et revenant à son point de départ qui soit le plus court possible.
Données
Entrée
Ligne 1 à 8 : 3 entiers x,y et z (entre 0 et 10000) représentant les coordonnées de chaque maison. La ligne 1 correspond à la maison 0, jusqu'à la ligne 8 qui correspond à la maison 7.
Sortie
Ligne 1 Une suite de 8 entiers (de 0 à 7) correspondant à votre ordre de parcours des maisons.
Exemple
Pour l'entrée :
5 7 5
0 8 0
5 1 8
2 4 4
3 0 8
1 8 6
5 6 3
7 1 2
La solution est :
0 5 1 3 4 2 7 6
Ici la distance totale de la meilleure solution est 54 = 6 (0 à 5) + 7 (5 à 1) + 10 (1 à 3) + 9 (3 à 4) + 3 (4 à 2) + 8 (2 à 7) + 8 (7 à 6) + 3 (6 à 0) Notons qu'il existe toujours plusieurs solutions possibles (puisque le parcours est une boucle), n'importe laquelle sera acceptée.
*/

function ContestResponse() {
    //implement your code here using input array
    
    const dist = (p, q) => {
      return p.reduce((sum, curr, i) => {
        return sum + Math.abs(curr - q[i]);
      }, 0);
    };

    const points = input.map(i => i.split(" ").map(Number))

    let mindist = Number.POSITIVE_INFINITY;
    let best = [];
    for (const t of permutations([1, 2, 3, 4, 5, 6, 7])) {
      let d = 0;
      for (const [a, b] of Array.from(pairwise([0, ...t, 0]))) {
        d += dist(points[a], points[b]);
      }
      if (d < mindist) {
        mindist = d;
        best = t;
      }
    }

    console.log([0, ...best].join(" "));
}