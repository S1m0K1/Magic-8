import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <p>
          This is a Magic 8 Ball, ask it a question.
          <br /> All will be revealed.
        </p>
        <input class="question">
        </input>
        <br />
        <button type="submit" class="submit-button" value="">&crarr;</button>
      </header>

    </div>
  );
}

export default App;
