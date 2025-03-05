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
removeButton.addEventListener(`click`,function() {
    event.stopPropagation()          // Task 4 : stopPropagation to prevent event bubbling
        container.removeChild(card)  // Task 4 : removeChild from parent
})
    // *** Task 5 ***
    //Double Click
card.addEventListener('dblclick', function() {
    const nameInput = document.createElement('input');
    const positionInput = document.createElement('input');
    const saveButton = document.createElement('button');
        
    //Prepopulate inputs with existing name and positino
    nameInput.value = employeeName.textContent;
    positionInput.value = employeePosition.textContent;
    saveButton.textContent = 'Save';
        
    //Replace static text with inputs
    card.replaceChild(nameInput, employeeName);
    card.replaceChild(positionInput, employeePosition);
    card.appendChild(saveButton);

    //Save button
    saveButton.onclick = function() {
        employeeName.textContent = nameInput.value
        employeePosition.textContent= positionInput.value

    //Revert to static text
        card.replaceChild(employeeName, nameInput);
        card.replaceChild(employeePosition, positionInput);
        card.removeChild(saveButton);
    }
})

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

//Task 4
//Click Event listener to remove button is ABOVE in Task 2 under 'Remove button' header

//Click Event listener to employee container
const employeeContainer = document.getElementById('employeeContainer');
employeeContainer.addEventListener('click', function() {
    console.log('Employee card clicked')})


//Test Case for Task 2
window.onload = function() {
    addEmployeeCard('Marvin Guerrero', 'Software Engineer')
    addEmployeeCard('Teresa Nguyen', 'Account Executive')
    addEmployeeCard(`Joseph Tornincaso`, `Chief Financial Officer`)
//Test Case for Task 3
updateEmployeeCards()
}
