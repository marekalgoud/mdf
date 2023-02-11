/*
Équilibre du futur
Vous souhaitez intégrer la Brigade du Temps, équipe d'élite composée uniquement de méta-humains capables de voir dans le futur. En rassemblant les meilleurs méta-humains, la Brigade est d'une aide précieuse pour anticiper certains événements néfastes à l'Humanité et la Planète, et les prévoyants et en proposant des solutions optimales avant même qu'ils adviennent. La Brigade est composée de 4 Ordres : la Prévoyance, l'Innovation, la Sagesse et la Protection. Aujourd'hui c'est le grand jour : après des mois de préparation, vous allez passer l'ultime examen pour intégrer l'Ordre de l'Innovation. Vous devrez montrer que vous êtes un méta-humain, et l'un des meilleurs. Vous rentrez dans la salle de test où vous attends un officier, ainsi qu'une gigantesque carte de la ville. Une des missions de l'Ordre de l'Innovation est de garantir l'approvisionnement énergétique aux fonctions vitales de la ville. Votre test consistera à prédire les catastrophe pouvant endommager le réseau, et d'examiner le réseau. Chaque ligne alimente 3 zones différentes de la ville, et la charge sur chaque ligne doit être à peu près équilibrée entre ces 3 zones. Écrivez un programme qui détermine si une ligne électrique donnée est équilibrée ou non.
Données
Entrée
Ligne 1 : une chaîne de caractères de longueur comprise entre 3 et 20, représentant la charge sur une ligne donnée. Un caractère représente une unité de charge. La charge est répartie sur 3 zones, représentées par A, B et C.
Sortie
Votre programme devra renvoyer sur la sortie standard YES si la ligne est équilibrée, NO sinon. Pour être équilibrée, il faut que le nombre de charge sur chaque zone (A, B et C) diffère de 2 unités ou moins entre chaque zone.
Exemples
Exemple 1
ABCABCABB Sur cette ligne, il y a 3 charges sur A, 4 charges sur B et 2 sur C. Il y a donc un écart maximal de 2 charges sur la ligne (entre B et C). Cette ligne est donc équilibrée, il faudra renvoyer YES
Exemple 2
ABBBBC Sur cette ligne, il y a un écart de charge de 3. Il faudra donc renvoyer NO
*/

function ContestResponse(){
    //implement your code here using input array
    const msg = input[0].split('').reduce((acc, cur) => {
        if(acc[cur]) {
            acc[cur] = acc[cur] + 1
        } else {
            acc[cur] = 1
        }
        return acc
    }, {})
    
    const min = Math.min(...Object.values(msg))
    const max = Math.max(...Object.values(msg))
    
    console.log(max - min > 2 ? 'NO' : 'YES')
}