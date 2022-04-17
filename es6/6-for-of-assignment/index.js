/**
 * Muncul dimana-mana.
 * Merupakan nilai yang muncul di setiap subarray (Muncul dimana-mana).
 *
 * Contoh:
 *  - [[1, 2, 3], [5,4,1], [4, 14, 1]], 1 => true
 *  - [[1, 2, 3], [5,4,1], [4, 14, 1]], 2 => false
 *
 * Buatlah fungsi yang argumen pertamanya adalah sebuah array dua dimensi, 
 * dan argumen keduanya adalah elemen yang dicari. Jika value dari argumen ke dua 
 * terdapat pada setiap subarray maka akan mengembalikan nilai true, dan jika hanya 
 * terdapat pada 1 sub array maka akan mengembalikan nilai false.
 * 
 * Hint:
 * - Pastikan menggunakan for-of untuk perulangan
 */

const checkOmnipresent = (array, valueToFind) => {
  // TODO: answer here
  let arr = []
  for(const val of array)
  {
    let datas = val.find((data) =>{
      return data === valueToFind ? true : false
    })

    arr.push(datas)
  }

  let count = 0
  for(const status of arr)
  {
    if(status === valueToFind)
    {
      count++
    }
  }

  return count === array.length ? true : false
};

// console.log(checkOmnipresent([[1, 2, 3], [5,4,1], [4, 14, 1]], 1))

module.exports = checkOmnipresent