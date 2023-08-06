const express = require("express")
const notesRouter = express.Router()
const Note = require('../models/note')

//get all notes
notesRouter.get('/', (req, res, next) => {
  Note.find((err, notes) => {
    if(err){
      res.status(500)
      return next(err)

    }
    return res.status(200).send(notes)
  })
})

//get one nore

notesRouter.get('/:noteId', (req, res, next) => {
  Note.findOne({_id: req.params.noteId}, (err, Note) => {
    if(err){
      res.status(500)
      return next(err)
  }
  return res.status(200).send(Note)
  })
})



//create new note
notesRouter.post('/', (req, res, next) => {
  const newNote = new Note(req.body)
  newNote.save((err, savedNote) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedNote._id)
  })
})


//delete note
notesRouter.delete('/:noteId', (req, res, next) => {
  Note.deleteMany({_id: req.params.noteId}, (err, deletedNote) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted note ${deletedNote.subject} from notes`)
  })
})


//update note
notesRouter.put('/:noteId', (req, res, next) => {
  Note.findOneAndUpdate(
    {_id: req.params.noteId}, 
    req.body, 
    {new: true}, 
    (err, updatedNote) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedNote, `Note has been updated`)
    }
  )
})
module.exports = notesRouter