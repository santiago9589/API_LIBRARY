const splitType = (type) =>{
    const separeted = type.split("/")

    return separeted[1]
}   

module.exports = splitType