import { Task } from "./task.js"
import { getTaskInformation } from "./getTaskInfo.js"
//
const button = document.querySelector("#okay")
const task = document.querySelector(".task")
const allTasks = []
const dialog = document.querySelector("dialog")
const showButton = document.querySelector("dialog + button")
const closeButton = document.querySelector("dialog button")

showButton.addEventListener("click", ()=>{
    dialog.showModal()
})
closeButton.addEventListener("click", ()=>{
    dialog.close()
})

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
})




