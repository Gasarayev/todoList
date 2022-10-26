let multiple;

// multiple = document.getElementsByClassName("task");
// ul = document.getElementById("task-list");
// multiple = ul.getElementsByTagName("li");
multiple = document.querySelectorAll("#task-list li")

console.log(multiple)

for (i = 0; i < multiple.length; i++){
    console.log(multiple[i]);
};

for (task of multiple){
    task.style.color="red";
    task.style.fontSize = "20px";
};

for(task in multiple){
    console.log(task)
};
