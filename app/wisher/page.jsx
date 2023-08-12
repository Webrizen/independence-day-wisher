"use client";
import React, { useState } from 'react';
import styles from '@/styles/wisher.module.css';
import Image from 'next/image';

export default function page() {
  const initialMessage = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ratione voluptatum officia veritatis nemo? Odio a illum libero eos quibusdam alias? Veritatis asperiores nulla, accusamus commodi nesciunt error laborum odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam esse, expedita officia delectus eveniet est earum adipisci perferendis aspernatur. A natus numquam rerum aliquid veniam amet fuga, quia recusandae!`;

  const [formData, setFormData] = useState({
    yourName: '',
    receiverName: '',
    message: initialMessage,
    profilePhoto: '/placeholder.svg',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className={styles.wisher}>
      <div className={styles.wisherLeft}>
        <form>
          <label htmlFor="yourName">Type Your Name*</label>
          <input
            type="text"
            name="yourName"
            placeholder="Ex: Ravi Kumar"
            value={formData.yourName}
            onChange={handleInputChange}
          />
          <label htmlFor="receiverName">Type Your Receiver Name*</label>
          <input
            type="text"
            name="receiverName"
            placeholder="Ex: Abdul Sahaim"
            value={formData.receiverName}
            onChange={handleInputChange}
          />
          <label htmlFor="profilePhoto">Upload Your Profile Photo</label>
          <input
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleInputChange}
          />
          <label htmlFor="message">Best Wishes*</label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleInputChange}
          />
          <button>Create & Share</button>
        </form>
      </div>
      <div className={styles.wisherRight}>
        <div className={styles.preview}>
          <Image
            src={formData.profilePhoto}
            alt="Profile Photo"
            width={300}
            height={300}
          />
          <h2>{formData.receiverName || 'Receiver Name'}</h2>
          <span className={styles.cursive}>Wish You</span>
          <p>{formData.message || 'Best wishes message goes here.'}</p>
          <span className={styles.cursive}>From</span>
          <h3>{formData.yourName || 'Your Name'}</h3>
        </div>
      </div>
    </section>
  );
}
