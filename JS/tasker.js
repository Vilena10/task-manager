// const staticNodeList = document.querySelectorAll(".task");
// const liveNodeList = document.querySelector(".container").childNodes;
// console.log(staticNodeList);
// console.log(liveNodeList);

// let newTask = document.createElement("div");
// newTask.innerHTML = "Купить чипсеки"
// newTask.classList.add("task");
// document.querySelector(".container").append(newTask);
// console.log(staticNodeList);
// console.log(liveNodeList);

const container = document.querySelector(".container");
const formCreateTask = document.getElementById("form-create-task");
const taskName = document.getElementById("task-name");
const searchInput = document.getElementById("search-input");
let tasks = document.querySelectorAll(".task");
const btnClear = document.getElementById("btn-clear");
const getInput = document.getElementById("search-input");

formCreateTask.addEventListener("submit", function (event) {
    event.preventDefault(); // отменить поведение по умолчанию - в нашем случае, отменить перезагрузку страницы
    let value = taskName.value;
    // console.log(value);
    /*----- создыем div.task------*/
    let newTask = document.createElement("div");
    newTask.innerHTML = `<span>${value}</span><i tabindex="0" class="bi bi-pen-fill btn-edit"></i><i tabindex="0" class="bi bi-trash2-fill btn-remove"></i>`
    newTask.classList.add("task");
    container.append(newTask);

    tasks = document.querySelectorAll(".task");
    // console.log(tasks);

});
const btn1 = document.querySelector(".btn1");
function compare(a, b) {
    a = a.querySelector("span");
    b = b.querySelector("span");
    if (a.innerHTML > b.innerHTML) return 1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML < b.innerHTML) return -1;
}
btn1.addEventListener("click", function() {
    tasks = document.querySelectorAll(".task")
    let newTask = [...tasks].sort(compare);
    container.innerHTML = "";
    for (let i in newTask) {
         container.append(newTask[i])
    }
});

const btn2 = document.querySelector(".btn2");
function compareReverse(a, b) {
    a = a.querySelector("span");
    b = b.querySelector("span");
    if (a.innerHTML < b.innerHTML) return 1;
    if (a.innerHTML == b.innerHTML) return 0;
    if (a.innerHTML > b.innerHTML) return -1;
}

btn2.addEventListener("click", function () {
  
    let newTask = [...tasks].sort(compareReverse);
    container.innerHTML = "";
    for (let i in newTask) {
        container.append(newTask[i]);
    }
});
const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", function() {
    let newTask = [...tasks];
    newTask = newTask.filter(task => task.classList.contains("immediate"));
    container.innerHTML = "";
    newTask.forEach(task => container.appendChild(task.cloneNode(true)));
})
const btn4 = document.querySelector(".btn4");
btn4.addEventListener("click", function(e){
    e.preventDefault();
    let value = getInput.value;
    let newTask = [...tasks];
    newTask = newTask.filter(function(item) {
        return item.innerHTML.indexOf(value) != -1;
    });
    container.innerHTML = "";
    newTask.forEach(task => container.append(task)); 
})
const btn5 = document.querySelector(".btn5");
btn5.addEventListener("click", function () {
    container.innerHTML = ""; 
    tasks.forEach(task => container.appendChild(task.cloneNode(true)));
    searchInput.value = "";
});
/*------удалить все задачи------*/
btnClear.addEventListener("click", () => {
    container.innerHTML = "";
});

/*----делегирование событий----*/
container.addEventListener("click", (event) => {
    let btn = event.target; // элемент, на который кликнул пользователь
    /*-------удаление задач--------*/
    if (btn.classList.contains("btn-remove")) { // если это кнопка удаления, то...
        btn.closest(".task").remove(); // удаляем задачу
    };
    /*--------редактирование задач---------*/
    if (btn.classList.contains("btn-edit")) {
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true");
    };
});
