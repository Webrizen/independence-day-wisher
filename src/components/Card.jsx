"use client";
import React, { useEffect, useState } from 'react';
import styles from "@/styles/wisher.module.css";
import Image from 'next/image';
import Swal from "sweetalert2";
import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function Card({ id }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Firestore based on the passed document ID
    const fetchData = async () => {
      try {
        const docRef = doc(db, "Wishes", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          Swal.fire({
            icon: "error",
            title: "Wish not found",
            text: "The wish you're looking for does not exist.",
          });
        }
      } catch (error) {
        console.error("Error fetching wish:", error);
        Swal.fire({
          icon: "error",
          title: "Oops... Something went wrong!",
          text: "Unable to fetch the wish data.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className={styles.wisherRight}>
        {isLoading ? (
          <div className={styles.previewLoading}>
          </div>
        ) : (
          <div className={styles.preview}>
            <Image
              src={data?.ProfileURL || "/placeholder.svg"}
              alt="Profile Photo"
              width={300}
              height={300}
              placeholder = 'blur'
            blurDataURL="/blur.svg"
            />
            <h2>{data?.ReceiverName || "Receiver Name"}</h2>
            <span className={styles.cursive}>Wish You</span>
            <p>{data?.wishMessage || "No wish message available."}</p>
            <span className={styles.cursive}>From</span>
            <h3>{data?.SenderName || "Your Name"}</h3>
          </div>
        )}
      </div>
    </>
  );
}
