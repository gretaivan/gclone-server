function formatData(data, length){
    data.length = length
    return data.filter(item => item !== 'undefined')
}

function randomData(data){
    length = data.length
    randomIndex = Math.floor(Math.random() * length)
    return data[randomIndex]
}

module.exports = {
    formatData,
    randomData
}