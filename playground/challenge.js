const tasks = {
    tasks: [
        {
            text: 'aaa',
            completed: true
        },
        {
            text: 'bbb',
            completed: false
        },
        {
            text: 'ccc',
            completed: false
        }
    ],
    getTasksToDo() {
        return this.tasks.filter((item => item.completed === false))
    }
};

console.log(tasks, tasks.getTasksToDo());