// It contains the logic of CRUD

export const todoOperations = {
    tasks:[],
    addTask(task){
        this.tasks.push(task);
    },
    getTotal(){
        return this.tasks.length;
    },
    removeTask(){},
    searchTask(){},
    updateTask(){},
    sortTask(){}
}