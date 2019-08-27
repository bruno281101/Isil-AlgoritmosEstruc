//Hallar el minimo/máximo de los valores
//procedores del arreglo
let notas = [16,17,15,13,16,20,18,11]
let b = [1,5,7,4]

function getMin(a) {
    if (a.length == 0) return -1

     let min = nota(a[0]) 
     for (let i = 0; i< a.length; i++) {

        if (nota(a[i])< min  ) min = nota(a[i])
     }
        return min

}

function nota(n) {
    return notas[n]

}
console.log(getMin(b))