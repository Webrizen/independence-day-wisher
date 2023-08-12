import React from 'react';
import styles from '@/styles/components.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Independence Day Wisher Online | All Rights Reserved - Designed & Developed By <a href="http://https://webrizen.netlify.app" target="_blank" rel="noopener noreferrer">WebRizen LLP</a>
    </footer>
  )
}
