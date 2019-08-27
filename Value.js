//Hallar el minimo/máximo de los valores
//procedores del arreglo
let a = [4,8,1,5,10,3]
let average = getaverage(a)

function getaverage(a){
    let suma = 0

    for(let i = 0; i<a.length;i++){
      suma = suma +a[i]
    }
    return suma/ a.length
   
}

function getMinValue(a){
    if(a.length ==0) return -1
    let min = a[0]
     let minIndex
    for(let i = 0 ; i< a.length;i++){
    if(distanceToAverage(a[i])<min) min = distanceToAverage(a[i]) 
    minIndex = i
}

return minIndex

}

function distanceToAverage(n){

    return Math.abs(n - average)
}
console.log(getMinValue(a))