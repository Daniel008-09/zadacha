import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToDoList from './components/TodoList';
import './app.css'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Список задач</h1>
        <Routes>
          <Route path="/" element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
