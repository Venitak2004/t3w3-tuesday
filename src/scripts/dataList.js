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


function renderData() {

    // create an unorder list tag
    let costumesContainerList = document.createElement("ul");

    // removes the existing content from the element.
    costumesContainer.innerText = "";

    dataArray.forEach((costume) => {

        // verfiy what we are working with
        console.log(costume);
   
        // create the list element
        let newCostumeEntry = document.createElement("li");

        // add the value to the HTML element
        newCostumeEntry.innerText = costume;

        // add a button to each entry to remove from the list
        let removeButton = document.createElement("button");

        // add a placeholder value /name to the button
        // removeButton.innerTest = "Remove" + costume;
        removeButton.innerText = `Remove ${costume}`;

        removeButton.onclick = (() => removeCostumeFromDataList(costume));

        // add the element 'li' to the container you must attach/append it to the root element
        costumesContainerList.appendChild(newCostumeEntry);

        // add the element 'li' to the container you must attach/append it to the root element
        newCostumeEntry.appendChild(removeButton);

});

    // Add the container to the HTML page append the 'ul' to the HTML page
    costumesContainer.appendChild(costumesContainerList);
}

function removeCostumeFromDataList (targetItemToRemove) {

    // Create a replica of the dataArray and remove the item that gets removed.
    dataArray = dataArray.filter((costume) => costume != targetItemToRemove);
    renderData();
}
