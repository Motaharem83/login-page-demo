let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let list = document.querySelector(".list");
let btn2 = document.querySelector(".btn2");
btn.addEventListener("click", function(){  
    let inp_value = inp.value;  
    if(inp_value.trim() !== ''){  
        addTask(inp_value);  
        inp.value = '';  
    } else {  
        alert("The input is empty!");  
    }  
});  
    
window.addEventListener('load', loadTasks);  
    
function addTask(task) {  
    let li = document.createElement("li");  
    li.className = "li2 li d-flex justify-content-between m-3 p-4";  
    li.innerHTML = `  
        <div>  
            <i class="btn2 bi bi-circle" onclick="done_task(this)"></i>  
            <span id="text">${task}</span>  
        </div>  
        <div>  
            <i class="bi bi-pencil-square" onclick="edit_task(this)"></i>
            <i class="bi bi-person-walking"onclick="doing_task(this)"></i>
            <i class="btn3 bi bi-suit-heart"onclick="impotent_task(this)"></i>
            <i class="bi bi-trash3" onclick="remove_task(this)"></i>  
        </div>`;  
    list.append(li);  
    saveTasks();  
}  
    
function saveTasks() {  
    const tasks = [];  
    document.querySelectorAll(".li").forEach(li => {  
        const text = li.querySelector("#text").textContent;  
        const isChecked = li.querySelector(".btn2").classList.contains("bi-check2-circle");  
        tasks.push({ text, isChecked });  
    });  
    localStorage.setItem("tasks", JSON.stringify(tasks));  
}  
    
function loadTasks() {  
    const tasks = JSON.parse(localStorage.getItem("tasks"));  
    if (tasks) {  
        tasks.forEach(task => {  
            let li = document.createElement("li");  
            li.className = "li2 li d-flex justify-content-between m-3 p-4";  
            li.innerHTML = `  
                <div>  
                    <i class="btn2 bi ${task.isChecked ? 'bi-check2-circle' : 'bi-circle'}" onclick="done_task(this)"></i>  
                    <span id="text" class="${task.isChecked ? 'text-decoration-line-through' : ''}">${task.text}</span>  
                </div>  
                <div>  
                    <i class="bi bi-pencil-square" onclick="edit_task(this)"></i> 
                    <i class="bi bi-person-walking"onclick="doing_task(this)"></i>
                    <i class="btn3 bi bi-suit-heart"onclick="impotent_task(this)"></i>
                    <i class="bi bi-trash3" onclick="remove_task(this)"></i>  
                </div>`;  
            list.append(li);  
        });  
    }  
}  
    
function remove_task(close_btn) {  
    if(confirm("Are you sure you want to remove this task?")){  
        let my_alert = close_btn.closest(".li");  
        my_alert.remove();  
        updateLocalStorage();  
    } 
}  
    
function updateLocalStorage() {  
    const tasks = [];  
    document.querySelectorAll(".li").forEach(li => {  
        const text = li.querySelector("#text").textContent;  
        const isChecked = li.querySelector(".btn2").classList.contains("bi-check2-circle");  
        tasks.push({ text, isChecked });  
    });  
    localStorage.setItem("tasks", JSON.stringify(tasks));  
}  
    

function done_task(btn) {  
    let my_alert2 = btn.closest(".li");  
    let my_span = my_alert2.querySelector("span");  
    let isChecked = btn.classList.contains("bi-check2-circle");  
    let btn3 = my_alert2.querySelector(".btn3")
    if (isChecked) {  
        btn.classList.remove("bi", "bi-check2-circle");  
        btn.classList.add("bi", "bi-circle");  
        my_alert2.classList.remove("alert", "alert-success" , "alert", "alert-warning" ,"alert", "alert-danger");  
        my_alert2.classList.add("li2")
        my_span.classList.remove("text-decoration-line-through");
        btn3.classList.add("bi","bi-suit-heart")
        btn3.classList.remove("bi","bi-suit-heart-fill")
    } else {  
        btn.classList.remove("bi", "bi-circle");  
        btn.classList.add("bi", "bi-check2-circle");  
        my_alert2.classList.remove("alert", "alert-warning" , "alert", "alert-danger", "li2")
        my_alert2.classList.add("alert", "alert-success");  
        my_span.classList.add("text-decoration-line-through");
        btn3.classList.add("bi","bi-suit-heart")
        btn3.classList.remove("bi","bi-suit-heart-fill")
    }  
    
    saveTasks();  
}  

function doing_task(btn2) {  
    let my_alert2 = btn2.closest(".li");
    let my_span = my_alert2.querySelector("span");
    let btn = my_alert2.querySelector("i")
    let btn3 = my_alert2.querySelector(".btn3")
    btn.classList.remove("bi", "bi-check2-circle"); 
    btn.classList.add("bi", "bi-circle");  
    my_alert2.classList.remove("alert", "alert-success" , "alert", "alert-danger" , "li2")
    my_alert2.classList.add("alert", "alert-warning")
    my_span.classList.remove("text-decoration-line-through"); 
    btn3.classList.add("bi","bi-suit-heart")
    btn3.classList.remove("bi","bi-suit-heart-fill")
    saveTasks();  
}

function impotent_task(btn3) {  
    let my_alert2 = btn3.closest(".li");
    let my_span = my_alert2.querySelector("span");
    let btn = my_alert2.querySelector("i")
    btn.classList.remove("bi", "bi-check2-circle");
    btn.classList.add("bi", "bi-circle");  
    my_alert2.classList.remove("alert", "alert-success","alert" ,"alert-warning" , "li2")
    my_alert2.classList.add("alert", "alert-danger")
    my_span.classList.remove("text-decoration-line-through"); 
    btn3.classList.remove("bi","bi-suit-heart")
    btn3.classList.add("bi","bi-suit-heart-fill")
    saveTasks();  

}

function edit_task(edit_btn) {  
    let my_alert2 = edit_btn.closest(".li");  
    let my_span = my_alert2.querySelector("span");  
    let current_text = my_span.textContent;   
    let new_text = prompt("Edit your task:", current_text);  
    if (new_text !== null && new_text.trim() !== '') {  
        my_span.textContent = new_text;  
        saveTasks();  
    } else if (new_text === '') {  
        alert("The input cannot be empty!");  
    }  
}
