let numRows = 0;
let numCols = 0;
let colorSelected; 
let tableItems = document.querySelector('#grid')


// Init
function init() {
        const tbody = document.createElement('tbody')
        let newRow = tbody.insertRow();
        newRow.insertCell().addEventListener('click', function() {this.style.backgroundColor = colorSelected})
        tableItems.appendChild(tbody)
        numRows++
        numCols++
        return
}

//Add a row
function addR() {
    if (numCols === 0) {
        return init()
    }


    let tableBody = tableItems.querySelector('tbody');

    // Insert a row at the end of table
    let newRow = tableBody.insertRow();

    for (let i = 0; i < numCols; i++) {
        newRow.insertCell().addEventListener('click', function() {this.style.backgroundColor = colorSelected})
    }

    numRows++
}
//Add a column
function addC() {
    if (numCols === 0) {
        return init()
    }

    let rows = document.querySelector('#grid').querySelector('tbody').querySelectorAll('tr');
    
    for (let row of rows) {
        row.insertCell().addEventListener('click', function() {this.style.backgroundColor = colorSelected})
    }

    numCols++
}


//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}