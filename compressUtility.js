const compressData = (str)=> {
    let count = 1;
    let compressStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str[i] === str[i+1]) {
            count += 1;
        } else {
            compressStr += count + str[i];
            count = 1;
        }
    }

    return compressStr;
}

const decompressData = (str) => {
    let deCompressStr = '';

    for (let i = 1; i < str.length; i+=2) {
        const char = str[i];
        const count = str[i-1];

        deCompressStr += char.repeat(+count);
        // console.log(char,+count)
    }

    return deCompressStr;
}

module.exports = {
    compressData,
    decompressData
}