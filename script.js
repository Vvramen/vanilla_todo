let id = 1;
const array = ['color-blue', 'color-yellow', 'color-green', 'color-red', 'color-salad', 'color-violet'];

function loadPage (){
    const mainButton = document.getElementById('main');
    mainButton.addEventListener('click', createTask);
}

function createTask() {
    const value = document.getElementById('input').value;
    if (!value) return (alert("Введите задачу!!!"));

    const checkColor = document.querySelector('input.color:checked');
    const div = document.createElement('div');
    const color = checkColor ? checkColor.classList[1] : array[Math.floor(Math.random() * array.length)];

    div.id = id + "item";
    div.classList.add("container", color)

    const divCheck = document.createElement("div");
    divCheck.id = "div-check" + id;
    divCheck.className = "check";

    const divText = document.createElement("div");
    divText.id = "div-text" + id;
    divText.className = "text";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    const label = document.createElement("label");
    label.innerText = value;

    divCheck.appendChild(checkbox);
    divText.appendChild(label);

    div.appendChild(divCheck);
    div.appendChild(divText);

    document.getElementById('list').appendChild(div);
    checkbox.addEventListener('click', completed);

    if (checkColor) checkColor.checked = false;
    document.getElementById('input').value = "";
    id++;
}

function completed(e) {
    const id = e.target.id;
    const div = document.getElementById(id + "item");

    if (e.target.checked) {
        div.classList.add("completed-task");
    } else {
        div.classList.remove("completed-task");
    }
}