/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

let stopwatch = document.querySelector('#stopwatch') // mendapatkan value dari stopwatch
let startbtn = document.querySelector('#start') // tombol untuk memulai stapwatch
let stopbtn = document.querySelector('#stop') // tombol untuk memberhentikan stopwatch
let resetbtn = document.querySelector('#reset') // tombol untuk mereset value dari stopwatch

// TODO: answer here
let hour = "00"
let minute = "00"
let second = "00"

let timer
startbtn.addEventListener("click", function(){
  timer = setInterval(start, 1000) // timer start

  // disable start button
  startbtn.setAttribute("disabled", true)
})

stopbtn.addEventListener("click", function() {
  stop()

  // start button enabled
  startbtn.removeAttribute("disabled")
})

resetbtn.addEventListener("click", function () {
  reset()

  // start button enabled
  if(startbtn.hasAttribute("disabled")) // ?
  {
    startbtn.removeAttribute("disabled")
  }
})

function start() {
  // TODO: answer here
  let watch = stopwatch.innerHTML.split(":")
  let getHour = parseInt(watch[0])
  let getMinute = parseInt(watch[1])
  let getSecond = parseInt(watch[2])

  getSecond += 1

  if(getSecond > 59)
  {
    getSecond = 0

    getMinute++
  }
  second = getSecond < 10 ? "0" + getSecond : getSecond

  if(getMinute > 59)
  {
    getSecond = 0
    getMinute = 0

    getHour++
  }
  minute = getMinute < 10 ? "0" + getMinute : getMinute

  hour   = getHour < 10 ? "0" + getHour : getHour
  stopwatch.innerHTML = hour + ":" + minute + ":" + second
}

function stop() {
  // TODO: answer here
  clearInterval(timer)
}

function reset() {
  // TODO: answer here
  stopwatch.innerHTML ="00:00:00"
  stop()
}

function runTime() {
  // TODO: answer here
}