function deepIncludes(array, value)
{
    for(let i = 0; i < array.length; i++)
    {
        if(Array.isArray(array[i]))
        {
            if(deepIncludes(array[i], value))
                return true
        }
        else
        {
            if(array[i] === value)
            {
                return true
            }
        }
    }

    return false
}

module.exports = deepIncludes;