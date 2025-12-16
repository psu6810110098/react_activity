import type { Note } from "../types";

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="note-list" style={{ marginTop: '20px' }}>
      {notes.length === 0 ? (
         <p style={{ color: '#888' }}>No notes yet.</p>
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
              textAlign: 'left',
              display: 'flex',           
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{note.text}</span>
            
            <button 
              onClick={() => onDelete(note.id)}
              style={{
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginLeft: '10px'
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default NoteList;