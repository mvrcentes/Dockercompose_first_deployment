import Note from '../models/note.models.js'

export const getNotes = async (req, res) => {
    const notes = await  Note.find()
    // res.json({ message: [] })
    res.json(notes)
}

export const createNote = async (req, res) => {
    const { title, content, author } = req.body
    
    const newNote = new Note({
        title,
        content,
        author
    })
    console.log(newNote)
    await newNote.save()

    res.json({ message: 'Note saved' })
}

