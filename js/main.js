const addBtn = document.querySelector(".add")
const taskField = document.querySelector(".taskInput")
const list = document.querySelector(".list")

addBtn.addEventListener("click", addTask)

function addTask(){
    if (taskField.value.length === 0){
    return;
    } else{
        const taskContainer = list.appendChild(document.createElement("div"))
        const task = taskContainer.appendChild(document.createElement("p"))
        taskContainer.className = "taskContainer"
        task.className = "task"
        task.innerHTML = taskField.value.charAt(0).toUpperCase() + taskField.value.slice(1)
        taskField.value = ""
        deleteBtn.addEventListener("click", deletetask)
        doneBtn.addEventListener("click", checktask)
        function checktask(e){
            e.target.previousSibling.style.textDecoration = "line-through"
        }
        function deletetask(e){
            e.target.parentelement.remove()
        }
    }
}