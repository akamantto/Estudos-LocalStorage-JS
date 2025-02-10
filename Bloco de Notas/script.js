const textNote = document.querySelector("#note-input");
const btnSave = document.querySelector("#save-note");
const noteTitle = document.querySelector("#title-active-note");
btnSave.addEventListener("click",()=>{
    let activeText = textNote.value;
    let title = noteTitle.value;
    localStorage.setItem(title, activeText);
});
    