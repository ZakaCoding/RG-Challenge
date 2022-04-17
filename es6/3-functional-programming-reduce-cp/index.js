/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

const sumTotalArray = (numbers) => {
  // TODO: answer here
  let res = numbers.reduce((prev, curr) => {
    return parseInt(prev + curr)
  })

  return res
};

module.exports = sumTotalArray