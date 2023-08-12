"use client";
import React, { useState, useEffect } from "react";
import styles from '@/styles/pages.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage1 from "@/assets/image1.jpg";
import HeroImage2 from "@/assets/image2.jpg";
import HeroImage3 from "@/assets/image3.jpg";
import HeroImage5 from '@/assets/image4.jpg';
import HeroImage4 from "@/assets/image5.jpg";
import HeroImage6 from "@/assets/image6.jpg";
import HeroImage7 from "@/assets/image7.jpg";
import HeroImage8 from '@/assets/image8.jpg';
import HeroImage9 from "@/assets/image9.jpg";
import HeroImage10 from "@/assets/image10.jpg";
import { GiIndianPalace } from 'react-icons/gi'

const heroImages = [
  HeroImage1,
  HeroImage2,
  HeroImage3,
  HeroImage4,
  HeroImage5,
  HeroImage6
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
        <Image
            src={heroImages[currentImageIndex]}
            alt="Hero Image"
          />
      </div>
    </section>
    </>
  )
}