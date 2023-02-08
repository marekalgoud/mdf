/*
Énoncé

Vous avez été promu directeur d'une agence bancaire. Votre première idée est de durcir les intérêts débiteurs pour que les clients fassent plus attention à leur compte.
Dans le passé, si le solde d'un client était négatif pendant plus 2 de jours consécutifs, on commençait à calculer un intérêt débiteur. Cet intérêt était égal à 10% du solde du compte à partir du 3ème jour et tant que le compte demeurait négatif.
Désormais, si un client a un solde négatif, dès le premier jour son intérêt débiteur sera égal à 20% du solde, idem pour les jours suivants, et si le solde reste négatif plus de 3 jours consécutifs, l'intérêt débiteur pour chaque jour à partir du 4ème sera de 30% du solde tant que le solde demeure négatif.
Dans l'ancienne comme dans la nouvelle méthode, on ne prélève pas tout de suite les intérêts débiteurs sur le compte, on envoie une facture au client à la fin de l'année avec le total.
Vous souhaitez calculer la différence entre les montants totaux d'intérêts calculés avec l'ancienne méthode et la nouvelle méthode pour voir à quelle point votre méthode est dissuasive.

Format des données

Entrée

Ligne 1 : un entier N compris entre 1 et 365 correspondant au nombre de jours sur lequel vous étudiez le compte.
Ligne 2 : un entier compris entre 0 et 500 correspondant au solde du compte bancaire le premier jour de votre étude.
Ligne 3 à N+2 : un entier compris entre -400 et 400 correspondant à la variation du solde du compte chaque jour.

Sortie

Un entier correspondant à la différence arrondie à l'entier supérieur entre l'ancienne méthode de calcul des intérêts débiteurs et la nouvelle méthode. Pour éviter les soucis liés aux arrondis, une tolérance d'un euro en plus ou en moins sera acceptée.
*/

function ContestResponse() {
    //implement your code here using input array
    const nbJours = input.shift()
    const solde = +input.shift()
    const variations = input.map(Number)
    
    let oldInteret = 0
    let consecutiveDays = 0
    let oldSolde = solde
    console.error({oldSolde})
    
    for(let vari of variations) {
        oldSolde += vari
        if(oldSolde < 0) {
            consecutiveDays += 1
        } else {
            consecutiveDays = 0
        }
        if(consecutiveDays > 2) {
            oldInteret += Math.abs(oldSolde * 0.1)
        }
    }
    
    let newInteret = 0
    consecutiveDays = 0
    let newSolde = solde

    for(let vari of variations) {
        newSolde += vari
        if(newSolde < 0) {
            consecutiveDays += 1
        } else {
            consecutiveDays = 0
        }
        
        if(newSolde < 0 && consecutiveDays <= 3) {
            newInteret += Math.abs(newSolde * 0.2)
        } else if(consecutiveDays > 3) {
            newInteret += Math.abs(newSolde * 0.3)
        }
    }

    console.log(Math.floor(newInteret - oldInteret))
}