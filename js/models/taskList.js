export class TaskList {
  arr = [];
  pushTask(task) {
    task.id = Math.floor(Math.random() * 1e5 + 1).toString();
    this.arr = [...this.arr, task];
  }
  popTask(id) {
    this.arr = this.arr.filter((ele) => ele.id !== id);
  }
  sortTask(sortOrder) {
    let sortResult = [...this.arr];
    if (sortOrder === 'ascending') {
      sortResult = sortResult.sort((a, b) => a.name.localeCompare(b.name));
      // xếp theo bảng chữ cái TIẾNG VIỆT
    } else if (sortOrder === 'descending') {
      sortResult = sortResult.sort((a, b) => b.name.localeCompare(a.name));
    }
    return sortResult;
  }
  getTaskById(id) {
    return this.arr.find((ele) => ele.id === id);
  }
}
