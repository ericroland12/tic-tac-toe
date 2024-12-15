const jsConfetti = new JSConfetti()
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')
const b4 = document.getElementById('b4')
const b5 = document.getElementById('b5')
const b6 = document.getElementById('b6')
const b7 = document.getElementById('b7')
const b8 = document.getElementById('b8')
const b9 = document.getElementById('b9')

const arr = []
const boxes = document.querySelectorAll('[data-input]') 


const result = document.getElementsByClassName('result')[0]
const message =  document.getElementsByClassName('message')[0]
const restartButton = document.getElementsByClassName('btn')[0]
const playerTurn = document.getElementsByClassName('choose_player_text')[0]
var currentPlayer = 'X'

const form = document.getElementsByClassName('form')[0]
const inputPlayerBox = document.getElementsByClassName('input-player')[0]
const label = document.getElementsByTagName('label')[0]
const inputValue = document.getElementsByTagName('input')[0]

const strokes = [
    document.getElementById('line_b1b9'),
    document.getElementById('line_b3b7'),
    document.getElementById('line_b4b6'),
    document.getElementById('line_b1b3'),
    document.getElementById('line_b7b9'),
    document.getElementById('line_b1b7'),
    document.getElementById('line_b2b8'),
    document.getElementById('line_b3b9')
]

inputPlayerOne()


function inputPlayerOne(){
   
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        if(inputValue.value == ""){return}
        else{
            // inputValue.value.classList.add('capitalize')
            arr.push(inputValue.value)
            playerTurn.innerText = `${arr[0]}'s Turn`
            console.log(arr)
            form.reset()
            label.innerHTML = "Player 2"

            inputPlayerTwo()
        }
       
    })
}

startGame()

function inputPlayerTwo(){
    form.addEventListener('submit', (event) => {
        event.preventDefault()
         inputPlayerBox.style.display = 'none'
         document.getElementsByClassName('text_1')[0].style.display = 'block'
         playerTurn.style.display = 'block'
         document.getElementsByClassName('box')[0].style.display = 'grid'
        
       
    })
}


function startGame(){
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            if(box.innerText !== "" || result.style.display == 'block'){return}
            else{
                setPlayers(box)
                switchPlayers()
                playerOneWins()
                playerTwoWins()
               
            }
           
        })
    })
}
function switchPlayers(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O'
        playerTurn.innerHTML = `${arr[1]}'s turn`
    }else{
        currentPlayer = 'X'
        playerTurn.innerHTML = `${arr[0]}'s turn`
    }
}

function setPlayers(boxElement){
    if(currentPlayer === 'X'){
        boxElement.innerHTML = 'x'
    }else{
            boxElement.innerHTML = 'o'
        }
       
}

function playerOneWins(){
    if(b1.innerText == 'X' && b2.innerText == 'X' && b3.innerText == 'X'){
        displayResult(strokes[3], arr[0])
    }else if(b1.innerText == 'X' && b4.innerText == 'X' && b7.innerText == 'X'){
        displayResult(strokes[5], arr[0])
    }else if(b3.innerText == 'X' && b6.innerText == 'X' && b9.innerText == 'X'){
        displayResult(strokes[7], arr[0])
    }else if(b2.innerText == 'X' && b5.innerText == 'X' && b8.innerText == 'X'){
        displayResult(strokes[6], arr[0])
    }else if(b4.innerText == 'X' && b5.innerText == 'X' && b6.innerText == 'X'){
        displayResult(strokes[2], arr[0])
    }else if(b7.innerText == 'X' && b8.innerText == 'X' && b9.innerText == 'X'){
        displayResult(strokes[4], arr[0])
    }else if(b1.innerText == 'X' && b5.innerText == 'X' && b9.innerText == 'X'){
        displayResult(strokes[0], arr[0])
    }else if(b3.innerText == 'X' && b5.innerText == 'X' && b7.innerText == 'X'){
        displayResult(strokes[1], arr[0])
    }
    
}

function playerTwoWins(){
    if(b1.innerText == 'O' && b2.innerText == 'O' && b3.innerText == 'O'){
        displayResult(strokes[3], arr[1])
    }else if(b1.innerText == 'O' && b4.innerText == 'O' && b7.innerText == 'O'){
        displayResult(strokes[5], arr[1])
    }else if(b3.innerText == 'O' && b6.innerText == 'O' && b9.innerText == 'O'){
        displayResult(strokes[7], arr[1])
    }else if(b2.innerText == 'O' && b5.innerText == 'O' && b8.innerText == 'O'){
        displayResult(strokes[6], arr[1])
    }else if(b4.innerText == 'O' && b5.innerText == 'O' && b6.innerText == 'O'){
        displayResult(strokes[2], arr[1])
    }else if(b7.innerText == 'O' && b8.innerText == 'O' && b9.innerText == 'O'){
        displayResult(strokes[4], arr[1])
    }else if(b1.innerText == 'O' && b5.innerText == 'O' && b9.innerText == 'O'){
        displayResult(strokes[0], arr[1])
    }else if(b3.innerText == 'O' && b5.innerText == 'O' && b7.innerText == 'O'){
        displayResult(strokes[1], arr[1])
    }else if((b1.innerText == 'X'|| b1.innerText == 'O') && (b2.innerText == 'X'|| b2.innerText == 'O')
        && (b3.innerText == 'X'|| b3.innerText == 'O') && (b4.innerText == 'X'|| b4.innerText == 'O')
        && (b5.innerText == 'X'|| b5.innerText == 'O') && (b6.innerText == 'X'|| b6.innerText == 'O')
        && (b7.innerText == 'X'|| b7.innerText == 'O') && (b8.innerText == 'X'|| b8.innerText == 'O') 
        && (b9.innerText == 'X'|| b9.innerText == 'O')){
        result.style.display = 'block'
        message.innerHTML = `It's a Tie!`
    }
}

function displayResult(stroke, player){
    document.getElementsByClassName('svg')[0].style.display = 'block'
       stroke.style.display = 'block'
    setTimeout(() => {
        result.style.display = 'block'
        message.innerHTML = `${player} wins!`
        jsConfetti.addConfetti()
    },1200)
}


function restart(){
    result.style.display = 'none'
    boxes.forEach(box => {
        box.innerText = ''
        document.getElementsByClassName('svg')[0].style.display = 'none'
        strokes.forEach(stroke => stroke.style.display = 'none')
        playerTurn.innerHTML = `${arr[0]}'s Turn`
       currentPlayer = 'X'
    })
}
