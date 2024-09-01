
import React from 'react';
import './App.css';
import Resume from './Resume';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Resume Visualizations</h1>
        <p>
          This is a project for visualizing resumes.
        </p>
      </header>
      <Resume/>
    </div>
  );
}

export default App;
