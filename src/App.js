import React, {useState} from 'react'

import './App.css';

function App() {
  const [firstVal, setFirstVal] = useState('')
  const [secondVal, setSecondVal] = useState('')
  const [thirdVal, setThirdVal] = useState('');
  const [list, setList] = useState([]);

  const clearInputs = () => {
    setFirstVal('');
    setSecondVal('');
    setThirdVal('');
  }

  const handleSubmit = () => {
    let newItem = `${firstVal}-${secondVal}-${thirdVal}`;
    setList([...list, newItem])
    clearInputs();
  }

  let listItems;
  if(list.length > 1) {
    listItems = list.map((item, idx) => {
      return (
        <h3 key={idx}>{item}</h3>
      )
    })
  }

  return (
    <div className="App">
      <div>
        <input value={firstVal} onChange={(e) => setFirstVal(e.target.value)} />
        <input value={secondVal} onChange={(e) => setSecondVal(e.target.value)} />
        <input value={thirdVal} onChange={(e) => setThirdVal(e.target.value)} />
        <button onClick={handleSubmit}>Add Drug</button>
      </div>
      {listItems}
    </div>
  );
}

export default App;
