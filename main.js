import { Task } from "./task.js"
import { getTaskInformation } from "./getTaskInfo.js"
//
const button = document.querySelector("#okay")
const task = document.querySelector(".task")
const allTasks = []

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
    console.log(newTask)
})




