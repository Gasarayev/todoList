let sonuc;

ul = document.getElementById("task-list");


sonuc = ul.children;
sonuc = ul.children[0].children[0].children[0].checked = true ;
//nextEelementSibling bir sonraki tag'a kechir
sonuc = ul.children[0].nextElementSibling.children[0].children[0].checked=true;
sonuc = ul.children[0].nextElementSibling.nextElementSibling.children[0].children[0].checked=true
console.log(sonuc)