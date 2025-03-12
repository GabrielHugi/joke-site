'use client';
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from 'react';
import axios from 'axios';
import image from "../../../public/html.png"

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div>
            <h1>CIA - Cool Inteligent Alphas</h1>
        </div>
        <div style={{"marginLeft": "auto"}}>
            <Image src={image} width={50} height={50} alt="Logo of this yee yee ass website"/>
        </div>
    </div>
  );
}