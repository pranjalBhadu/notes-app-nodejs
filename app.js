
const notes = require('./notes')

// const chalk=require("chalk");

const yargs = require('yargs');
const { argv } = require('yargs');

// console.log(notes.getNotes())

yargs.command({
    command: 'add',
    description: 'Add a new note',
    builders: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string',
        },

        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string',
        }

    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'Remove an existing note',
    builders: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    description: "Listing out all the notes",
    handler(argv){
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'Read a note',
    builders: {
        title: {
            description: 'Note Title',
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
