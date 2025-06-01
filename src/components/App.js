
import React from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");

  const handleChange = (event) =>{
    setName(event.target.value)
  };
  return (
    <div>
        {/* Do not remove the main div */}
        <input
            type = "text"
            Placeholder = "Enter your name
            value={name}
            onChange= {handleChange} 
        />
        {name && <h1>Hello , {name}!</h1>}     
   </div>
  )
}

export default App
