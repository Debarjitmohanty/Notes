const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notescontainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}


createbtn.addEventListener("click", ()=>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "/images/delete.png";
    notescontainer.appendChild(inputbox).appendChild(img);
})


notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        e.target.addEventListener("keyup", function () {
            updateStorage();
        });
    }
});



document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})