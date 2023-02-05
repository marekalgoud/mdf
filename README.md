# Note pour le mdf

Voici quelques fonctions utiles  pour le mdf

# Fonctions utiles

 - racine carrée : ``Math.sqrt(nb)` 
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

- Convertir toutes les entrées de type string en nombre :`input = input.map(i => +i`ou `input.map(Number)`
- Récuperer les valeurs unique d'un tableau : `input = [...new Set(input)]`
- Récuperer les valeurs qui apparaissent au moins deux fois dans un tableau : `input = input.filter(i => input.filter(j => i === j).length >= 2)`
- Créer un tableau de taille 10 rempli de 0 : `Array(10).fill(0)`

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
