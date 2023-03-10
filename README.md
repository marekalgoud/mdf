# Note pour le mdf

Voici quelques fonctions utiles  pour le mdf

# Fonctions utiles

 - racine carrée : `Math.sqrt(nb)` 
 - convertir hexa en base 10 :   `parseInt(codeHexa, 10)` 
 - convertir un nombre en hexa :    `nb.toString(16)`
 - Récupère l'entier d'un nombre : `Number.toInteger(val)`
 
 - Récupère les 5 derniers caractères d'une chaine : `xxx.slice(-5)`
 
# Regex

- Tester si un chaine correspond à la regex : 
  - `string.match(/maregexp/)`
  - `/maregexp/.test(string)`
  
## Quelques expressions communes : 

 - A single character of: a, b or c : `[abc]`
 - A character except: a, b or c : `[^abc]`
 - A character in the range: a-z : `[a-z]`
 - A character not in the range: a-z : `[^a-z]`
 - A character in the range: a-z or A-Z : `[a-zA-Z]`
 - Any single character: `.`
 - Alternate - match either a or b : `a|b`
 - Any whitespace character:  `\s`
 - Any non-whitespace character: `\S`
 - Any digit: `\d`
 - Any non-digit: `\D`
 - Any word character: `\w`
 - Any non-word character: `\W`
 - Match everything enclosed: `(?:...)`
 - Capture everything enclosed: `(...)`
 - Zero or one of a: `a?`
 - Zero or more of a: `a*`
 - One or more of a: `a+`
 - Exactly 3 of a: `a{3}`
 - 3 or more of a : `a{3,}`
 - Between 3 and 6 of a : `a{3,6}`
 - Start of string: `^`
 - End of string: `$`
 - A word boundary: `\b`
 - Non-word boundary : `\B`

# Opérations sur les tableaux

- Convertir toutes les entrées de type string en nombre :`input = input.map(i => +i)`ou `input.map(Number)`
- Récuperer les valeurs unique d'un tableau : `input = [...new Set(input)]`
- Récuperer les valeurs qui apparaissent au moins deux fois dans un tableau : `input = input.filter(i => input.filter(j => i === j).length >= 2)`
- Créer un tableau de taille 10 rempli de 0 : `Array(10).fill(0)`
- récupérer une partie d'un tableau : 
```js 
const newArray = arr.slice(début)
const newArray = arr.slice(début, fin)
```
- Trouver le max d'un tableau
```js
const max = Math.max(...montableau)
```

# Equivalent des fonctions itertools de python

- produit carthésiens :

```js
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
```


exemple d'utilisation :

`products(['A','B'], 2)`

donne
`[['A','A'],['A','B'], ['B', 'A'], ['B','B']]`


- Combinaison

```js
const k_combinations = (set, k) => {
  if (k > set.length || k <= 0) {
    return []
  }
  if (k === set.length) {
    return [set]
  }
  const combs = []
  if (k === 1) {
    for (let i = 0; i < set.length; i++) {
      combs.push([set[i]])
    }
    return combs
  }
  for (let i = 0; i < set.length - k + 1; i++) {
    const head = set.slice(i, i + 1)
    const tailcombs = k_combinations(set.slice(i + 1), k - 1)
    for (let j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]))
    }
  }
  return combs
}

const combinations = (set) => {
  const combs = [];
  for (let k = 1; k <= set.length; k++) {
    const k_combs = k_combinations(set, k)
    for (let i = 0; i < k_combs.length; i++) {
      combs.push(k_combs[i])
    }
  }
  return combs
}
```

exemple d'utilisation :

`k_combinaison(['A','B', 'C', 'D'], 2)`

donne

`[['A', 'B'], ['A', 'C'], ['A', 'D'], ['B', 'C'], ['B', 'D'], ['C', 'D']]`

- Pairwise :

```js
const pairwise = function* (iterable) {
  const elements = Array.from(iterable);
  for (let i = 0; i < elements.length - 1; i++) {
    yield [elements[i], elements[i + 1]];
  }
};

var nums = [1,2,3,4,5,6];

var res = pairwise(nums);

Array.from(res).forEach(function(elem) {
   console.log(elem); 
});
```

