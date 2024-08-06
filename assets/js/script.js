const btnCreateNote = document.getElementById('btn_create_note');
const form = document.getElementById('form');
const btnAddNote = document.getElementById('btn_add_note');
const titleListDiv = document.getElementById('title_list_div');

//parent ul for when creating new LI fot the titles
const titleListUL = document.getElementById('title_list_UL');
const titleInput = document.getElementById('title_input');

const noteBodyInput = document.getElementById('note_body_input');

//inside display-note class
const displayNote = document.getElementById('display_note');
const btnCloseNote = document.getElementById('btn_close_note');
const noteTitle = document.getElementById('note_title');
const noteBody = document.getElementById('note_body');
const btnDeleteNote = document.getElementById('btn_delete_note');
//retrieve the notes from local storage
const notes = JSON.parse(localStorage.getItem("notes")) || [];


//note factory
class Note {
    constructor(title, body){
        this.title = title;
        this.body =  body;
        this.id = uniqueID();
    } 
}

function uniqueID(){
    let d = new Date();
    return d.getTime();
}



// when the create note button is clicked
btnCreateNote.addEventListener('click', function(){
    hideIn()
    //show the form form
    form.classList.remove('hidden');
});

// the add note button is clicked
btnAddNote.addEventListener('click', function(e){
    e.preventDefault();
    //adds the note to the array of objects
    populateArrays(); 
    //create a new LI for each title in the array of objects 
    createListItem(); 
    //hide the form
    form.classList.add('hidden');
    //goes back to index or page with list of titles
    close()
    openNote()   
});

function populateArrays(){
    clearElement(titleListUL);
    //a new note object is created from the title and the note body 
    //and the the object is pushed into the notes array
    if(titleInput.value === '') {
        notes.push(new Note('Untitled', noteBodyInput.value))
        // titles.push('Untitled');
    } else {
        notes.push(new Note(titleInput.value, noteBodyInput.value));
        // titles.push(titleInput.value);
    }
    //save the notes to local torage
    save()
    titleInput.value = '';
    noteBodyInput.value ='';
}

//now create the title li for the list of titles ul
function createListItem(){    
    notes.forEach(note => {
        const titleLI = document.createElement('li'); 
        titleListUL.appendChild(titleLI);
        titleLI.setAttribute('id' , note.id);
        titleLI.textContent = note.title;
    });
}
createListItem();

//when a title is click in the list
//get the id of the clicked title and match it to the note object
//by calling the newnote function
//dispays the selected note after matching
function openNote(){
    //array of all titles 
    const titleListItems = document.querySelectorAll('li')   
    titleListItems.forEach(item => {   
        item.addEventListener('click', function() {
            clearElement(noteTitle)
            const selectedId = item.getAttribute('id')
            if (selectedId == null){
                displayNote.classList.remove('hidden')
            } else {
                hideIn();
                displayNote.classList.remove('hidden')
                newNote(selectedId)
            }
        })
    });  
}
openNote();
//takes in the id of the clicked title
//matches it to a note object and creates
//text content for the display note div in index.html
function newNote(selectedLI){
    const selectedNote = notes.find(note => note.id === parseInt(selectedLI))
    let noteTitle = '';
    if(selectedNote){
        noteTitle = selectedNote.title;
        appendNoteTitle(noteTitle);
        noteBody.textContent = selectedNote.body;
    }
}

btnCloseNote.addEventListener('click', function(){
    close();
    //show the selected note
    displayNote.classList.add('hidden')
})
function hideIn(){
    //hide the create note button
    btnCreateNote.classList.add('hidden')
    //hide the list of titles
    titleListUL.classList.add('hidden')
}
// a close function added to buttons that 
//go back to index or page with list of titles
function close(){
    btnCreateNote.classList.remove('hidden')
    titleListUL.classList.remove('hidden')
}
function appendNoteTitle(title){
    const titleH3 = document.createElement('h3')
    noteTitle.appendChild(titleH3)
    titleH3.classList.add('note-title-h3')
    titleH3.textContent = title
}

//save to local storage
function save(){
    localStorage.setItem('notes', JSON.stringify(notes))
}
btnDeleteNote.addEventListener('click', function(){

})
//clear elements that already exist 
function clearElement(element) {
    //while the element has a firstchild
    while (element.firstChild) {
        //remove the firstchild
        element.removeChild(element.firstChild)
    }
}
