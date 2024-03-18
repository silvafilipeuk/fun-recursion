function reversStr(word){
    if(word.length === 1){
    return word
    }

//  let newStr =""
//  console.log(newStr)
//  for(let i = word.length -1 ; i >= 0 ;i--){

//     newStr += word[i]
//      console.log(newStr)
    
//  }
//  return newStr
let  newStr = (word.slice (-1))+reversStr(word.slice(0, -1))
console.log(newStr)
return newStr
}
module.exports = reversStr;