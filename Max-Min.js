console.log('Buenos dias')


let a =[4,8,1,5,10,3]

function getMin(a){
 
    let min = a[0]

       for(let i = 0 ;i< a.length;i++){
           if(a[i]<min)min = a[i]
       }

       return min
    }
     function getMax(a){ 

        let max = a[0] 

        for(let i = 0 ;i< a.length;i++) {
             if(a[i]>max)max = a[i] 
            } 
             
             return max 
    }
    
    console.log('El menor es : ',getMin(a))
    console.log('El mayor es : ',getMax(a))