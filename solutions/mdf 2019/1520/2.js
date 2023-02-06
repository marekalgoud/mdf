/*
Objectif

Vous voilà adulte, au fil des années, vous avez rencontré des tas de personnes fabuleuses, accepté des milliers de demandes d'amis sur votre réseau social préféré. Responsable et soucieux de vos données sur les réseaux sociaux, vous exportez l'ensemble de vos relations d'amitiés dans un format ouvert et approprié. Irrésistiblement curieux, une question vous taraude: si vous classiez vos amis en fonction du nombre d'amis en commun, qui retrouverez-vous en haut du classement ?

Guidé par cette question, on vous demande de calculer votre « BFF » (Best Friends Forever), autrement dit: l'ami qui a le plus en commun avec vous.

Données

Entrée

Ligne 1 : Deux entiers séparés par des espaces, un entier N compris entre 1 et 100, indiquant le nombre de personnes sur le réseau et un entier M compris entre 0 et N² décrivant le nombre de relations entre elles.

Ligne 2 à M + 1 : Deux entiers compris entre 1 et N et séparés par une espace décrivant une relation d'amitié entre la personne dont le numéro est le premier entier et la personne dont le numéro est le second entier. Vous êtes toujours la personne numéro 1.

Attention: Les amitiés sont symétriques si 5 est ami avec 10 alors 10 est ami avec 5. Par ailleurs, la liste des relations peut contenir plusieurs fois la même relation.

Sortie

Un entier représentant l'identifiant de votre BFF, l'ami qui a le plus d'ami en commun avec vous. Votre BFF doit bien évidemment être un de vos amis. Si vous avez plusieurs BFFs, prenez celui dont le numéro est le plus grand. Si vous n'avez pas de BFF (c'est à dire si vous n'avez pas d'amis, ou que vos amis n'ont pas d'ami en commun avec vous), renvoyez -1 !

Exemple

Entrée

5 8
5 6
1 2
2 3
3 4
5 1
4 5
1 4
1 5
2 1
1 3

Sortie

4

Notez sur cet exemple que "5 1" et "1 5" décrivent la même relation d'amitié.

Entrée

5 3
2 3
3 4
4 5

Sortie

-1

Entrée

5 3
1 3
1 2
2 5

Sortie

-1
*/

function ContestResponse(){
    //implement your code here using input array
    let bff = []
    input = input.map(i => i.split(' '))
    
    for(let rel of input) {
        const [from, to] = rel
        let index = bff.findIndex(i => i.name === from)
        if(index > -1 && !bff[index].friends.includes(to)) {
            bff[index].friends.push(to)
        } else {
            bff.push({ name: from, friends: [to] })
        }
        
        index = bff.findIndex(i => i.name === to)
        if(index > -1 && !bff[index].friends.includes(from)) {
            bff[index].friends.push(from)
        } else {
            bff.push({ name: to, friends: [from] })
        }
    }
    
    const meIndex = bff.findIndex(i => i.name == 1)
    const me = bff.splice(meIndex, 1)[0]

    // mes amis
    bff = bff.filter(i => me.friends.includes(i.name))
    
    if(bff.length > 0) {
        bff = bff.map(i => {
            const commonFriends = i.friends.filter(f => me.friends.includes(f))
            return { name: i.name, friends: commonFriends }
        })

        bff.sort((a, b) => {
            if(b.friends.length > a.friends.length) {
                return 1
            } else if(a.friends.length > b.friends.length) {
                return -1
            } else { 
                return b.name - a.name
            }
        })
        
        const best = bff.shift()
        if(best.friends.length > 0) {
            console.log(best.name)
        } else {
            console.log(-1)
        }
    } else {
        console.log(-1)
    }
}