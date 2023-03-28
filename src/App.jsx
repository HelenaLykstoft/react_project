import React from "react";
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import User from "./components/User.jsx";
import Address from "./components/Address.jsx";
import UserList from "./components/UserList.jsx";
import Counter from "./components/Counter.jsx";

function App() {
    const fname = "Helena"
    const name = "Helena Botn Lykstoft"
    const address = {
        street: "Kaas Alle",
        number: "29",
        city: "Hellerup"
    }


    const [count, setCount] = useState(0);
    const [users, setUsers] = useState([]);
    // const [person, setPerson] = useState({});
    //const [persons, setPersons] = useState({});

    useEffect(()=>{
        console.log("useEffect called");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    },[]);

    console.log(users)

  return (
    <div style={background}>
      <h2>Hello from {fname}!</h2>
      <p>This is a paragraph</p>
        <UserList users={users}/>
        {/*<Address addr={address}/>*/}
        <Counter count={count} setCount={setCount}/>
    </div>
  )
}

const background = {
  backgroundColor: "#8ABD91"
}

export default App
