function sumDigit(num){
 
    if(num<10)
        return num;

    sumStr = num.toString()
    
    newStr = (Number(sumStr[0])+Number(sumStr[1])).toString()+sumStr.slice(2)

    return sumDigit(Number(newStr))
}

module.exports = sumDigit