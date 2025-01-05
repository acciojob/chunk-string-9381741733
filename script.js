function chunkString(str, chunkLength) {
    if (chunkLength <= 0) {
        throw new Error("Chunk length must be greater than 0");
    }

    const result = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        result.push(str.substring(i, i + chunkLength));
    }
    return result;
}