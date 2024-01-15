
const inputContainer = document.getElementById('input-box');
const listContainer = document.getElementById('List-container');
const btns = document.querySelector('.btn-add');

btns.addEventListener("click", () => {
    if (inputContainer.value === '') {
        alert("You must write something");
    } else {
        let list = document.createElement('li');
        const icon = document.createElement('i');
        icon.classList.add("fa-solid", "fa-trash");
        const spanText = document.createElement('span')
        spanText.appendChild(document.createTextNode(inputContainer.value))
        list.appendChild(spanText); // Set text content
        list.appendChild(icon); // Append the icon element, not the string 'icon'
        listContainer.appendChild(list);
    }
    // When enter is pressed it clears the search button
    inputContainer.value = "";
});