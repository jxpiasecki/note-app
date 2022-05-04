const fs = require('fs');
const path = require('path');
const chalk = require("chalk");

const notesFilepath = path.join(path.dirname(process.mainModule.filename), 'notes.json');
console.log(notesFilepath);
const getNotes = () => {
    return 'Your notes ... ';
}

const loadNotes = () => {
    try {
        const notes = fs.readFileSync(notesFilepath).toString();
        return JSON.parse(notes)
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync(notesFilepath, JSON.stringify(notes));
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const existingNote = notes.find(item => item.title === title);
    if (existingNote) {
        console.log(chalk.red.inverse('Note with the same title already exists'));
        return;
    }

    notes.push({
        title,
        body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse('Note added!'));
}

const removeNote = (title) => {
    let notes = loadNotes();
    const existingNote = notes.find((item) => item.title === title);
    if (!existingNote) {
        console.log(chalk.red.inverse('Note doesn\'t exists'));
        return;
    }

    notes = notes.filter(item => item.title !== title);
    saveNotes(notes);
    console.log(chalk.blue.inverse('Note removed!'));
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach((item, index) => {
        console.log(chalk.bold.inverse(item.title));
    });
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(item => item.title === title);
    if (!note) {
        console.log(chalk.red.inverse('Note doesn\'t exists'));
        return;
    }
    console.log(chalk.green.inverse(JSON.stringify(note)));
}

module.exports.getNotes = getNotes;
module.exports.listNotes = listNotes;
module.exports.addNote = addNote;
module.exports.removeNote = removeNote;
module.exports.readNote = readNote;