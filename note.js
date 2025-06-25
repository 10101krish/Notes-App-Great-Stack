import { deleteNote } from "./index.js";

function createNoteText(noteTextValue = '') {
    const noteText = document.createElement('textarea');
    noteText.placeholder = 'Note Here';
    noteText.classList.add('note-text');
    noteText.id = 'note-text';
    noteText.value = noteTextValue;
    noteText.onchange = () => {
        console.log(noteText.value);
    }

    return noteText;
}

function createNoteIndexText(noteIndex) {
    const noteIndexText = document.createElement('div');
    noteIndexText.classList.add('note-index-text');

    if (noteIndex == null)
        noteIndexText.textContent = "Index Here";
    else
        noteIndexText.textContent = "Note " + `${noteIndex + 1}`;

    return noteIndexText;
}

function createNoteDeleteImg() {
    const noteDeleteImg = document.createElement('img');
    noteDeleteImg.src = './images/delete.png';
    noteDeleteImg.alt = 'Delete Note';

    return noteDeleteImg;
}

function createNoteDeleteButton() {
    const noteDeleteButton = document.createElement('button');
    noteDeleteButton.classList.add('note-delete-button');

    const noteDeleteImg = createNoteDeleteImg();
    noteDeleteButton.append(noteDeleteImg);

    return noteDeleteButton;
}

function createNoteFooter(noteIndexText, noteDeleteButton) {
    const noteFooter = document.createElement('div');
    noteFooter.classList.add('note-footer');
    noteFooter.append(noteIndexText);
    noteFooter.append(noteDeleteButton);

    return noteFooter;
}

function generateNoteContainer(noteText, noteFooter) {
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container');
    noteContainer.append(noteText);
    noteContainer.append(noteFooter);

    return noteContainer;
}

export class Note {
    constructor(noteIndex) {
        this.noteIndex = noteIndex
        this.noteTextValue = '';

        this.noteIndexText = createNoteIndexText(this.noteIndex);
        this.noteDeleteButton = createNoteDeleteButton();
        this.noteDeleteButton.onclick = () => {
            deleteNote(this.noteIndex);
        }

        this.noteFooter = createNoteFooter(this.noteIndexText, this.noteDeleteButton);

        this.noteText = createNoteText(this.noteTextValue);
        this.noteText.onchange = () => {
            this.updateNoteTextValue(this.noteText.value);
        }

        this.noteContainer = generateNoteContainer(this.noteText, this.noteFooter);
    }

    getNoteContainer() {
        return this.noteContainer;
    }

    updateNoteIndex(updatedIndex) {
        this.noteIndex = updatedIndex;
        this.noteIndexText.textContent = "Note " + `${this.noteIndex + 1}`;
    }

    updateNoteTextValue(updatedTextValue) {
        this.noteTextValue = updatedTextValue;
    }

    delete() {
        if (this.noteContainer.parentNode) {
            this.noteContainer.remove();
        }
    }
}