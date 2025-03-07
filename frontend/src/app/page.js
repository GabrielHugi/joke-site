'use client';
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from 'react';

let ultrasecret = [
  {
    name: "elon musk",
    password: "skibidi"
  }
];

export default function Home() {
  const [formvisible, setformvisible] = useState("show");
  const [btnvisible, setbtnvisible] = useState("show");
  function verify (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    let isbroallowed = false;
    if (name == ultrasecret[0].name && password == ultrasecret[0].password) {

    }
  }
  return (
    <div className={styles.page}>
      <form style={{visibility: formvisible}} onSubmit={(e) => {
          verify(e)
        }}>
        <h1>Acess only authorized to skibidi sigmas from ohio.</h1>
        <label htmlFor="name">Insert your name agent</label><br/>
        <input id="name" name="name" type="text" placeholder="joe trump"></input><br/>
        <label htmlFor="password">Insert your secret code agent</label><br/>
        <input id="password" name="password" type="password" placeholder="password"></input><br/>
        <button type="submit">Submit</button>
      </form>
      <button style={{visibility: btnvisible}}>Insert your credentials agent</button>
    </div>
  );
}
