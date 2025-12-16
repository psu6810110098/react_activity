import { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    if (text.trim()) {
      onAdd(text); 
      setText(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your note..."
        style={{ marginRight: '8px', padding: '8px' }}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;