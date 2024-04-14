const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
localStorage.clear();
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);

}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.contentEditable = true;
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
         e.target.parentElement.remove();
         updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();

            }
        })
    }
})

//I dont understand this part 
// This function is to change "Enter" default functionality to line break
// But after this the inbox is not editable
// enter is already acting like line-break
// document.addEventListener("keydown", event =>{
//     if(event.key === "Enter")
//         document.execCommand("insertLineBreak");
//     event.preventDefault();
// })

// document.addEventListener("keydown", event => {
//     if (event.key === "Enter") {
//         event.preventDefault();
//         document.execCommand("insertHTML", false, "<br>");
//     }
// });







// createBtn.addEventListener("click", () => {
//     console.log("Button clicked");

//     let inputBox = document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className = "input-box";
//     inputBox.contentEditable = true;
//     img.src = "images/delete.png";

//     console.log("Before appending inputBox:", inputBox);

//     notesContainer.appendChild(inputBox).appendChild(img);

//     console.log("After appending inputBox:", inputBox);

//     // Update the notes NodeList after adding a new input-box
//     notes = document.querySelectorAll(".input-box");
// });
