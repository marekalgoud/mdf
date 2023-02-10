function ContestResponse() {
    //implement your code here using input array
    const nb = +input.shift()
    const res = input.map(i => {
        const [hour, min] = i.split(':')
        const time = parseInt(hour) * 60 + parseInt(min)
        if( time >= 5 * 60 + 30 && time <= 11 * 60 + 59 ) {
           return 'M'
        } else if ( time >= 12 * 60 && time <= 17 * 60 + 59 ) {
           return 'AM'
        } else if (time >= 18 * 60 && time <= 23 * 60 + 29) {
           return 'S'
        } else {
           return 'N'
        }
    }).reduce((acc, cur) => {
         if (acc[cur]) {
           acc[cur]++
         } else {
           acc[cur] = 1
         }
         return acc;
       }, {}
   )

   const values = Object.values(res)
   const maxValue = Math.max(...values)
   const index = values.indexOf(maxValue)
   const key = Object.keys(res)[index]

   console.log(key)
}