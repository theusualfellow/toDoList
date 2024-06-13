import { Task } from "./task.js"
import { getTaskInformation } from "./getTaskInfo.js"
import { dialogBox } from "./dialogBox.js"
//
const button = document.querySelector("#okay")
const allTasks = document.querySelector(".allTasks")
const allTasksArray = []

dialogBox().dialogBoxShowClose()

button.addEventListener("click",()=>{
    const task = document.createElement("div")
    task.classList = "task"
    
    const newTask =  new Task(
        getTaskInformation.getTitle(), 
        getTaskInformation.getDescription(), 
        getTaskInformation.getPriority()
    )
    
    task.appendChild(newTask.addTitle())
    task.appendChild(newTask.addDescription())
    task.appendChild(newTask.addPriority())
    task.appendChild(newTask.deleteTask())
    allTasks.appendChild(task)
    allTasksArray.push(newTask)

    //once task is added, close the dialog box
    dialogBox().closeDialogBox()
})




