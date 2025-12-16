import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1>Sticky Notes</h1>
      <NoteForm />
      <NoteList />
    </div>
  )
}

export default App
