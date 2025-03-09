'use client';
import Image from "next/image";
import styles from "./page.module.css";
import {useState} from 'react';
import axios from 'axios';

export default function Header() {
  return (
    <div className={styles.header}>
        <div>
            <a href="/"><h1>Insert credentials</h1></a>
        </div>
        <div>
            <a href="/info"><h1>Secret Information</h1></a>
        </div>
        <div>
            <a href="/about"><h1>About us</h1></a>
        </div>
    </div>
  );
}
