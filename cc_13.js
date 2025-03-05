//Task 2
function addEmployeeCard(name, position) {
    const container = document.getElementById(`employeeContainer`)

//Creating employee card
const card = document.createElement(`div`)
card.setAttribute(`class`, `employee-card`)

//Header for employee's name
const employeeName = document.createElement(`h3`)
employeeName.textContent = name

//Paragraph for employee's position
const employeePosition = document.createElement(`p`)
employeePosition.textContent = position

//Remove button
const removeButton = document.createElement(`button`)
removeButton.textContent = `Remove`
removeButton.onclick = function () {
    card.remove()
}

//Appending employee card to employee container
card.appendChild(employeeName)
card.appendChild(employeePosition)
card.appendChild(removeButton)
container.appendChild(card)
}

//Task 3
//Updating employee cards
function updateEmployeeCards() {
const employeeCards = document.querySelectorAll(`.employee-card`)

//Convert NodeList to array
const employeeCardsArray = Array.from(employeeCards)
employeeCardsArray.forEach(card=> {
    card.style.border = `1px solid black`
    card.style.backgroundColor = `pink`
    card.style.margin = `10px`
})
}

//Test Case for Task 2
window.onload = function() {
    addEmployeeCard('Marvin Guerrero', 'Software Engineer')
    addEmployeeCard('Teresa Nguyen', 'Account Executive')
    addEmployeeCard(`Joseph Tornincaso`, `Chief Financial Officer`)
//Test Case for Task 3
updateEmployeeCards()
}
