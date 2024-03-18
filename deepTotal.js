function deepTotal(array)
{
    let counter = 0;

    for(let i = 0; i < array.length; i++)
    {
        if(Array.isArray(array[i]))
        {
            counter += deepTotal(array[i])
        }
        else
        {
            counter += array[i]
        }
    }

    return counter;

}

module.exports = deepTotal;