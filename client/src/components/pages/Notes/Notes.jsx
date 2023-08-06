import React, {useEffect, useState} from 'react'
import NoteForm from './NoteForm';
import axios from 'axios';
import NoteItem from './NoteItem';
function Notes() {
  const userAxios = axios.create();

  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
  
    return config;
  });
  const [notes, setNotes] = useState([])
  
const addNote = (newNote) => {
  userAxios.post('/api/notes', newNote)
  .then((response) => {
    setNotes([...notes, newNote])
  })
  .catch((error) => {
    console.error('Error adding note:', error)
  });
}
const deleteNote = (id) => {
  userAxios.delete(`/api/notes/${id}`)
    .then((response) => {
      const updatedNotes = notes.filter((note) => note._id !== id);
      setNotes(updatedNotes);
    })
    .catch((error) => {
      console.error('Error deleting note:', error);
    });
};




useEffect(() => {
  userAxios.get('/api/notes')
  .then((response) => {
    setNotes(response.data)
  })
  .catch(error => {
    console.error('Error getting notes:', error)
  })
}, [])
  
  return (
    <div className='Notes'>
      <NoteForm addNote = {addNote} />
      <div className='note-list'>
        {notes?.map(note => (
          <NoteItem key = {note.id} note = {note} deleteNote = {deleteNote} />
        ))}
      </div>
    </div>
  )
}

export default Notes
