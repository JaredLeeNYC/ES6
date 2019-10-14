var arr = [1,2,'abc',4,'abc',3,'abc',2,'abc',2,2,2,2];

function mostRepeat(originalArr){
   let newArr = [];
   let maxCount = 0;
   let x;
   function myFunction(item){
    if(newArr[item] !== undefined){
        newArr[item] += 1;
    }else{
        newArr[item] = 0;
    }
 } 
 function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

   originalArr.forEach(myFunction);
 

   for(let i=0; i<newArr.length; i++){
       if(newArr[i] === undefined){
           newArr[i] = 0;
       }
   }
   for(let a in newArr){
       if (newArr[a] > maxCount){
           
        maxCount = newArr[a];
       }
   }
   console.log(Object.keys(newArr))
   x = getKeyByValue(newArr, maxCount)
   return x;
}

console.log(mostRepeat(arr))