/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let newGameBtn = document.querySelector('.new-game') // tombol untuk melakukan restart game
let randomNumber = Math.ceil(Math.random() * 10) // generate random number dari 1 sampai 10
let message = document.querySelector('.message') // element untuk menampilkan pesan
let displayScore = document.querySelector('.score') // element untuk menampilkan score
let input = document.querySelector('.input') // element untuk memasukan data
let checkBtn = document.querySelector('.check') // tombol untuk melakuan pengecekan angka pada input
let score = 10 // nilai yang akan ditampilakan

// TODO: answer here
let number =  document.querySelector('.number')

checkBtn.addEventListener('click', function() {
  if(input.value < 1 || input.value > 10)
  {
    displayMessage("Guess any number between 1 and 10")
  }
  else
  {
    checkNumber()
  }
})

newGameBtn.addEventListener('click', function() {
  resetGame()
})

function displayMessage(msg) {
  // TODO: answer here
  message.innerText = msg
}

function resetGame() {
  // TODO: answer here
  input.value = ""
  score = 10
  displayScore.innerText = 10
  checkBtn.removeAttribute("disabled")
  checkBtn.classList.replace("btn-success", "btn-primary")
  number.innerText = "?"

  // re-init random
  randomNumber = Math.ceil(Math.random() * 10)
  console.log(randomNumber)

  displayMessage("Lets start guessing...")

  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber
}

function checkNumber() {
  // TODO: answer here
  // check random
  if(parseInt(input.value) === randomNumber)
  {
    if(score < 1)
    {
      displayScore.innerText = "0"
      displayMessage("Oops, you lost the game")
      
      // biar makin menarik :)
      checkBtn.setAttribute("disabled", true)
    }
    else
    {
      number.innerText = randomNumber
      displayMessage("Yeay! you guessed it!")

      // biar makin menarik :)
      checkBtn.setAttribute("disabled", true)
      checkBtn.classList.replace("btn-primary", "btn-success")
    }
  }
  else if(parseInt(input.value) > randomNumber)
  {
    score--
    displayScore.innerText = score
    if(score < 1)
    {
      displayScore.innerText = "0"
      displayMessage("Oops, you lost the game")

      // biar makin menarik :)
      checkBtn.setAttribute("disabled", true)
    }
    else
    {
      displayMessage("Oww... tha's too big!")
    }
  }
  else if(parseInt(input.value) < randomNumber)
  {
    score--
    displayScore.innerText = score
    if(score < 1)
    {
      displayScore.innerText = "0"
      displayMessage("Oops, you lost the game")

      // biar makin menarik :)
      checkBtn.setAttribute("disabled", true)
    }
    else
    {
      displayMessage("Too small, buddy!")
    }
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber