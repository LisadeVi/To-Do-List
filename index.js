var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

// Check input length
function inputLength() {
    return input.value.length;
}

// Create a new list element
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; // Clear the input field

    // Function to toggle cross-out
    function crossOut() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", crossOut);

    // Create delete button
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);

    // Delete list item function
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem() {
        li.remove(); // Remove the list item from the DOM
    }
}

// Add list item after button click
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

// Add list item after pressing Enter key
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
    }
}

// Attach event listeners
enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);