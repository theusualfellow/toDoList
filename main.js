const button = document.querySelector("#okay")
const body = document.querySelector("body")

button.addEventListener("click",()=>{
    const firstTask =  new Task(getTitle(), "this is fun", "high")
    firstTask.addTitle()

})

function getTitle(){
    const title = document.querySelector("#title").value
    return title
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
        body.appendChild(h1)
    }
    addDescription(){

    }
    addPriority(){

    }
}