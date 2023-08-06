import React, { useState } from 'react'

import './Notes.css'
function NoteForm({addNote}) {
  const [note, setNote] = useState({
    title: "", 
    content: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(note); 
  };


  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prevInputs => ({
      ...prevInputs,
      [name]: value,
    }));
  }
  return (
    <form onSubmit={handleSubmit} className='note-form'>
      <input type = "text"
      value={note.title}
      onChange={handleChange}
      name = "title"
      placeholder='Subject Title' />

      <textarea 
      type='text'
      value={note.content} 
      name = "content"
      onChange = {handleChange}
      placeholder='Type your note...' />
      
      <button type='submit'>Save Note</button>
    </form>
  )
}

export default NoteForm