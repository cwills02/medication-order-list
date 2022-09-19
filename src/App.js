import React, {useState, useRef} from 'react'

import './App.css';

function App() {
  const [firstVal, setFirstVal] = useState('')
  const [secondVal, setSecondVal] = useState('')
  const [thirdVal, setThirdVal] = useState('');
  const [list, setList] = useState([]);

  const ref = useRef(null);

  const clearInputs = () => {
    setFirstVal('');
    setSecondVal('');
    setThirdVal('');
  }

  const handleSubmit = () => {
    let newItem = `${firstVal}-${secondVal}-${thirdVal}`;
    setList([...list, newItem])
    clearInputs();
    ref.current.focus();
  }

  const removeItem = (listItem) => {
    let newList = list.filter(item => item !== listItem);
    setList(newList);
  }

  let listItems;
  if(list.length > 0) {
    listItems = list.map((item, idx) => {
      return (
        <div className='list-item' id={idx} key={idx}>
          <h2>{item}</h2>
          <button onClick={() => removeItem(item)}>X</button>
        </div>
      )
    })
  }

  return (
    <div className="App">
      <div className='form'>
        <input ref={ref} value={firstVal} onChange={(e) => setFirstVal(e.target.value)} />
        <input value={secondVal} onChange={(e) => setSecondVal(e.target.value)} />
        <input value={thirdVal} onChange={(e) => setThirdVal(e.target.value)} />
        <button onClick={handleSubmit}>Add Drug</button>
      </div>
      {listItems}
    </div>
  );
}

export default App;
