function ContestResponse(){
    //implement your code here using input array
    const nbJour = +input.shift()
    
    const bitcoin = input.map(i => +i.split(' ')[0])
    const ethereum = input.map(i => +i.split(' ')[1])
    
    let nbChangementB = 0
    let isUp = null
    let cur = bitcoin.shift()
    
    for(let i of bitcoin) {
        if(i > cur && (isUp === false || isUp === null)) {
            nbChangementB++
            isUp = true
        } 
        if(i < cur && (isUp === true || isUp === null)) {
            nbChangementB++
            isUp = false
        }
        cur = i
    }
    
    let nbChangementE = 0
    isUp = null
    cur = ethereum.shift()
    
    for(let i of ethereum) {
        if(i > cur && (isUp === false || isUp === null)) {
            nbChangementE++
            isUp = true
        } 
        if(i < cur && (isUp === true || isUp === null)) {
            nbChangementE++
            isUp = false
        }
        cur = i
    }

    if(nbChangementE > nbChangementB  && nbChangementB != 0) {
        console.log('BITCOIN')
    } else if( nbChangementB > nbChangementE && nbChangementE != 0) {
        console.log('ETHEREUM')
    } else {
        console.log('KO')
    }
}