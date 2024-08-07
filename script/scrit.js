const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const completList = document.querySelector('.list-task')

let myListTask = []

function addNewTask() {
    myListTask.push({
        task: input.value,
        finshed: false 
    })

    input.value = ''
    showTask()
}

function showTask() {
    let newLi = ''

    myListTask.forEach((item, index) => {
        newLi = newLi + `
            <li class="task ${item.finshed && "done"}">
                <img src="./img/checked.png" alt="check-na-tarefa" onclick="endTask(${index})">
                <p>${item.task}</p>
                <img src="./img/trash.png" alt="apagar-tarefa" onclick="delTask(${index})"> 
            </li>

            `
    })

    completList.innerHTML = newLi

    localStorage.setItem('lista', JSON.stringify(myListTask))

}

function endTask(index){
    myListTask[index].finshed = !myListTask[index].finshed
    showTask()  
}

function delTask(index){
    myListTask.splice(index, 1)
    showTask()

}

function reloadTask(){
    const taskLocalStorage = localStorage.getItem('lista')
    myListTask = JSON.parse(taskLocalStorage)
    showTask()
}

reloadTask()

button.addEventListener('click', addNewTask)
