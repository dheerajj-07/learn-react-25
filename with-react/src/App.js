import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';

// App.js hai jo voh hmari main app hai aur jo bhi code hum isme likhenge voh main code hai jo app me dikhega

function App() {
  const[value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar />
      <div className="value">{value}</div>
      <button onClick={()=>{
        setValue(value+1);
      }}>click me</button>
     
    </div>
  );
}

export default App;
