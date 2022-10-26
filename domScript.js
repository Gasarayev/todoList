let dom = document.getElementById("title");
dom.style.fontSize = "35";
dom.style.color= "red";
dom.style.fontFamily = "sans"
dom.innerText = "Too Doo App"


let dom2 = document.querySelector("div");
dom2.style.color = "blue";
document.querySelector("div").style.fontSize = "45";

let list;
list = document.querySelectorAll("li")
list = document.querySelector("li:first-child")
list = document.querySelector("li:nth-child(2)")
list = document.querySelector("li:last-child")

console.log(list)
