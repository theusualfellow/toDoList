const dialog = document.querySelector("dialog")
const showButton = document.querySelector("dialog + button")
const closeButton = document.querySelector("dialog button")


export function dialogBox(){

    function dialogBoxShowClose(){
        showButton.addEventListener("click", ()=>{
            dialog.showModal()
        })
        closeButton.addEventListener("click", ()=>{
            dialog.close()
        })
    }
    
    function closeDialogBox(){
        dialog.close()
    }

    return {closeDialogBox, dialogBoxShowClose}
}
