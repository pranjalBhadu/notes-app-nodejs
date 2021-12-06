const fs = require('fs');
const chalk = require('chalk');

// const getNotes = () => {
//     return("Your Notes...")
// }

// adding new note

const addNotes = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter(note => note.title === title)

    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)

        console.log(chalk.green.bold.inverse("New note added!"))
    }else{
        console.log(chalk.red.bold.inverse("Note with title: " + title + " already exists!"))
    }

}

const saveNotes = (notes) => {
    notes = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notes)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const JSONdata = dataBuffer.toString();
        return JSON.parse(JSONdata)
    }
    catch (e) {
        return []
    }
}

// removing an existing note 

const removeNotes = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)
    if(notesToKeep.length < notes.length){
        saveNotes(notesToKeep)
        console.log(chalk.green.bold.inverse('Note removed successfully!'));
    }else{
        console.log(chalk.red.bold.inverse('No note found!'));
    }
    
}

// listing notes

const listNotes = () => {
    console.log(chalk.green.bold.inverse("Your Notes..."))

    const notes = loadNotes()

    notes.forEach(note => console.log(note.title))

}

// read notes 

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find(note => note.title === title)
    if(note){
        console.log(chalk.bold.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.bold.inverse("Note not found!"))
    }
    
}


module.exports = {
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote,
}