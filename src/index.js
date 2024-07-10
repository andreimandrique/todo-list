import "./style.css";
import Task from "./task.js";
import displayTask from "./displayTask.js";

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPriority = document.getElementById("inputPriority");
const inputDate = document.getElementById("inputDate");
const btnAdd = document.getElementById("btnAdd");
const btnCancel = document.getElementById("btnCancel");

const addContainer = document.querySelector(".add-container");
const showAdd = document.getElementById("showAdd");

addContainer.style.display = "none";
showAdd.addEventListener("click", () => {
  btnCancel.style.display = "block";
  btnAdd.innerText = "Add Task";
  addContainer.style.display = "block";
  showAdd.style.display = "none";

  inputTitle.value = "";
  inputDescription.value = "";
  inputDate.value = "";
});

btnCancel.addEventListener("click", () => {
  addContainer.style.display = "none";
  showAdd.style.display = "block";
});

btnAdd.addEventListener("click", () => {
  if (
    inputTitle.value == "" ||
    inputDescription.value == "" ||
    inputDate.value == ""
  ) {
    alert("Fill out all input");
  } else {
    const myTask = new Task(
      inputTitle.value,
      inputDescription.value,
      inputPriority.value,
      inputDate.value
    );
    myTask.setTask();
    displayTask();
    showAdd.style.display = "block";
    addContainer.style.display = "none";
  }
});

const myTask1 = new Task(
  "Valorant",
  "Play valorant with my friends",
  "Low",
  "2024-06-12"
);
myTask1.setTask();

displayTask();
