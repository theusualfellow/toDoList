export class getTaskInformation{
    static getTitle(){
        const title = document.querySelector("#title").value
        return title
    }
    static getDescription(){
        const description = document.querySelector("#description").value
        return description
    }
    static getPriority(){
        const priority = document.querySelector("input[name=priority]:checked").value
        return priority
    }
  
}