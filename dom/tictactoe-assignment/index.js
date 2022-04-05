let turn = "X";
const SIZE = 3;
let countClick = 0;

let winningCount = {
    "X": 0,
    "O": 0
}

//render scoreboard on x-wins and o-wins <label/>
function renderScore() {
    // TODO: answer here
    let x = document.querySelector("#x-wins")
    let o = document.querySelector("#o-wins")

    x.innerText = winningCount.X
    o.innerText = winningCount.O
}

//check who the winner is, add the score to the scoreboard, and render the scoreboard
function checkWinner() {
    //Let's make it simple, just hardcode the winning combinations
    let getValue = (y, x) => document.getElementById(y + "-" + x).textContent;
    let winner = ""

    //horizontal
    if (getValue(0, 0) != "" && getValue(0, 0) === getValue(0, 1) && getValue(0, 0) === getValue(0, 2)) {
        winner = getValue(0, 0);
    }
    if (getValue(1, 0) != "" && getValue(1, 0) === getValue(1, 1) && getValue(1, 0) === getValue(1, 2)) {
        winner = getValue(1, 0);
    }
    if (getValue(2, 0) != "" && getValue(2, 0) === getValue(2, 1) && getValue(2, 0) === getValue(2, 2)) {
        winner = getValue(2, 0);
    }
    
    //vertical
    if (getValue(0, 0) != "" && getValue(0, 0) === getValue(1, 0) && getValue(0, 0) === getValue(2, 0)) {
        winner = getValue(0, 0);
    }
    if (getValue(0, 1) != "" && getValue(0, 1) === getValue(1, 1) && getValue(0, 1) === getValue(2, 1)) {
        winner = getValue(0, 1);
    }
    if (getValue(0, 2) != "" && getValue(0, 2) === getValue(1, 2) && getValue(0, 2) === getValue(2, 2)) {
        winner = getValue(0, 2);
    }

    //diagonal
    if (getValue(0, 0) != "" && getValue(0, 0) === getValue(1, 1) && getValue(0, 0) === getValue(2, 2)) {
        winner = getValue(0, 0);
    }
    if (getValue(0, 2) != "" && getValue(0, 2) === getValue(1, 1) && getValue(0, 2) === getValue(2, 0)) {
        winner = getValue(0, 2);
    }

    if (winner != "") {
        winningCount[winner]++;
        renderScore();
        generate();
    }
}

function checkNoWinner() {
    // TODO: answer here
    generate()
}

//handle click event, don't forget to disable the button so that it can't be clicked again
function Click(event) {
    // TODO: answer here
    event.preventDefault

    let data = event.target

    if(countClick % 2 === 0)
    {
        data.innerText = turn
    }
    else
    {
        data.innerText = "O"
    }

    // generate disabled
    if(data.innerText !== null)
    {
        data.setAttribute("disabled", true)
    }

    countClick++

    if(countClick === 9)
    {
        generate()
    }
    else
    {
        checkWinner()
    }
    // checkNoWinner()
}

// // winner
// function winner()
// {
//     let petak = document.querySelectorAll('.petak')
//     // console.log(petak.length)
//     let gameOn = false

//     // Create rules to win
//     /**
//      * 0 1 2
//      * 3 4 5
//      * 6 7 8
//      * 
//      * Total petak = 9
//      * 
//      * first indexing is 0
//      */

//     // PLAYER X
//     // Vertical rules
//     if(petak[0].innerText === "X" && petak[1].innerText === "X" && petak[2].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }
//     else if(petak[3].innerText === "X" && petak[4].innerText === "X" && petak[5].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }
//     else if(petak[6].innerText === "X" && petak[7].innerText === "X" && petak[8].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }
//     // Horizontal Rules
//     else if(petak[0].innerText === "X" && petak[3].innerText === "X" && petak[6].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }
//     else if(petak[1].innerText === "X" && petak[4].innerText === "X" && petak[7].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }
//     else if(petak[2].innerText === "X" && petak[5].innerText === "X" && petak[8].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }
//     // Diagonal Rules
//     else if(petak[2].innerText === "X" && petak[4].innerText === "X" && petak[6].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }
//     else if(petak[8].innerText === "X" && petak[4].innerText === "X" && petak[8].innerText === "X")
//     {
//         // do something
//         winningCount.X += 1
//         gameOn = true
//     }

//     /**
//      * PLAYER O
//      */
//     if(petak[0].innerText === "O" && petak[1].innerText === "O" && petak[2].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }
//     else if(petak[3].innerText === "O" && petak[4].innerText === "O" && petak[5].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }
//     else if(petak[6].innerText === "O" && petak[7].innerText === "O" && petak[8].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }
//     // Horizontal Rules
//     else if(petak[0].innerText === "O" && petak[3].innerText === "O" && petak[6].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }
//     else if(petak[1].innerText === "O" && petak[4].innerText === "O" && petak[7].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }
//     else if(petak[2].innerText === "O" && petak[5].innerText === "O" && petak[8].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }
//     // Diagonal Rules
//     else if(petak[2].innerText === "O" && petak[4].innerText === "O" && petak[6].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }
//     else if(petak[8].innerText === "O" && petak[4].innerText === "O" && petak[8].innerText === "O")
//     {
//         // do something
//         winningCount.O += 1
//         gameOn = true
//     }

//     // Check winner
//     renderScore();

//     if(gameOn)
//     {
//         generate()
//         // reset
//         gameOn = false
//         countClick = 0
//     }

//     // let board = document.querySelector('#board')
//     // return console.log(board.childNodes[0].childNodes[1].childNodes[2])
// }
// function clicked(event)
// {
//     event.preventDefault
//     let data = event.target // this element
    
//     // check how many click
//     if(countClick % 2 === 0)
//     {
//         data.innerText = turn
//     }
//     else
//     {
//         data.innerText = "O"
//     }
//     countClick++

//     // disable click
//     data.removeAttribute("onclick")

//     // check winner
//     winner()
// }

//generate the tictactoe board. It is just a 3x3 table with <button/> inside <td/>
function generate() {
    const BUTTON_SIZE = "60px"

    let board = document.getElementById("board");
    board.replaceChildren();
    let table = document.createElement("table");
    board.appendChild(table);
    
    for (let i=0; i<SIZE; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        // TODO: answer here
        for(let y = 0; y < SIZE; y++)
        {
            let button = document.createElement("button")
            button.style.width = BUTTON_SIZE
            button.style.height = BUTTON_SIZE
            button.style.marginRight = "5px"
            button.style.padding = "0px"
            button.style.backgroundColor = "whitesmoke"

            // generate ID
            button.setAttribute("id", i + "-" + y)
            // generate click event
            button.setAttribute("onclick", "Click(event)")
            
            tr.appendChild(button)
        }
    }

    renderScore();
}