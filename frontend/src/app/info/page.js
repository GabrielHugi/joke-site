'use client';
import Image from "next/image";
import styles from "./page.module.css";
import {useState, useEffect} from 'react';
import axios from 'axios';
import Header from "../../components/header/page.js"

let once = true
export default function Info() {
  const [data, setData] = useState([{"nothing": "nothing"}]);
  if (once === true) {
    acess();
    once = false;
  }
  async function acess () {
    const response = await axios.post("http://localhost:5000/acess", {token: localStorage.getItem('token')});
    if (response.status === 200) setData(response.data.content);
    else return;
    console.log("data updated");
    return setTimeout(() => {
      acess();
      return;
    }, 10000);
  }
  console.log(data);
  if (data[0].nothing === "nothing") {
  return (
    <>
    <Header/>
    <div className={styles.page}>
      <h1 style={{"fontSize": "100pt", "textAlign": "center"}}>ACESS DENIED</h1>
    </div>
    </>
  );
  }
  else return (
    <>
    <Header/>
    <div className={styles.page}>
      <div className={styles.display_users}>{data.map((data) => ( 
            <div className={styles.container_user}>
                <div className={styles.content_user}>
                    <h3>Name: <br></br> {data.name}</h3>
                    <h3>Description: <br></br> <span className={styles.smallText}> {data.description} </span></h3>
                    <hr></hr>
                    <h3>Special Containment Procedures: <span className={styles.smallText}> {data.specialcontainmentprocedures} </span> </h3>
                </div>
            </div>
        ))}
      </div>
    </div>
    </>
  );
}
