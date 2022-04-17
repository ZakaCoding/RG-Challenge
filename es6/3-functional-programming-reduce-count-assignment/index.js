/**
 * Hitung berapa banyak pengulangan angka dari array berikut 
 * dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const returnUserAverageScore = require("../3-functional-programming-map-assignment");

const countRepetition = (numbers) => {
  // TODO: answer here
  let repetition = {}
  for(const key of numbers)
  {
    if(repetition[key])
    {
      repetition[key] += 1
    }
    else
    {
      repetition[key] = 1
    }
  }
  
  return repetition

  // let repetition = {}
  // let count = numbers.reduce((prev, curr) => {
  //   if(repetition[curr])
  //   {
  //     return repetition[curr] += 1
  //   }

  //   return repetition[curr] = 1
  // })

  // return console.log(repetition)
};

countRepetition([1, 1, 1, 5, 5, 10, 9])

module.exports = countRepetition