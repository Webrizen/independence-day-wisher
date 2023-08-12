import React from "react";
import styles from '@/styles/pages.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/assets/image4.jpg';
import { GiIndianPalace } from 'react-icons/gi'

export default function Home() {
  return (
    <>
    <div className={styles.background}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    <section className={styles.hero}>
      <div className={styles.leftHero}>
        <span><GiIndianPalace /> 77th Independence Day Of India</span>
        <h1>Greet your dear friends, family, relatives, and everyone who cherishes freedom and peace with joy and gratitude on this special day.</h1>
        <Link href="/wisher"><button>Wish Now!</button></Link>
      </div>
      <div className={styles.rightHero}>
        <Image src={HeroImage} alt='Hero Image' />
      </div>
    </section>
    </>
  )
}