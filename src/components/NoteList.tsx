import type { Note } from "../types";
interface NoteListProps {
  notes: Note[];                   
  onDelete: (id: number) => void;  
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="note-list" style={{ marginTop: '20px' }}>
      {/* เช็คว่ามี Note หรือไม่ */}
      {notes.length === 0 ? (
        <p style={{ color: '#888', fontStyle: 'italic' }}>
          No notes yet. Add one above!
        </p>
      ) : (
        // วนลูปแสดง Note แต่ละรายการ
        notes.map((note) => (
          <div 
            key={note.id} 
            className="note-item"
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '12px', 
              marginBottom: '10px',
              backgroundColor: '#fff',
              color: '#333',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'left'
            }}
          >
            {/* ส่วนแสดงข้อความ */}
            <span style={{ marginRight: '10px', wordBreak: 'break-word' }}>
              {note.text}
            </span>
            
            {/* ปุ่ม Delete */}
            <button 
              onClick={() => onDelete(note.id)}
              style={{
                backgroundColor: '#ff4444',
                color: 'white',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                minWidth: '70px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cc0000'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff4444'}
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