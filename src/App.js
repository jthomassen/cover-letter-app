import logo from './logo.svg';
import './App.css';
import LetterForm from './components/LetterForm';
import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'
import CoverLetter from './components/CoverLetter';
import { useEffect, useState } from 'react';

function App() {

  const [inserts, setInserts] = useState([])

  const [submitted, setSubmitted] = useState(false)

  const [reviewed, setReviewed] = useState(false)

  function addCoverLetterInserts(newInserts) {

    console.log("LETTER INSERTS: ", newInserts)

    console.log("NAME: ", newInserts.name)
    console.log("POSITION: ", newInserts.position)

    setInserts(newInserts)

    console.log("USE STATE: ", inserts)

  }

  function handleClick() {
    setSubmitted(false)
    setReviewed(true)
  }

  



  return (

    <Router>

    <div className="App">

      
        
        <Routes>

          <Route path="/" element={<LetterForm addCoverLetterInserts={addCoverLetterInserts} setSubmitted={setSubmitted}/>} />

          <Route path="/review" element={<CoverLetter inserts={inserts} reviewed={reviewed}/>} />

        </Routes>

        <div>
          {submitted? <Link to="/review" onClick={handleClick}>Review Letter</Link> : null}
        </div>

    </div>

    </Router>
  );
}

export default App;
