let itemInput = document.getElementById('itemInput');
let itemButton = document.getElementById('addItem');
let itemList = document.getElementById('itemList');
let feedback = document.getElementById('feedback');

function addItem() {
    let listItem = document.createElement('li');
    if (itemInput.value) {
        listItem.textContent = itemInput.value;
        itemList.appendChild(listItem);
        feedback.textContent = '';
        itemInput.value = '';
        itemInput.focus();
    } else {
        feedback.textContent = 'Enter Something!!';
    }
}

itemButton.addEventListener('click', addItem);
