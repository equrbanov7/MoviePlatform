import React from 'react'
import styles from "./styles.module.css"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
         Made with ❤️ by&nbsp;
        <Link href="https://www.linkedin.com/in/elvin-gurbanov-8065571aa/" target='_blank'>
        Elvin Gurbanov 
        </Link>
    </footer>
  )
}

export default Footer