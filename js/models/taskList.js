export class TaskList {
  arr = [];

  addTask(task) {
    task.id = Math.floor(Math.random() * 1e5 + 1).toString();
    this.arr.push(task);
  }

  removeTask(id) {
    this.arr = this.arr.filter((task) => task.id !== id);
  }

  sortTask(sortOrder) {
    let sortResult = [...this.arr];
    if (sortOrder === 'ascending') {
      // xếp theo bảng chữ cái TIẾNG VIỆT
      sortResult = sortResult.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'descending') {
      sortResult = sortResult.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortResult;
  }
}
