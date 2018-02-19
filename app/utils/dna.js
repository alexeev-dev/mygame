const ranges = [
  [1, 51],
  [52, 102],
  [103, 153],
  [154, 203],
  [204, 255]
]

export function getGen(dna, offset) {
  const doubleOffset = offset * 2
  return parseInt(dna.slice(doubleOffset + 2, doubleOffset + 4), 16)
}

function isInRange(value, start, end) {
  return value >= start && value <= end
}

export function decodeGen(gen, range = 0) {
  const [start, end] = ranges[range]
  if (isInRange(gen, start, end)) {
    return range
  } else if (range < 4) {
    return decodeGen(gen, range + 1)
  } else {
    return 4
  }
}

function getType(dna, offset) {
  const dominant = Math.max(getGen(dna, offset), getGen(dna, offset + 2))
  return decodeGen(dominant)
}

function decodeDNA(dna) {
  return {
    BDYFRM: {type: getType(dna, 6), var: 0},
    WNGFRM: {type: getType(dna, 9), var: 0},
    HOOFRM: {type: getType(dna, 12), var: 0},
    HRNFRM: {type: getType(dna, 15), var: 0},
    EYEFRM: {type: getType(dna, 18), var: 0},
    HAIFRM: {type: getType(dna, 21), var: 0},
    NOSFRM: {type: getType(dna, 24), var: 0},
    MTHFRM: {type: getType(dna, 27), var: 0},
    EARFRM: {type: getType(dna, 30), var: 0},
    STAINS: {type: getType(dna, 33), var: 0}
  }
}

export default decodeDNA
