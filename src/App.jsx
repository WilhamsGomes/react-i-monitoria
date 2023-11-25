import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Drop from './components/Dropdown/Dropdown';
import MenuAlignResponsiveExample from './components/Header/Header';
import TableExample from './components/Table/Table';
import NavBar from './components/NavBar/NavBar';
import Input from './components/InputGroup/InputGroup';
import Banner from "../src/assets/banner.jpg"
import { useState } from 'react';

function App() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function login() {
    alert(`Email: ${email} e passwrd: ${password}`);
    //requisição pro back
  }

  const array = [
    {
      nome: "Evento de Música",
      descricao: "Um evento musical ao vivo com várias bandas.",
      id: 1,
      photo: "https://www.sns.gov.pt/wp-content/uploads/2023/04/dms_2023.jpg",
    },
    {
      nome: "Feira de Arte",
      descricao: "Uma feira de arte local apresentando artistas locais.",
      id: 2,
      photo: "https://www.designi.com.br/images/preview/10259762.jpg",
    },
    {
      nome: "Maratona da Cidade",
      descricao: "Uma maratona anual pela cidade.",
      id: 3,
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Og_qvfpg__1ehQw1mV4V_wu9JAbpOaYP3tdF3TUjcd7SHbLq7y9rpQi-oofqjPvC2F0&usqp=CAU",
    },
    {
      nome: "Festival de Comida",
      descricao: "Um festival celebrando a culinária local.",
      id: 4,
      photo: "https://img.freepik.com/psd-gratuitas/modelo-de-banner-para-malhar-na-academia-durante-a-pandemia_23-2148813695.jpg",
    },
    {
      nome: "Conferência de Tecnologia",
      descricao: "Uma conferência apresentando as últimas novidades em tecnologia.",
      id: 5,
      photo: "https://img.freepik.com/psd-gratuitas/modelo-de-facebook-de-treinamento-de-musculacao-gradiente_23-2150001552.jpg",
    },
    {
      nome: "Workshop de Fotografia",
      descricao: "Um workshop para fotógrafos iniciantes e avançados.",
      id: 6,
      photo: "https://freefireclub.com/wp-content/uploads/2020/10/7D1B86FD-BAEA-4E47-A22D-A02FCBAAB99F-1024x621.jpeg",
    },
  ]

  return (
    <>
      <div className='login-screen'>
        <div className='banner'>
          <img src={Banner}/>
        </div>
        <div className='wrapper-login'>
          <h2>Login</h2>
          <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={() => login()}>Entrar</button>
        </div>
      </div>
      <NavBar />
      <MenuAlignResponsiveExample />


      <div className='cards-group'>
        {array.map((evento, index) => (
          <Card key={index} evento={evento}/>
        ))}
      </div>

      <Drop />
      <TableExample />
      <Input />
    </>
  )
}

export default App
