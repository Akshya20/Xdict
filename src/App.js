import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [word1,setword]=useState("");
  const [mean,setmean]=useState("");
  let dict=[

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

];

 const handlechange = () =>{
   let result= dict.find(item=>item.word.toLowerCase() === word1.toLowerCase());
   if(result){
    setmean(result.meaning);
   }else{
    setmean("Word not found in the dictionary.");
   }
 }


  return (
    <div className="App">
      <h2>Dictionary App</h2>
      <input type='text' value={word1} onChange={(e)=>setword(e.target.value)}></input>
      <button onClick={handlechange}>Search</button>
      <p>Definition:</p>
      <p>Definition:</p>
    </div>
  );
}

export default App;
