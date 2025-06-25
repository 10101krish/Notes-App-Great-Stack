import { Note } from './note.js';

const notesContainer = document.getElementById('notes-container');
const createNoteButton = document.getElementById('create-note-button');
createNoteButton.onclick = addNoteToNotesContainer;

let notesInContainer = [];

function deleteSelectedNote(selectedNote) {
    if (selectedNote instanceof Note)
        selectedNote.delete();
}

function removeNoteFromGlobalArray(noteIndex) {
    notesInContainer.splice(noteIndex, 1);
    for (let index = 0; index < notesInContainer.length; index++) {
        const noteAtIndex = notesInContainer[index];
        if (noteAtIndex instanceof Note)
            noteAtIndex.updateNoteIndex(index);
    }
}

export function changeNoteContainerValueInDOM(noteIndex, newNoteContainerValue) {
    const currentNoteContainerValue = notesContainer.children[noteIndex];
    notesContainer.replaceChild(newNoteContainerValue, currentNoteContainerValue);
}

export function deleteNote(noteIndex) {
    const selectedNote = notesInContainer[noteIndex];
    removeNoteFromGlobalArray(noteIndex);
    deleteSelectedNote(selectedNote);
}

function addNoteToNotesContainer() {
    const newNoteIndex = notesInContainer.length;
    const newNote = new Note(newNoteIndex);
    notesInContainer.push(newNote);
    const newNoteContainer = newNote.getNoteContainer();
    notesContainer.append(newNoteContainer);
}