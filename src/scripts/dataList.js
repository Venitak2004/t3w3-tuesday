// Declare the data to display in the front-end
let dataArray = [
    "Frankenstein",
    "Dracula",
    "Vampire",
    "Chucky",
    "Max Verstappen",
    "Wednesday",
    "Voldemort",
    "T-Rex",
    "Gremlin Gizmo",
    "Joker",
    "Clowns"
];


let costumesContainer = document.getElementById("costumeContainer");
// create an unorder list tag
let costumesContainerList = document.createElement("ul");
    // costumesContainer.innerText = "Hello world";

dataArray.forEach((costume) => {

    // verfiy what we are working with
    console.log(costume);
    // add the vlaues to the HTML element

    // create the list element
    let newCostumeEntry = document.createElement("li");

    // add the value to the HTML element
    newCostumeEntry.innerText = costume;

    // add the element 'li' to the container you must attach/append it to the root element
    costumesContainerList.appendChild(newCostumeEntry);
});


// Add the container to the HTML page append the 'ul' to the HTML page
costumesContainer.appendChild(costumesContainerList);
