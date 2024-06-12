import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// Firebase configuration
const appsetting = {
    databaseURL: "https://mobile-app-47fd4-default-rtdb.firebaseio.com/"
}

// Initialize Firebase
const app = initializeApp(appsetting)
const database = getDatabase(app)
const shoppingListRef = ref(database, "shoppingList")

// Get DOM elements
const inputEl = document.getElementById("input-field")
const btnEl = document.getElementById("click-btn")
const addbtnEl = document.getElementById("add-btn")

// Add item to the shopping list on button click
btnEl.addEventListener("click", function() {
    let inputValue = inputEl.value
    if (inputValue) {
        push(shoppingListRef, inputValue)
        clearInputField()
    }
})

// Listen for changes in the shopping list and update the UI
onValue(shoppingListRef, function(snapshot) {
    let itemsArray = snapshot.exists() ? Object.entries(snapshot.val()) : []
    clearShoppingList()
    itemsArray.forEach(item => {
        addItemToShoppingList(item)
    })
})

// Clear the shopping list UI
function clearShoppingList() {
    addbtnEl.innerHTML = ""
}

// Clear the input field
function clearInputField() {
    inputEl.value = ""
}

// Add an item to the shopping list UI
function addItemToShoppingList(item) {
    let itemId = item[0]
    let itemValue = item[1]

    let newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener("click", function() {
        let exactLocationOfItem = ref(database, `shoppingList/${itemId}`)
        remove(exactLocationOfItem)
    })
    addbtnEl.appendChild(newEl)
}
