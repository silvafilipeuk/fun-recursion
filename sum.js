function sumDigit(num){
 
//  let numStr = num.toString() 

// let sum = 0
// for(let i= 0 ; i< numStr.length -1 ; i++){
  
//     sum = Number(numStr[i])+ Number(numStr[i+1])   

// }
// let sumStr = sum.toString()
// for(let i = 0; i<sumStr.length -1  ; i++){
//     sum = Number(sumStr[i])+Number(sumStr[i+1])
// }
//     return sum
// let s = Number(numStr.slice(0))+ sumDigit(Number(numStr.slice(1, numStr.length-1)))
// console.log(Number(numStr.slice(1, numStr.length)))
 //console.log((Number(numStr[0])))
//console.log(numStr.split(''))
//  console.log(numStr.split('').reduce((acc, curr) => acc + parseInt(curr), 0))
//  if(numStr.length === 1){
//     return parseInt(num)
//  }
//  //return (Number(numStr[0]))+sumDigit(Number(numStr.slice(1)))
//  return sumDigit(numStr.split('').reduce((acc, curr) => acc + parseInt(curr), 0));


// }
if(num<10)
return num;
sumStr = num.toString()
newStr = (Number(sumStr[0])+Number(sumStr[1])).toString()+sumStr.slice(2)
return sumDigit(Number(newStr))
}
module.exports = sumDigit