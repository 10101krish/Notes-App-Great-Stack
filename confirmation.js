import { Note } from "./note.js";

function handleConfirmationButtonPress(currentNote, buttonResponse) {
    if (currentNote instanceof Note)
    {
        currentNote.handleDeletionConfirmation(buttonResponse);
    }
}

function generateConfirmationTitle() {
    const confirmationTitle = document.createElement('div');
    confirmationTitle.classList.add('confirmation-title');
    confirmationTitle.textContent = 'Confirm Deletion';

    return confirmationTitle;
}

function generateYesConfirmationButton(currentNote) {
    const yesConfirmationButton = document.createElement('button');
    yesConfirmationButton.classList.add('confirmation-button');
    yesConfirmationButton.classList.add('yes');
    yesConfirmationButton.textContent = 'Yes';

    yesConfirmationButton.onclick = () => {
        handleConfirmationButtonPress(currentNote, true);
    }

    return yesConfirmationButton;
}

function generateNoConfirmationButton(currentNote) {
    const noConfirmationButton = document.createElement('button');
    noConfirmationButton.classList.add('confirmation-button');
    noConfirmationButton.classList.add('no');
    noConfirmationButton.textContent = 'No';

    noConfirmationButton.onclick = () => {
        handleConfirmationButtonPress(currentNote, false);
    }

    return noConfirmationButton;
}

function generateConfirmationButtonsContainer(currentNote) {
    const confirmationButtonsContainer = document.createElement('div');
    confirmationButtonsContainer.classList.add('confirmation-buttons-container');

    const yesConfirmationButton = generateYesConfirmationButton(currentNote);
    confirmationButtonsContainer.append(yesConfirmationButton);

    const noConfirmationButton = generateNoConfirmationButton(currentNote);
    confirmationButtonsContainer.append(noConfirmationButton);

    return confirmationButtonsContainer;
}

export function generateConfirmationContainer(currentNote) {
    const confirmationContainer = document.createElement('div');
    confirmationContainer.classList.add('confirmation-container')

    const confirmationTitle = generateConfirmationTitle();
    confirmationContainer.append(confirmationTitle);

    const confirmationButtonsContainer = generateConfirmationButtonsContainer(currentNote);
    confirmationContainer.append(confirmationButtonsContainer);

    return confirmationContainer;
}