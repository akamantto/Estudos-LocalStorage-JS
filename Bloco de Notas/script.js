const textNote = document.querySelector("#note-input");
const btnSave = document.querySelector("#save-note");
const noteTitle = document.querySelector("#title-active-note");
const btnClearAll = document.querySelector("#clear-notes");
const createdNotesContainer = document.querySelector("#container-created-notes");


function clearActiveNote(){
    textNote.value = "";
    noteTitle.value = "";
}


function createdNoteHtml(title, content){
    const newNote = document.createElement("div");
    newNote.classList.add("created-note");
    newNote.innerHTML=`
                <div id="container-created-notes">
                <h1>${title}</h1>
                <div class="created-note">
                    <p>${content}</p>
                    <div class="content-created-note"></div>
                    <button class="remove-created-note">X</button>
                </div>
    `

    const createdNotes = document.querySelectorAll(".created-note");
    btnClearAll.addEventListener("click", () => {
        if (confirm("Tem certeza que deseja apagar todas as notas?")) {
            document.querySelectorAll(".created-note").forEach(note => note.remove());
            localStorage.clear();
        } else {
            console.log("Usuário cancelou");
        }
    });
    
        
    createdNotesContainer.appendChild(newNote);
    newNote.querySelector(".remove-created-note").addEventListener("click", function() {
        newNote.remove();
    });
}



btnSave.addEventListener("click",()=>{
    let activeText = textNote.value;
    let title = noteTitle.value;
    if(!activeText){
        alert("Nada foi escrito no corpo da nota.");
    }else if(!title){
        alert("Defina um título pra sua nota!")
    }else{
        localStorage.setItem(title, activeText);
        createdNoteHtml(title,activeText);
        clearActiveNote();
    }

}); 