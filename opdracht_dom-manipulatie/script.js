// DEEL 1 - Elementen toevoegen aan de DOM

const buttonPressed = event => { 
    // console.log("button pressed") opdracht [2]
    let btnValue = event.target.innerHTML; // grabs the big-five-button class opdracht [4]
    console.log(event.target.innerHTML);
    let newList = document.createElement('li'); // grab the li element and store it to the newList variable opdracht [5]
    let spottedAnimalsList = document.getElementById('spotted-animals-list'); // grab the id element and store it to the spottedAnimalList variable opdracht [6]

    spottedAnimalsList.appendChild(newList); // parent.appendChild(child) opdracht [7]
    newList.innerHTML = btnValue; // Li innerHTML names is equal to btnValue
}  

let bigFiveBtn = document.querySelectorAll('.big-five-button'); // grab the element button and store it to the variable 
    bigFiveBtn.forEach(button => { // opdracht [1]
        button.addEventListener('click', buttonPressed);// opdracht [3] function two parameters,first paremeter is event click and second parameter function)
        // after we click the callback function is executed. 
})

// DEEL 2 - 1 element verwijderen uit de DOM
const removeFirstAnimal = () => {
    console.log('Remove First Animal');
    let spottedAnimal = document.getElementsByTagName('ul')[1]; // opdracht [4] parent
    console.log(spottedAnimal);
    let firstAnimal = spottedAnimal.getElementsByTagName('li')[0]; // opdracht [3] child
    console.log(firstAnimal);
    spottedAnimal.removeChild(firstAnimal);   
}

let removeFirstitem = document.querySelector('#remove-first-item-button').addEventListener('click', removeFirstAnimal); // opdracht [1] & [2]

// DEEL 3 - Meerdere element verwijderen uit de DOM
const removeAllAnimals = () => {
    let spottedAnimal = document.getElementById("spotted-animals-list"); // opdracht [3] parent
    console.log(spottedAnimal);
    // spottedAnimal.innerHTML = ""; // simpele [4];
    // while (spottedAnimal.firstChild) { // chique manier met een while loop opdracht [4]
    //     console.log(spottedAnimal.firstChild);
    //     spottedAnimal.removeChild(spottedAnimal.firstChild);
    // }
    spottedAnimal.querySelectorAll('*').forEach(n => n.remove()); // chique manier met een forEach loop opdracht [4]
}
let removeAllAnimalsbtn = document.querySelector('#remove-all-button').addEventListener('click',removeAllAnimals); // opdracht [1] & [2]
