import React from "react"
import styles from './Header.module.css'
import igniteLogo from '../assets/Logo.svg'

console.log(igniteLogo)
export function Header() {
  return (
    <header className={styles.header}>
 <img src={igniteLogo}alt='Logotipo do ignite'/>
    </header>
  );
}