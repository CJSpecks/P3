let todolist = []; 

function addTask(){
    const input = document.getElementById('taskAdd');
    const taskObject = input.value.trim();

if (taskObject === ""){
    alert("You are required to enter a task!");
    return;
} else if (taskObject !== ""){
        todolist.push(taskObject);
        input.value = "";
        displayList();
    }
}

function deleteTask(index){
todolist.splice(index, 1);
displayList();
}

function displayList(){
const listElement = document.getElementById('listofTasks');
listElement.innerHTML = "";

todolist.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} 
            <button onclick="deleteTask(${index} )"> Delete</button>
        `;
        listElement.appendChild(li);
    });
}
