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

dataArray.forEach((costume) => {
    console.log(costume);
})

let costumesContainer = document.getElementById("costumeContainer");

costumesContainer.innerText = "Hello world";
