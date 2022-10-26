// ul = document.getElementById("task-list");

// let count = ul.children.length;

// let li = `
//     <li class="task list-group-item">
//         <div class="form-checkbox">
//             <input type="checkbox" id="${count + 1}" class="form-chech-input">
//             <label for="${count + 1}" class="form-check-label">Part ${count + 1}</label>
//         </div>
//     </li>
// `;
// // insertAdjacentHTML - element elave etmek uchun metod
// ul.insertAdjacentHTML("beforeend", li);


// let gList = ["G 1","G 2", "G 3", "G 4", "G 5"];
// ul = document.getElementById("task-list");
// for(let index in gList){
//     let li = `
//     <li class="task list-group-item">
//         <div class="form-checkbox">
//             <input type="checkbox" id="${gList[0] + 1}" class="form-chech-input">
//             <label for="${index + 1}" class="form-check-label">${gList[index]}</label>
//         </div>
//     </li>
//     `;
//     // ul.insertAdjacentHTML("beforeend", li);

//     ul.insertAdjacentHTML("beforeend", li);
// };

let gList2 = [
    {"id": 1, gName:"gName 1"},
    {"id": 2, gName:"gName 2"},
    {"id": 3, gName:"gName 3"},
    {"id": 4, gName:"gName 4"}
];

ul = document.getElementById("task-list");

for(g of gList2){
    let li = `
    <li class="task list-group-item">
        <div class="form-checkbox">
            <input type="checkbox" id="${g.id}" class="form-chech-input">
            <label for="${g.id}" class="form-check-label">${g.gName}</label>
        </div>
    </li>
    `;

    ul.insertAdjacentHTML("beforeend", li);
};