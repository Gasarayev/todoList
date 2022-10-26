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


// // remove -  element silme
// document.querySelector("#task-list").remove();

// //parentElement.remove() - bir yuxari elementi silir 
// document.querySelector("#task-list").parentElement.remove();

// // .children[0].remove() - alt elementleri silir
// let sonuc = document.querySelector("#task-list").children[0].remove();

// // removeAtribute() - elementin atributunu silmek
// document.querySelector("#task-list").removeAttribute('class');

// // setAttribute("*class", "bbb") - atributun ichindekini silir yenisini elave edir
// // classList.add("bbb")- class atributunun ichindekileri saxlayir ve yenisini elave edir

// let sonuc = document.querySelector("#task-list").children[0].setAttribute("class","bbb")

document.querySelector("#task-list").children[1].classList.add("bg-danger")

// .contain("**bg-warning") - bele bir classin olub olmadigini yoxlair(boolean)

let sss = document.querySelector("#task-list").children[1].classList.contains("bg-warning");
console.log(sss);