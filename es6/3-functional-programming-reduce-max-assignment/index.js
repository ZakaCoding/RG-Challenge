/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
  let max = numbers.reduce((prev, curr) => {
    if(prev < curr)
    {
      return curr
    }

    return prev
  })

  return max;
};

module.exports = maxFromArray