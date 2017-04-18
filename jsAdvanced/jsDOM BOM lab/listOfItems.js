function addItem(){
    "use strict";
    let text=document.getElementById("newItemText").value;
    let li = document.createElement("li");
    li.innerHTML = text || "prazno";
    document.getElementById("items").appendChild(li);
}
