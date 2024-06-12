// Get Home buttons and score element
let homescorebtn1 = document.getElementById("home-score-btn-1");
let homescorebtn2 = document.getElementById("home-score-btn-2");
let homescorebtn3 = document.getElementById("home-score-btn-3");
let homeStoreEl = document.getElementById("home-score");
let homeScore = 0;

// Function to increase home score
function increaseHomeScore(points) {
    homeScore += points;
    homeStoreEl.textContent = homeScore;
}

// Add event listeners to home score buttons
homescorebtn1.addEventListener("click", function() { increaseHomeScore(1); });
homescorebtn2.addEventListener("click", function() { increaseHomeScore(2); });
homescorebtn3.addEventListener("click", function() { increaseHomeScore(3); });

// Get Guest buttons and score element
let guestscorebtn1 = document.getElementById("guest-score-btn-1");
let guestscorebtn2 = document.getElementById("guest-score-btn-2");
let guestscorebtn3 = document.getElementById("guest-score-btn-3");
let guestStoreEl = document.getElementById("guest-score");
let guestScore = 0;

// Function to increase guest score
function increaseGuestScore(points) {
    guestScore += points;
    guestStoreEl.textContent = guestScore;
}

// Add event listeners to guest score buttons
guestscorebtn1.addEventListener("click", function() { increaseGuestScore(1); });
guestscorebtn2.addEventListener("click", function() { increaseGuestScore(2); });
guestscorebtn3.addEventListener("click", function() { increaseGuestScore(3); });
