import React from 'react'
import {AiFillDelete} from 'react-icons/ai'

import './Notes.css'
function NoteItem({note, deleteNote}) {
  return (
    <div className='note-item'>
      <span className='notes_title'>{note.title}</span>
      <hr />
      <span className='notes_content'>{note.content}</span>
      <button onClick={() => deleteNote(note._id)}>
        <AiFillDelete style={{color: 'red'}} />
      </button>
    </div>
  )
}

export default NoteItem