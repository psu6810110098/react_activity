import { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import './App.css';
import { Note } from './Type';

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
            <NoteForm onSubmit={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;