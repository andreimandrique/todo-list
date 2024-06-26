import { format } from "date-fns";

function displayTask() {
  const taskContainer = document.getElementById("taskContainer");
  taskContainer.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const task = JSON.parse(value);

    const todoBoxDiv = document.createElement("div");
    todoBoxDiv.classList.add("todo-box-div");

    const optionDiv = document.createElement("div");
    const doneDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const editDiv = document.createElement("div");

    optionDiv.classList.add("option-div");
    doneDiv.classList.add("done-div");
    titleDiv.classList.add("title-style");
    editDiv.classList.add("edit-div");

    doneDiv.addEventListener("click", () => {
      localStorage.removeItem(titleDiv.textContent);
      displayTask();
    });

    editDiv.addEventListener("click", () => {
      show = false;
      const inputTitle = document.getElementById("inputTitle");
      const inputDescription = document.getElementById("inputDescription");
      const inputPriority = document.getElementById("inputPriority");
      const inputDate = document.getElementById("inputDate");
      const btnAdd = document.getElementById("btnAdd");

      btnAdd.innerText = "Edit Task";

      editDiv.style.visibility = "hidden";

      inputTitle.value = task["title"];
      inputDescription.value = task["description"];
      inputPriority.value = task["priority"];
      inputDate.value = task["date"];

      let isDuplicate = false;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const task = JSON.parse(value);
        if (inputTitle.value === task["title"]) {
          isDuplicate = true;
          break;
        }
      }
      if (isDuplicate) {
        localStorage.removeItem(key);
      } else {
        displayTask();
      }

      const addContainer = document.querySelector(".add-container");
      const showAdd = document.getElementById("showAdd");
      showAdd.style.display = "none";
      addContainer.style.display = "block";
    });

    let show = true;
    optionDiv.addEventListener("click", () => {
      if (show) {
        show = false;
        detailDiv.style.display = "block";
      } else {
        show = true;
        detailDiv.style.display = "none";
      }
    });

    titleDiv.innerText = task["title"];

    optionDiv.appendChild(doneDiv);
    optionDiv.appendChild(titleDiv);
    optionDiv.appendChild(editDiv);

    const detailDiv = document.createElement("div");
    const priorityDiv = document.createElement("p");
    const dateDiv = document.createElement("p");
    const descriptionDiv = document.createElement("p");

    detailDiv.classList.add("detail-div");
    detailDiv.style.display = "none";

    priorityDiv.innerText = task["priority"];

    const taskDate = task["date"];
    const dateObject = new Date(taskDate);
    const myDate = format(dateObject, "eeee PP");
    dateDiv.innerText = myDate;

    descriptionDiv.innerText = task["description"];

    detailDiv.appendChild(priorityDiv);
    detailDiv.appendChild(dateDiv);
    detailDiv.appendChild(descriptionDiv);

    taskContainer.appendChild(todoBoxDiv);
    todoBoxDiv.appendChild(optionDiv);
    todoBoxDiv.appendChild(detailDiv);
  }
}

export default displayTask;
