import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';
import type { Note } from './types.ts';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="app-container">
      <h1>Sticky Notes</h1>   
      <NoteForm onAdd={addNote} />
      <NoteList />
    </div>
  );
}

export default App;