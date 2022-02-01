import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Meetings",
    text: "Schedule Meeting with UI/UX Team",
    color: "#dfdfdf",
    date: (new Date).toString(),
  }]);

  return (
    <>
      <Header></Header>
    </>
  );
}

export default App;
