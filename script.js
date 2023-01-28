let player = {
	name: "Adil",
	dollar: 300
}

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

let sum = 0
let cards = []
let message = ""
let isAlive = false
let hasBlackjack = false

playerEl.textContent = player.name + ": " + player.dollar + "$"

function startGame() {
	let firstCard = getRandomCard()
	let secondCard = getRandomCard()
	cards = [firstCard, secondCard]
	sum = firstCard + secondCard
	isAlive = true
	renderGame()
}

function getRandomCard() {
	let num = Math.floor(Math.random() * 13 ) + 1
	return num
}

function renderGame() {
	cardsEl.textContent = "Cards: "
	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " "
	}
	
	sumEl.textContent = "Sum: " + sum

	if (sum < 21) {
		message = "Want to draw a new card ?"
	} else if (sum === 21) {
		hasBlackjack = true
		message = "You've got BlackJack !"
	} else {
		isAlive = false
		message = "You're out of the game..."
	}

	messageEl.textContent = message
}

function newCard() {
	if (isAlive && !hasBlackjack) {

		let newCard = getRandomCard()
		cards.push(newCard)
		sum += newCard
		renderGame()
	}
}