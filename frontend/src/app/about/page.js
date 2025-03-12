'use client';

import Image from "next/image";
import styles from "./page.module.css";
import {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/header/page.js';
import Footer from '../../components/footer/page.js';

export default function About() {
  return (
    <>
    <Header/>
    <div className={styles.page}>
        <div className={styles.content}>
            <h1>We are the cia</h1>
            <p>We mostly spy around but we also do some other stuff like protecting the world against the evil forces of the skibidi toilet and we also do some other stuff like sometimes when we have nothing to do at office we kind of play call of duty</p>
        </div>
    </div>
    <Footer/>
    </>
  );
}
