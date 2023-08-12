import React from 'react';
import styles from '@/styles/components.module.css';
import Link from 'next/link';
import Logo from '@/assets/1.jpg';
import Image from 'next/image';

export default function Navbar() {
  return (
    <>
    <header className={styles.header}>
        <Link href="/">
        <div className={styles.Logo}>
            <Image src={Logo} alt='Logo' />
            <span>Independence Day Wisher Online</span>
        </div>
        </Link>
        <div className={styles.links}>
            <Link href="/">Home</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/about">About</Link>
        </div>
    </header> 
    </>
  )
}