- Permute :
```js
function permute(arr, size = arr.length) {
  let results = [];

  function backtrack(first = 0) {
    if (first === size) {
      results.push([...arr.slice(0, size)]);
    }

    for (let i = first; i < arr.length; i++) {
      [arr[first], arr[i]] = [arr[i], arr[first]];
      backtrack(first + 1);
      [arr[first], arr[i]] = [arr[i], arr[first]];
    }
  }

  backtrack();
  return results;
}
```

exemple d'utilisation :

`permute(['A','B', 'C'])`

donne

`[['A', 'B', 'C], ['A','C', 'B'], ['B', 'A', 'C'], ['B', 'C', 'A], ['C', 'B', 'A'], ['C', 'A', 'B]]`

# Map

`const map = new Map()`

Ajout de donnée  

```js
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
```

Récupération d'une donnée

```js
map.get('a')
```

taille d'une map

```js
map.size
```

suppression d'une valeur

```js
map.delete('a')
```

# Graph

Utiliser la librairie graph-data-structure présente dans le répertoire librairie.

Initialiser le graph
```js
const graph = Graph();
```

Ajouter des noeuds

```js
graph.addNode("a");
graph.addNode("b");
graph.addEdge("a", "b");
```

Les noeuds sont ajoutés de manière implicites lors que l'on rajoute des liens :
```js
graph.addEdge("b", "c");
```

Voir une version sérialisée du graph
```js
graph.serialize();
```

### Requete sur le graph

```graph.nodes()```

Liste tous les noeuds du graph

```graph.adjacent(node)```

Renvoie la liste des noeuds adjacent au noeud en paramètre.(**u** -> **v**)

```graph.indegree(node)```

Calcul le nombre de connexions entrantes

```graph.outdegree(node)```

Calcul le nombre de connexions sortantes

## Algorithme des graph

Récupérer le tri topoligique du graph
```js
graph.topologicalSort(); // Returns ["a", "b", "c"]
```

DFS
```js
graph.depthFirstSearch([sourceNodes][, includesourcenodes][, errorOnCycle])
```

Est-ce que le graph contient des cycles ?

```js
graph.hasCycle()
```

Plus petit ancetre commun

```js
graph.lowestCommonAncestors([node1][, node2])
```

Le plus court chemin

```js
graph.shortestPath(sourceNode, destinationNode)
```

## Quelques bouts de codes utiles sur les graphs

récupère les noeuds "root"
```js
graph.nodes.filter(node => graph.indegrees(node) == 0)
```

Nombre de feuilles enfants (noeud sans enfants) d'un noeud
```js
function nbChildren(node) {
    const nodes = graph.adjacent(node)
    if(nodes.length == 0) {
        return 1
    } else {
        let nb = 0
        for(let n of nodes) {
            nb += nbChildren(n)
        }
        return nb
    }
}
```

Nombre de noeud enfants d'un noeud
```js
function nbChildren(node) {
    const nodes = graph.adjacent(node)
    let nb = nodes.length
    for(let n of nodes) {
        nb += nbChildren(n)
    }
    return nb
}
```
# Tri

Tri par sélection 

```js
function sort(tab) {
  for(let i = 0; i < tab.length; i++) {
    //stocker l'index de l'élément minimum
    let min = i
    for(let j = i+1; j < tab.length; j++) {
      if(tab[j] < tab[min]) {
       // mettre à jour l'index de l'élément minimum
       min = j
      }
    }
    var tmp = tab[i]
    tab[i] = tab[min]
    tab[min] = tmp
  }
  return tab
};
var tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);
```

Bubble sort

```js
function bubblesort(tab) {
  let swap = 0
  for (let i = 0; i < tab.length - 1; i++) {
    if (tab[i+1] < tab[i]) {
          const temp = [tab[i+1],tab[i]]
          tab[i+1] = temp[1]
          tab[i] = temp[0]
          swap += 1
    }
    if (i+1 === tab.length - 1) {
      if (swap === 0) {
          break
      } else {
          i -= tab.length - 1
          swap = 0
      }
    }
  }
  return tab
}
const tab = [4,2,5,1,3]
console.log(bubblesort(tab))
```

# Géometrie

- distance entre deux points en 2D (|x₂-x₁| + |y₂-y₁|):

```js
function dist(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
}
```

- distance entre deux points en 3D (|x₂-x₁| + |y₂-y₁| + |z₂-z₁|):

```js
function dist(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y) + Math.abs(a.z - b.z)
}
```
