const button = document.querySelector("#okay")
const task = document.querySelector(".task")

button.addEventListener("click",()=>{
    const firstTask =  new Task(getTitle(), getDescription(), getPriority())
    firstTask.addTitle()
    firstTask.addDescription()
    firstTask.addPriority()
})

function getTitle(){
    const title = document.querySelector("#title").value
    return title
}
function getDescription(){
    const description = document.querySelector("#description").value
    return description
}
function getPriority(){
    const priority = document.querySelector("#priority").value
    return priority
}

class Task{
    constructor(title, description, priority){
        this.title = title
        this.description = description
        this.priority = priority
    }
    addTitle(){
        const h1 = document.createElement('h1')
        h1.innerText = getTitle()
        task.appendChild(h1)
    }
    addDescription(){
        const paragraph = document.createElement('p')
        paragraph.innerText = getDescription()
        task.appendChild(paragraph)
    }
    addPriority(){
        const priority = document.createElement('h2')
        priority.innerText= getPriority()
        task.appendChild(priority)
    }
}