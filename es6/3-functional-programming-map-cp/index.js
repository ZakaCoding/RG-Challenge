/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  // TODO: answer here
  let res = array.map((arr) => {
    return {
      [arr] : String(arr.toUpperCase())
    }
  })

  return res
};

// console.log(lowerToUpperMap(['a', 'b', 'c', 'd']))

module.exports = lowerToUpperMap
