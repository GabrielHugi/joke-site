'use client';

import Image from "next/image";
import styles from "./page.module.css";
import {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../components/header/page.js';

export default function Home() {
  const [visible, setVisible] = useState([false, true]);
  
  function showForm() {
    setVisible([true, false]);
    return;
  }

  async function verify (e) {
    e.preventDefault();
    setVisible([false, true]);
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    let isbroallowed = false;
    const response = await axios.post("http://localhost:5000/login", {
      name: name, password: password
    });
    const login = response.data;
    console.log(login);
    if (response.data.success) {
      localStorage.setItem('token', login.token);
      window.location.href = '/info';
    } else{
      console.log("Login inválido")
    }
  }
  return (
    <>
    <Header/>
    <div className={styles.page}>
      <form style={{"visibility": visible[0] ? "visible":"hidden"}} onSubmit={(e) => {
        verify(e)
      }}>
        <h1>Acess only authorized to skibidi sigmas from ohio.</h1>
        <label htmlFor="name">Insert your name agent</label><br/>
        <input id="name" name="name" type="text" placeholder="joe trump"></input><br/>
        <label htmlFor="password">Insert your secret code agent</label><br/>
        <input id="password" name="password" type="password" placeholder="password"></input><br/>
        <button type="submit">Submit</button>
      </form>
      <button style={{"visibility": visible[1] ? "visible":"hidden"}} onClick={() => {showForm()}}>Insert your credentials agent</button>
    </div>
    </>
  );
}
