/**
 * Keluarkan rata-rata dari semua murid yang ada.
 *
 * Contoh
 *  input: [
 *  {
 *      name: "Yono",
 *      nilai: [6, 8, 7, 7, 5, 5]
 *  },
 *  {
 *      name: "Dodi",
 *      nilai: [9, 6, 5, 10, 8, 6]
 *  },
 *  {
 *      name: 'Dori',
 *      nilai: [4, 5, 6, 3, 5, 6]
 *  }
 * ]
 *
 *  output: [{ name: "Yono", rataNilai: 6}, { name: "Dodi", rataNilai: 7}, { name: "Dori", rataNilai: 6}]
 *
 * Hint: gunakan Math.round() untuk membulatkan nilai rata-rata.
 */

const returnUserAverageScore = (students) => {
  // TODO: answer here
  let rest = students.map((val) => {
    let getNilai = val.nilai
    let rataNilai = 0

    let countNilai = getNilai.reduce((a, b) => {
      return a + b
    }) 

    rataNilai = countNilai / getNilai.length

    return {"name" : val.name, "rataNilai" : Math.round(rataNilai)}
  })

  return rest
};

// returnUserAverageScore([{name: "Yono", nilai: [6, 8, 7, 7, 5, 5]}, {name: "Dodi",nilai: [9, 6, 5, 10, 8, 6]}])
// returnUserAverageScore([
//   {
//     name: "Yono",
//     nilai: [6, 8, 7, 7, 5, 5],
//   },
//   {
//     name: "Dodi",
//     nilai: [9, 6, 5, 10, 8, 6],
//   },
//   {
//     name: "Dori",
//     nilai: [6, 8, 7, 3, 5, 5],
//   },
// ])

module.exports = returnUserAverageScore