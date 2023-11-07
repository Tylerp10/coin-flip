const flipImg = document.querySelector(".flipimg")
const results = document.querySelector(".resultText")
const btn = document.querySelector(".btn")
const coinDisplay = document.querySelector(".coinDisplay")

const choices = ["heads", "tails"]

let coinFlip;

function flip(){
    let randNum = Math.floor(Math.random()*choices.length)
    coinFlip = choices[randNum]
}

btn.addEventListener("click", ()=>{
    flip()
    coinImg()
    resultText()
})

function coinImg(){
    if (coinFlip == "heads"){
        coinDisplay.innerHTML = "<img src=heads.png>" 
    } else {
        coinDisplay.innerHTML = "<img src=tails.png>"
    }
} 

function resultText() {
    if (coinFlip == "heads"){
        results.innerHTML = "It's Heads!" 
    } else {
        results.innerHTML = "It's Tails!"
    }  
}