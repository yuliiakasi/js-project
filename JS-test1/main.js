const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const deleteButton = document.getElementById('deleteButton');
const sortedNameButton = document.getElementById('sortName');
const sortedValueButton = document.getElementById('sortValue');

//array for storing key=value pairs entered by the user
const arrayList = [];

//create list key=value
function updateList () {
  ul.innerHTML = '';

  for (let i = 0; i < arrayList.length; i++) {
    const pair = arrayList[i];

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.index = i;
    const label = document.createElement('label');


    label.innerText = `${pair.key}=${pair.value}`
    li.append(checkbox, label)
    ul.appendChild(li);

  }
}

//create function which delete selected pairs in list
function deleteItem () {
  const checkboxes = ul.querySelectorAll('input[type=checkbox]');
  const indexesDelete = []; //create array with indexes that must be deleted

  for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i]; //for each selected 'input' set index
    if (checkbox.checked) {
      const index = Number(checkbox.dataset.index);
      indexesDelete.push(index);
    }
  }

  indexesDelete.sort((a, b) => b - a); //sort the indices in descending order to don't disturb the order when deleting

  for (let j = 0; j < indexesDelete.length; j++) {
    arrayList.splice(indexesDelete[j], 1);
  }

  updateList(); //call function to update list
}

//create function to sort elements by name
function sortByName () {
  arrayList.sort((a, b) => a.key.localeCompare(b.key));
  updateList();
}

//create function to sort elements by value
function sortByValue () {
  arrayList.sort((a, b) => a.value.localeCompare(b.value));
  updateList();
}

//create events: sort by name, value, delete pairs
sortedNameButton.onclick = sortByName;
sortedValueButton.onclick = sortByValue;
deleteButton.onclick = deleteItem;

//create event to submit
form.onsubmit = (event) => {
  event.preventDefault();

  //split string with '='
  const pars = input.value.split('=');

  //array length validation
  if (pars.length !== 2) {
    console.error('Invalid input format');
    return;
  }

  let key = pars[0].trim();
  let value = pars[1].trim();

  //validation for allowed characters
  if (!key.match(/^[a-zA-Z0-9]+$/) || !value.match(/^[a-zA-Z0-9]+$/)) {
    console.error('Not allowed characters');
    return;
    }

  //key uniqueness function
  const findDuplicate = arrayList.find((element) => element.key === key);
      if (findDuplicate) {
        findDuplicate.value = value;
      }
      else {
        arrayList.push({key, value});
      }

      updateList();
      input.value = '';

}


