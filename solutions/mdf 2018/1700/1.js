/*
Énoncé

Pour votre anniversaire, vos amis veulent vous faire plaisir : ce soir c'est casino sans limite (ou presque).

D'habitude vous jouez au black jack mais ce soir vous avez une envie de roulette. Vous ne maîtrisez pas trop les règles mais vous savez que :
- si vous misez sur un chiffre qui tombe, vous remportez 36 fois la mise
- si vous misez sur "Pair" (ou "Impair") et qu'un chiffre pair (ou impair) tombe vous remportez deux fois la mise
- 0 n'est pas considéré comme un nombre pair au casino. Si vous misez "Pair" et que le 0 tombe, vous perdez votre mise


Vous commencez avec un nombre de jetons initial et à chaque tour vous misez un certain nombre de jetons. Lorsqu'il ne vous reste plus de jetons, vos amis vont immédiatement en racheter le nombre initial et vous les donnent. Soucieux de la santé financière (voir mentale) de vos amis, vous comptez le nombre de fois où ils vous ont racheté des jetons.

Format des données

Entrée

Ligne 1 : un entier N compris entre 1 et 1000 correspondant au nombre de tours joués.
Ligne 2 : un entier compris entre 10 et 1000 représentant votre nombre initial de jetons.
Ligne 3 à N+2 : un entier M compris entre 1 et 500, une chaine Q comprenant un ou deux caractères et un entier R compris entre 0 et 36 séparés par des espaces. M représente le nombre de jetons que vous misez lors de ce tour. Q représente sur quoi vous misez et peut être un entier compris entre 0 à 36 si vous misez sur un nombre, ou être la lettre P si vous misez sur pair ou I si vous misez sur impair. R correspond au numéro qui sort.


Sortie

Un nombre correspondant au nombre de fois où vos amis ont racheté des jetons pour vous.
*/

function ContestResponse(){
    //implement your code here using input array
    const nb = input.shift()
    
    const nbJetonsInit = +input.shift()
    
    const rounds = input.map(i => {
        const [mise, pari, result] = i.split(' ')
        return {
            mise: +mise,
            pari,
            result: +result
        }
    })
    console.error(rounds)
    
    let nbJetons = nbJetonsInit
    let refill = 0
    for(let r of rounds) {
        const {pari, mise, result} = r
        nbJetons -= mise
        if(result !== 0 && pari == 'P' && result % 2 == 0) {
            nbJetons += mise *  2
        } else if(result != 0 && pari == 'I' && result % 2 != 0) {
            nbJetons += mise *  2
        } else if (result == +pari) {
            nbJetons += mise * 36   
        }
        if(nbJetons <= 0) {
            refill++
            nbJetons += nbJetonsInit
        }
    }
    
    console.log(refill)
}