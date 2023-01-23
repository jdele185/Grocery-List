const groceries = ['Milk', 'Cookies', 'Orange Juice']

const groceryList = document.getElementById('groceryList')
const newGroceryInput = documen.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn')

const createGroceryElement = grocery => {
    const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery
    groceryElement.classList.add('groceryItem')
    return groceryElement
}
const addGrocery = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}
addBtn.addEventListener("click", ev => {
    e.preventDefault()
    const value = newGroceryInput.value
    if (value) {
       addGrocery(value) 
       newGroceryInput.value = null
    }
})

groceries.map(grocery => addGrocery(grocery))
