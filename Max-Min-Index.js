console.log('Bienvenido')



let a = [1,2,3,4,5]



function getMinIndex(a){

    if(a.length == 0) return -1

    let min = a[0]
let minIndex = 0

     for(let i= 0; i<length; i++){  
         if(a[i] < min){
             min = a[i]
            minIndex = i
         }
     }
      return minIndex
}
function getMaxIndex(a){

    if(a.length == 0) return -1
    
    let max = a[0]
    let maxIndex = 0

    for(let i= 0; i<length; i++){  
        if(a[i] > max){
            max = a[i]
           maxIndex = i
        }
    }
     return maxIndex
}

console.log(getMaxIndex(a))
console.log(getMinIndex(a))