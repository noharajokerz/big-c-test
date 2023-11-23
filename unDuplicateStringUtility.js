const mysolution = (str) => {
    const unDupStrList = [];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === str.lastIndexOf(char)) {
            unDupStrList.push(char)        
        }    
    }

    // console.log(unDupStrList)
    const res = (unDupStrList.length > 0) ? unDupStrList[0] : '_' 
    // console.log(res)
    return res;
}

mysolution('aabbcc')

module.exports = {
    mysolution
}