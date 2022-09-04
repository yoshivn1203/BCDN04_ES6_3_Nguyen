class TaskList {
  arr = [];

  addTask(task) {
    // tạo chuỗi ký tự ngẫu nhiên dựa vào số random và thời gian để làm id
    task.id = String(Date.now().toString(32) + Math.random().toString(16)).replace(
      /\./g,
      ''
    );
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

export default TaskList;
