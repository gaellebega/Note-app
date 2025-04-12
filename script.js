const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
//this query selector is gonna select all the notes
let notes = document.querySelectorAll(".input-box");
//
function showNotes(){
  //if the notes is there then we have to display them in our webpage
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
//it will show the notes and diplay them inside the container inside the innerhtml


//we are going to create a new function that is gonna help us to store our whole inforamtion in the browser

function updateStorage(){
  //here we will store whatever written in the notes container
  //which will update the inforamtion in our browser
  localStorage.setItem("notes",notesContainer.innerHTML);
}



//this means when we click on the btn it is gonna execute the following comamnds
//first it will create the one variable that is called inputbox with the p element
createBtn.addEventListener("click",()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  //after adding the emoji this src is gonna add another emoji so that we cna be able to delete somthing
  img.src = "./images/delete.svg"
  
  //this means that the input box is gonna be dispalayed in the notes container
  notesContainer.appendChild(inputBox).appendChild(img);
  updateStorage();
  
})

notesContainer.addEventListener("click", function(e){
  //when we click on the note container and if the target element is the img then it is gonna delete the parent element
  if(e.target.tagName === "IMG"){
    e.target.parentElement.remove();
    //after delete it is gonna update it
    updateStorage();
  }
  else if(e.target.tagName === "p"){
    notes = document.querySelectorAll(".input-box");
    //nt means sort for the notes
    notes.forEach(nt =>{
      nt.onkeyup = function(){
        //it will update the storage when we type something in the p tag
        updateStorage();
      };
    });
  }
})

document.addEventListener("keydown", event =>{
  //when we click on the enter from our keyboard then it is gonna add one line break and then it prevent the default feauture of our enter key
  if(event.key ==="Enter"){
    document.execCommand("insertlineBreak");
    event.preventDefault();
  }
})