//handle when the number is pressed. It renders the number into #input element
function number(number) {
    // TODO: answer here
    let input = document.querySelector('#input') // input element

    return input.value += String(number)
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    let input = document.querySelector('#input') // get input element
    switch (operator !== null || operator !== '') {
        case operator === 'Del':
            let newNumber = ""
            let getInput = document.querySelector('#input').value

            // check input not null
            if(getInput !== null)
            {
                // check number
                if(getInput.length === 1)
                {
                    input.value = ""
                }
                else
                {
                    newNumber = getInput.slice(0, -1)
                    input.value = String(newNumber)
                }
            }
            break;
        case operator === 'AC':
            input.value = "" // clear input
            break;
        case operator === '+':
            input.value += "+"
            break;
        case operator === '*':
            input.value += "x"
            break;
        case operator === '-':
            input.value += "-"
            break;
        case operator === '.':
            input.value += "."
            break;
        case operator === '/':
            input.value += "/"
            break;
        default:
            console.log("Something went wrong")
            break;
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    let result = ""
    let data = document.querySelector('#input').value
    let input = document.querySelector('#input')

    // split number and operator
    // let number = input.split(/[/ab+\-\x]/)
    // let string = input.split(/[0-9]/) // filter number from operator
    // let operator = string.filter((currentVal) => {
    //     return currentVal !== ""
    // })

    var calculate = data.replace(/[\x]/, '*');
    
    return input.value = eval(calculate)
    // return console.log(eval(ev))
}