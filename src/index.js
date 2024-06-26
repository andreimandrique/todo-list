import "./style.css";
import Task from "./task.js";
import displayTask from "./displayTask.js";

const h1Title = document.querySelector("h1");

const inputTitle = document.getElementById("inputTitle");
const inputDescription = document.getElementById("inputDescription");
const inputPriority = document.getElementById("inputPriority");
const inputDate = document.getElementById("inputDate");
const btnAdd = document.getElementById("btnAdd");

const addContainer = document.querySelector(".add-container");
const showAdd = document.getElementById("showAdd");

addContainer.style.display = "none";
showAdd.addEventListener("click", () => {
  btnAdd.innerText = "Add Task";
  addContainer.style.display = "block";
  showAdd.style.display = "none";

  inputTitle.value = "";
  inputDescription.value = "";
  inputDate.value = "";
});

btnAdd.addEventListener("click", () => {
  if (
    inputTitle.value == "" ||
    inputDescription.value == "" ||
    inputDate.value == ""
  ) {
    console.log("empty");
    h1Title.textContent = "Fill out all Info";
    h1Title.style.color = "red";
  } else {
    h1Title.textContent = "Todo List";
    h1Title.style.color = "black";
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

const myTask = new Task(
  "League of Legends",
  "Play yasuo and carry my teammates",
  "Mid",
  "2024-06-30"
);
myTask.setTask();

displayTask();
