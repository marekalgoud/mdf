/*Enoncé

Dans ce challenge, on joue à une version légèrement modifiée du puissance 4. Le jeu se joue sur un carré de 8 cases par 8 cases. Les 2 joueurs mettent leurs pions rouges ou jaunes jusqu'à ce que toutes les cases du carré soient intégralement remplies. Si un joueur a réussi à faire une ligne ou une colonne de 4 pions, il marque 1 point. De façon plus générale, s'il fait une ligne ou une colonne de N pions, (N≥4) alors il marque N-3 points. Un même pion peut être utilisé à la fois pour marquer des points sur une ligne et sur une colonne. On ne prend pas en compte les lignes de pions faites en diagonales.

Le but du challenge est de déterminer le vainqueur d'une partie.

Format des données

Entrée

Lignes 1 à 8 : une ligne du plateau du jeu représentée par une chaîne de 8 caractères R ou J. R indique une pièce rouge et J indique une pièce jaune.


Sortie

La chaîne de caractères R ou J pour indiquer le vainqueur ou NOBODY si les deux joueurs ont le même nombre de points.
*/


function ContestResponse() {
    //implement your code here using input array
    const init = [...input]
    
    input = input.map(i => i.split(''))
    
    let r = 0
    let j = 0
    
    for(let x = 0; x < input.length; x++) {
        for(let y = 0; y < input.length; y++) {
            if (input[x][y] == 'R') {
                r += countCol(x, y, 'R')
            } else if(input[x][y] == 'J') {
                j += countCol(x, y, 'J')
            }
        }
    }
    
    input = init.map(i => i.split(''))
    for(let x = 0; x < input.length; x++) {
        for(let y = 0; y < input.length; y++) {
            if (input[x][y] == 'R') {
                r += countLine(x, y, 'R')
            } else if(input[x][y] == 'J') {
                j += countLine(x, y, 'J')
            }
        }
    }
    
    function countCol(x, y, color) {
        let i = 0
        while(input[x] && input[x][y + i] == color) {
            input[x][y + i] = '0'
            i++
        }
        return Math.max(0, i - 3)
    }
    function countLine(x, y, color) {
        let i = 0
        while(input[x + i] && input[x + i][y] == color) {
            input[x + i][y] = '0'
            i++
        }
        return Math.max(0, i - 3)
    }
    
    if(r > j) {
        console.log('R')
    } else if (j > r) {
        console.log('J')
    } else {
        console.log('NOBODY')
    }
}