let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reset-btn')
let newgameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')
let turnO = true // player1 or player2
// 2D array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () => {
        turnO = true
        enableBoxes()
        msgContainer.classList.add('hide')
}

// for every box when clicked
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked!");
        if(turnO == true){
            box.style.color = "blue"
            box.style.backgroundColor = "white"
            box.innerText = 'O'
            turnO = false;
        } else {
            box.style.color = "white"
            box.style.backgroundColor = "blue"
            box.innerText = 'X'
            turnO = true
        }
        box.disabled = true
        checkWinner()
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}


const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ''
        box.style.backgroundColor = "white"
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

let showTie = () => {
    msg.innerText = `Game is tied! start again`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    for (pattern of winPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]); // prints only numbers like 0 1 2   0 3 6  etc
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]); // to access the boxes of the indexes in the winning pattern
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText); // now to access the innerText
        
        
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('WINNER', pos1Val);
                showWinner(pos1Val)
            } else {
                if (boxes[0].innerText !== "" && boxes[1].innerText !== "" && boxes[2].innerText !== "" && boxes[3].innerText !== "" && boxes[4].innerText !== "" && boxes[5].innerText !== "" && boxes[6].innerText !== "" && boxes[7].innerText !== "" && boxes[8].innerText !== "") {
                    showTie();
                }
            }
        } 
    }
}

if(boxes[0].innerText !== "" && boxes[1].innerText !== "" && boxes[2].innerText !== "" && boxes[3].innerText !== "" && boxes[4].innerText !== "" && boxes[5].innerText !== "" && boxes[6].innerText !== "" && boxes[7].innerText !== "" && boxes[8].innerText !== ""){
    if (!checkWinner ) {
        console.log('no winner');
    }
}

newgameBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)