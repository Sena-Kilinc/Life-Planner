import NotesList from "./components/NotesList";
import { nanoid } from 'nanoid';
import { useState, useEffect } from "react";
import Search from "./components/NotesSearch";
import NotesHeader from "./components/NotesHeader";
import "./NotesIndex.css"
const NotesApp = ()=>{
  const[notes, setNotes] = useState([{
    id: nanoid(),
    text: "this is the first note bruv",
    date: "4/5/22"
  },

  {
    id: nanoid(),
    text: "this is the second note bruv",
    date: "4/7/22"
  },

  {
    id: nanoid(),
    text: "this is the third note bruv",
    date: "4/6/22"
  },

  {
    id: nanoid(),
    text: "this is the fourth note bruv",
    date: "4/8/22"
  },
]);

const [searchText, setSearchText] = useState('');

useEffect(()=>{
const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'))
if (savedNotes){
  setNotes(savedNotes)
}
},[])

useEffect(()=>{
localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
}, [notes])

const addNote=(text)=>{
const date = new Date();
const newNote = {
  id: nanoid(),
  text: text, 
  date: date.toLocaleDateString(),
}




const newNotes=[...notes, newNote];
setNotes(newNotes);
};

const deleteNote=(id)=>{
  const newNotes = notes.filter((note)=> note.id !== id);
  setNotes(newNotes);
}
  return <div className="mycontainer" >
    <NotesList 
    notes={notes.filter((note)=>
      note.text.toLowerCase().includes(searchText) )} 
    handleAddNote={addNote}
    handleDeleteNote={deleteNote}
    />
  </div>
}

export default NotesApp;