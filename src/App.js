import React, { useEffect} from 'react';
import './App.css';

function App() {
  useEffect(   () => {
    console.log('hey im effect');
  });

  return (
    <div className="App">
      <header className="App-header">
        <div>Hue Moe</div>
      </header>
    </div>
  );
}

export default App;
