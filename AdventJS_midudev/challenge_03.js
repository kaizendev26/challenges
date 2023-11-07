
const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
    let gifts = packOfGifts.reduce((acc, current) =>{
        return acc + current.length
    },0)
    let reindeer = reindeers.reduce((acc, current) =>{
        return acc + current.length * 2
    },0)

    let rest = Math.floor(reindeer / gifts)

    return rest
}