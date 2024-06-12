
let sum = 0
let hasBlackJack = false
let isAlive = false
let cards = []
let message = ""
let messageEl = document.getElementById("message")
console.log(messageEl)
let sumEl = document.querySelector("#sum")
let cardEl = document.getElementById("cards")
// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
console.log("cards")
function getrandomcard(){
    let randomnumber = Math.floor(Math.random() * 13) + 1
    if(randomnumber > 10){
        return 10
    }else if (randomnumber === 1) {
        return 11
    } else {
       return randomnumber
    }
}
function startGame(){
    isAlive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard , secondcard]
    sum = firstcard + secondcard
    renderGame()
}
function renderGame(){
    cardEl.textContent = "Card: " 
    for(let i=0 ; i<cards.length ; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
messageEl.textContent = message
}
function newcard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getrandomcard()
    sum += card
    renderGame()
    cards.push(card)
}
}