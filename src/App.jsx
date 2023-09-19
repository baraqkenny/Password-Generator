import { useState } from 'react';
import usePasswordGenerator from './Components/usePasswordGenerator';
import './App.css'
import PasswordStrength from './Components/PasswordStrength';

function App() {
   const [length, setLength] = useState(4);
   const [checkboxData, setCheckBoxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include lowerCase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbol", state: false }
  ]);
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }
  
    const handleCheckBoxData = (i)=> {
     
      const updatedCheckboxData = [...checkboxData];
      updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
      setCheckBoxData(updatedCheckboxData)
    }
  
    const { password, errorMessage, generatePassword} = usePasswordGenerator()

  return (
    <section className="container">
      <div className="header">
        {/* Text and Copy */}
        {password && (
          <div className="top-content">
            <h3>{password}</h3>
            <button onClick={handleCopy} className="copy-btn">
              {copied ? "copied" : "copy"}
            </button>
          </div>
        )}
   
  {/* Character Length */}
        <div className="char-length">
          <span>
            <label>Character Length</label>
            <label>{length}</label>
          </span>

          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>

        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.state}
                onChange={() => handleCheckBoxData(index)}
              />
              <label htmlFor="title">{checkbox.title}</label>
            </div>
          ))}
        </div>

        {/* password strength */}
        <PasswordStrength password={password} />

            {/* error handling */}
        { errorMessage && <div className='errorMessage'>{errorMessage}</div>}

        <button 
        onClick={() => generatePassword(checkboxData, length)} 
        className="generate-btn">
          Generate Password
        </button>
      </div>
    </section>
  );
}

export default App
