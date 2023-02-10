/*
Énoncé

Durant l’été, la température grimpe et les vacanciers se ruent naturellement vers les plages.

Afin de diminuer le risque de noyade, les municipalités font appel à des maîtres-nageurs. Théoriquement, chaque maître-nageur peut gérer au maximum 10 personnes à la fois. Cependant, ils se retrouvent parfois débordés et ils ne sont donc plus en mesure de garantir la sécurité des baigneurs. Donc lorsque le nombre de baigneurs est strictement supérieur à dix fois le nombre de maitre-nageurs, une alerte sonore retentit qui incite les baigneurs à redoubler de vigilance. Cette alerte dure aussi longtemps que les maîtres-nageurs sont débordés.

Pour les aider à identifier une « alerte foule », un portique de sécurité placé à l’entrée de la plage scanne toutes les entrées et sorties des baigneurs.

Vous devez déterminer combien de temps par jour l'alerte retentit.

On considère que la journée commence avec zéro baigneur et se termine à 23:00. On vous garantit qu'il y a au maximum une entrée ou une sortie par minute.

Format des données

Entrée

Ligne 1 : un entier N compris entre 1 et 1379 correspondant au nombre d'entrées ou sorties des baigneurs durant une journée.
Ligne 2 : un entier M compris entre 1 et 50 correspondant au nombre de maîtres-nageurs.
Ligne 3 à N+2 : une chaîne de caractères H et une lettre P séparés par un espace où H correspond à l’heure d’un passage au niveau du portique au format « hh:mm » et P correspond au type de passage, entrée ou sortie (P peut prendre la valeur « E » pour une entrée ou « S » pour une sortie). Ces lignes sont triées par ordre chronologique.

Sortie

Un entier correspondant au temps cumulé durant lequel l'alerte sonore retentit, exprimé en minutes.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = +input.shift()
    const nbMN = +input.shift()
    const capaMax = nbMN * 10
    input = input.map(i => {
        const [time, type] = i.split(' ')
        const [hour, min] = time.split(':')
        return {
            time: parseInt(hour) * 60 + parseInt(min),
            type
        }
    })
    
    let nbPersons = 0
    let isOverCapa = false
    let startTime = 0
    let totalTimeAlert = 0
    for(let evt of input) {
        const {time, type} = evt
        if(type === 'E') {
            nbPersons++
        } else {
            nbPersons--
        }
        if(nbPersons > capaMax && !isOverCapa) {
            startTime = time
            isOverCapa = true
        }
        
        if(nbPersons <= capaMax && isOverCapa) {
            totalTimeAlert += time - startTime
            isOverCapa = false
        }
    }
    if(isOverCapa) {
        totalTimeAlert += (23*60 - startTime)
    }
    
    console.log(totalTimeAlert)
}