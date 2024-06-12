let myleads = []
const inputel = document.getElementById("input-el")
const inputbtn = document.getElementById("save-input")
const ulel = document.getElementById("ul-el")
const deletebtn = document.getElementById("aa")
let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
console.log(leadsfromlocalstorage)
if(leadsfromlocalstorage){
    myleads = leadsfromlocalstorage
    renderleads()
}
deletebtn.addEventListener("dblclick",function(){
    console.log("double clicked")
    localStorage.clear
    myleads = []
    renderleads()
})

inputbtn.addEventListener("click", function() {
    myleads.push(inputel.value)
    console.log(myleads)
    inputel.value = ""
    localStorage.setItem("myleads", JSON.stringify(myleads))
    renderleads()
    console.log(localStorage.getItem("myleads"))
})

function renderleads(){
    let listitems = ""
    for (let i = 0; i < myleads.length; i++) {
        listitems += `<li>
            <a target='_blank' href='${myleads[i]}'> 
            ${myleads[i]}</a>
        </li>`
    }
    ulel.innerHTML = listitems
}
