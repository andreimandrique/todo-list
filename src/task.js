class Task {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }

  setTask() {
    localStorage.setItem(this.title, JSON.stringify(this));
  }

  showTask() {
    return JSON.parse(localStorage.getItem(this.title));
  }
}

export default Task;
