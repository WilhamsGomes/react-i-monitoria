import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'

function App() {

  let variavel = 123;
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Wil");

  return (
    <>
      <p>Variável: {variavel}</p>
      <p>State: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => variavel = 12}>Trocar variavel</button>
      <button onClick={() => setCount(count + 1)}>Trocar state</button>
      <input type="text" onChange={() => setName(event.target.value)}/>
      <Header />
    </>
  )
}

export default App
