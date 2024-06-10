import { Task } from "./task.js"
import { getTaskInformation } from "./getTaskInfo.js"
import { dialogBox } from "./dialogBox.js"
//
const button = document.querySelector("#okay")
const task = document.querySelector(".task")
const allTasks = []

dialogBox().dialogBoxShowClose()

button.addEventListener("click",()=>{
    const newTask =  new Task(
        getTaskInformation.getTitle(), 
        getTaskInformation.getDescription(), 
        getTaskInformation.getPriority()
    )
    task.appendChild(newTask.addTitle())
    task.appendChild(newTask.addDescription())
    task.appendChild(newTask.addPriority())
    allTasks.push(newTask)

    //once task is added, close the dialog box
    dialogBox().closeDialogBox()
})




