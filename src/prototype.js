
function prototypeChainOf(obj) {
    if (obj == null || obj == undefined) {
        // throw Error('not support null or undefind')
        return obj
    }
    const prots = []
    prototypeOf(obj, prots)
    return prots
}

function prototypeOf(obj, prots) {
    const prot = Object.getPrototypeOf(obj)
    if (prot) {
        prots.push(prot.constructor.name)
        prototypeOf(prot, prots)
    } else {
        // console.log(prot)
    }
}

module.exports = prototypeChainOf;
