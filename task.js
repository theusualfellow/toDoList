export class Task{
    constructor(title, description, priority){
        this.title = title
        this.description = description
        this.priority = priority
    }
    addTitle(){
        const h1 = document.createElement('h1')
        h1.innerText = this.title
        return h1
    }
    addDescription(){
        const paragraph = document.createElement('p')
        paragraph.innerText = this.description
        return paragraph
    }
    addPriority(){
        const priority = document.createElement('h2')
        priority.innerText= this.priority
        return priority
    }
}