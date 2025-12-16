import type { Note } from "../types";

interface NoteListProps {
  notes: Note[];
}

function NoteList({ notes }: NoteListProps) {
  return (
    <div className="note-list" style={{ marginTop: '20px' }}>
      {notes.length === 0 ? (
         <p style={{ color: '#888' }}>No notes yet. Add one above!</p>
      ) : (
        notes.map((note) => (
          <div 
            key={note.id} 
            className="note-item"
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '10px', 
              marginBottom: '10px',
              backgroundColor: '#fff',
              color: '#333',
              textAlign: 'left'
            }}
          >
            {note.text}
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;