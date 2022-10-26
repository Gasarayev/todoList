let gList2 = [];

if(localStorage.getItem("gList2") !== null){
    gList2 =JSON.parse(localStorage.getItem("gList2"));
};


const clearButton = document.querySelector("#btnClear");
const addButton = document.querySelector("#btnAddNewTask"); 
let inputTask = document.querySelector("#textTaskName");
let filters = document.querySelectorAll(".filters span");

let editId;
let isEditTask = false;

displayTask("all");

function displayTask(filters){
    
    let ul = document.getElementById("task-list");
    ul.innerHTML = "";

    if(gList2.length == 0){
        ul.innerHTML = "<p class = 'p-3 m-0'>Empty</p>"
    } else {

        for(let g of gList2){
            let complated = g.position == "complated" ? "checked": "";

            if(filters == g.position || filters == "all"){

                

                let li = `
                <li class="task list-group-item">
                    <div class="form-checkbox">
                        <input type="checkbox" onclick ="updateStatus(this)" id='${g.id}' class="form-chech-input" ${complated}>
                        <label for="${g.id}" class="form-check-label ${complated}">${g.gName}</label>
                    </div>
                    <div class="dropdown">
                        <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul class="dropdown-menu"       aria-labelledby="dropdownMenuButton1">
                            <li><a onclick = "deleteTask(${g.id})" class="dropdown-item" href="#"><i class="fa-solid fa-trash"></i> Delete</a></li>
                            <li><a onclick = "editTask(${g.id}, '${g.gName}')" class="dropdown-item" href="#"><i class="fa-solid fa-pen-to-square"></i> Edit</a></li>
                        </ul>
                    </div>
                 </li>
                `;
                
                ul.insertAdjacentHTML("beforeend", li);
            }
            
        }
    }
}
// Enter Button
addButton.addEventListener("click", newTask );
addButton.addEventListener("keypress", function(){
    if(event.key == "Enter"){
        document.getElementById("#btnAddNewTask").click();
    }
});


for(let span of filters){
    span.addEventListener("click", function() {
        document.querySelector("span.active").classList.remove("active");
        span.classList.add("active");
        displayTask(span.id);
    });
}

function newTask (event){

    if(inputTask.value == ""){
        alert("error");
    }else{
        if(!isEditTask){
            gList2.push({"id": gList2.length + 1, "gName":inputTask.value, "position": "pending"});
        inputTask = "";
        }else{
            // edit
            for(let g of gList2){
                if(g.id == editId){
                    g.gName = inputTask.value;
                }
                isEditTask = false
            }
        }
        
        inputTask.value = ""; 
        displayTask(document.querySelector("span.active").id);
        localStorage.setItem("gList2", JSON.stringify(gList2));
    }

    event.preventDefault()

};

// Clear Button

clearButton.addEventListener("click", clearTask);

function clearTask(event){
    gList2.splice(0, gList2.length);
    localStorage.setItem("gList2", JSON.stringify(gList2));
    displayTask()

};

// Deleted function
function deleteTask(id){
    
    let deletedId;

    for(let index in gList2){
        if(gList2[index].id == id){
            deletedId = index; 
        }
    }

    gList2.splice(deletedId, 1);
    localStorage.setItem("gList2", JSON.stringify(gList2));
    displayTask(document.querySelector("span.active").id);
    
};

function editTask(taskId, taskName){
    editId = taskId;
    isEditTask = true;
    inputTask.value = taskName;
    inputTask.focus();
    inputTask.classList.add("active");
};

function updateStatus(selectedTask){
    let label = selectedTask.nextElementSibling;
    let position;
    
    if(selectedTask.checked){
        label.classList.add("checked");
        position = "complated"    
    }else{
        label.remove("checked")
        position = "pending"
    };

    for(let g of gList2){
        if(g.id == selectedTask.id){
            g.position = position;
        }
    };

    displayTask(document.querySelector("span.active").id)

    localStorage.setItem("gList2", JSON.stringify(gList2));
};
