

const textInput=document.getElementById('textInput')
const textList=document.getElementById('textList')

let notes=localStorage.getItem('notes')?JSON.parse(localStorage.getItem('notes')):[];

function saveNotes(){
    localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes(){
    textList.innerHTML=''
    notes.forEach((note, index) => {
        const listItem=document.createElement('li')
        listItem.innerHTML=`<span>${note}<span>
        <button onclick='updateNote(${index})'>Update<button>
        <button onclick='deleteNote(${index})'>Delete<button>`;
        textList.appendChild(listItem)
    });
}

function addNote(){
    const noteText=textInput.value.trim()
    if(noteText!==''){
        notes.push(noteText)
        textInput.value=''
        renderNotes()
        saveNotes;
    }
}

function updateNote(index) {
    const updatedText = prompt("Enter the updated note");
    if (updatedText !== null && updatedText.trim() !== "") {
      notes[index] = updatedText.trim();
      renderNotes();
      saveNotes();
    }
  }


  function deleteNote(index) {
    notes.splice(index, 1);
    renderNotes();
    saveNotes();
  }

  renderNotes();