"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/wisher.module.css";
import Image from "next/image";
import Swal from "sweetalert2";
import { db, storage, firebase_app } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { BiLink } from "react-icons/bi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function page() {

  const independenceDayMessages = [
    "Celebrating 77 years of freedom! 🇮🇳 Let's embrace our unity and diversity. Together, we've sculpted a nation where dreams take flight and aspirations know no bounds.",
    "On this Independence Day, let's honor the past and shape a brighter future. May the tricolor always fly high, representing the hopes and dreams of every Indian heart. 🌟🇮🇳",
    "77 years of progress, 77 years of unity! Happy Independence Day! Let's treasure the tapestry of cultures and traditions that make India an extraordinary mosaic. 🎉🇮🇳",
    "From sacrifices to successes, India's journey inspires the world. With every milestone, we light a beacon of inspiration for future generations. Happy 77th Independence Day! 🇮🇳🎈",
    "Proud to be Indian, celebrating 77 years of resilience and growth. Our diverse heritage is a source of strength, and our collective spirit continues to shine brightly. Jai Hind! 🇮🇳🙌",
    "As we hoist the tricolor, let's renew our commitment to a stronger, inclusive India. Let's empower every citizen to contribute to our nation's progress and prosperity. Happy Independence Day! 🇮🇳🎊",
    "77 years of freedom, 77 years of dreams fulfilled. Let's cherish the spirit of India that pulses within us, reminding us of our shared history and a future filled with promise. 🇮🇳💫",
    "In the tapestry of our nation, every thread represents unity. May our diversity continue to be our greatest strength as we march towards a harmonious future. Happy 77th Independence Day! 🇮🇳🎉",
    "From struggle to success, the journey continues. On this auspicious day, let's honor the struggles that shaped our destiny and celebrate the triumphs that define our nation. Happy Independence Day, India! 🇮🇳❤️",
    "Let's celebrate the power of unity and progress on this 77th Independence Day! As we salute the tricolor, let's also honor the spirit of unity that defines us as Indians. 🇮🇳🌼",
  ];

  const independenceDayMessagesHindi = [
    "स्वतंत्रता के 77 वर्षों का जश्न! 🇮🇳 हम सभी मिलकर गर्व और उत्सव मनाएँ। यहाँ तक की हमारी एकता और विविधता के बीच की मिलनसर जीवनी को हम साझा करते हैं।",
    "इस स्वतंत्रता दिवस पर, हम पुराने समय का सम्मान करें और एक उज्ज्वल भविष्य का निर्माण करें। तिरंगा हमें हमारे सपनों की उम्मीद और भारतीय दिलों की आशाओं का प्रतीक समय-समय पर हमेशा ऊंचा उठाए। 🌟🇮🇳",
    "सफलता के 77 वर्ष, एकता के 77 वर्ष! स्वतंत्रता दिवस की ढेर सारी शुभकामनाएँ! भारत के अद्वितीय संस्कृति और परंपराओं का जाल हमें अत्यधिक विशेष बनाता है। 🎉🇮🇳",
    "त्याग से लेकर सफलता तक, भारत की यात्रा दुनिया को प्रेरित करती है। हर मील के साथ, हम भविष्य की पीढ़ियों के लिए प्रेरणा की बत्ती जलाते हैं। स्वतंत्रता दिवस की 77वीं सालगिरह की ढेर सारी शुभकामनाएँ! 🇮🇳🎈",
    "भारतीय होने पर गर्व है, संघर्ष और विकास के 77 वर्ष। हमारी विविध धरोहर एक शक्ति का स्रोत है, और हमारी समूह आत्मा हमें सबके साथ चमकते रहते हैं। जय हिंद! 🇮🇳🙌",
    "जैसे हम तिरंगा फहराते हैं, वैसे ही हम एक मजबूत, समावेशी भारत की दिशा में प्रतिबद्ध रहें। स्वतंत्रता दिवस की ढेर सारी शुभकामनाएँ! हमारे विविधता को हमारी सबसे बड़ी ताकत बनाने के रूप में बनाए रखने की कामना करते हुए आगे बढ़ें। 🇮🇳🎊",
    "स्वतंत्रता के 77 वर्ष, सपनों के 77 वर्ष पूरे होते रहे। हमें उस भारत की आत्मा का सम्मान करने की आवश्यकता है जो हमारे भीतर धड़कती है, हमें हमारी साझी इतिहास की याद कराती है और एक वादे से भरे भविष्य से हमें अवगत कराती है। 🇮🇳💫",
    "हमारे राष्ट्र की चादर में, हर धागा एकता की प्रतिष्ठा करता है। हमारी विविधता अब तक हमारी सबसे बड़ी ताकत रही है और हमारे सामूहिक आत्मा के साथ एक सद्भावपूर्ण भविष्य की ओर मार्च करते हुए। स्वतंत्रता दिवस की 77वीं सालगिरह की ढेर सारी शुभकामनाएँ! 🇮🇳🎉",
    "संघर्ष से सफलता की ओर, यात्रा जारी है। इस शुभ दिन पर, हम उन संघर्षों का सम्मान करें जिन्होंने हमारे भविष्य को आकार दिया और उन विजयों का जश्न मनाएं जिनसे हमारा राष्ट्रियता परिभाषित होता है। भारत के इस 77वें स्वतंत्रता दिवस की ढेर सारी शुभकामनाएँ! 🇮🇳❤️",
    "चलो इस 77वें स्वतंत्रता दिवस पर, हम सभी मिलकर एकता और प्रगति की शक्ति का जश्न मनाएं! जैसे हम तिरंगा की सलामी देते हैं, वैसे ही हम भारतीयों के रूप को सलामी दें जो हमें विश्वास दिलाते हैं कि हम सभी एक हैं। 🇮🇳🌼",
  ];
  
  const initialMessage = `#IndependenceDay2023 #ProudToBeIndian #77YearsOfFreedom`;
  const [wishId, setWishId] = useState("Loading...");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const [formData, setFormData] = useState({
    yourName: "",
    receiverName: "",
    message: initialMessage,
    profilePhoto: "/placeholder.svg",
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setFormData((prevData) => ({
            ...prevData,
            profilePhoto: event.target.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      Swal.fire({
        title: "Uploading Profile Photo...",
        icon: "info",
        allowOutsideClick: false,
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: async () => {
          try {
            const wishesRef = collection(db, "Wishes");
            const timestamp = serverTimestamp();

            const profilePhotoFile = dataURItoBlob(formData.profilePhoto);
            const storageRef = ref(
              storage,
              `profile_photos/${Date.now()}_${profilePhotoFile.name}`
            );
            const uploadTask = uploadBytes(storageRef, profilePhotoFile);

            uploadTask.then(async (snapshot) => {
              const profilePhotoURL = await getDownloadURL(snapshot.ref);

              const newWish = {
                SenderName: formData.yourName,
                ReceiverName: formData.receiverName,
                ProfileURL: profilePhotoURL,
                wishMessage: formData.message,
                createdAt: timestamp,
              };

              await addDoc(wishesRef, newWish);

              const docRef = await addDoc(wishesRef, newWish);

              setWishId(docRef.id);
              setFormSubmitted(true);

              Swal.close();

              Swal.fire({
                icon: "success",
                title: "Wish created and shared!",
                showConfirmButton: false,
                timer: 2000,
              });
            });
          } catch (error) {
            console.error("Error creating wish:", error);
            Swal.update({ title: "Error Creating Wish", icon: "error" });
          }
        },
      });
    } catch (error) {
      console.error("Error creating wish:", error);
      Swal.fire({
        icon: "error",
        title: "Oops... Something went wrong!",
        text: "Unable to create and share the wish.",
      });
    }
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handleCopyLink = () => {
    if (wishId) {
      const linkInput = document.createElement("input");
      linkInput.value = `http://localhost:3000/wish/${wishId}`;
      document.body.appendChild(linkInput);
      linkInput.select();
      document.execCommand("copy");
      document.body.removeChild(linkInput);

      Swal.fire({
        icon: "success",
        title: "Link copied!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setFormData((prevData) => ({
      ...prevData,
      message: getRandomMessage(language),
    }));
  };

  const getRandomMessage = (language) => {
    const messages =
      language === "hindi" ? independenceDayMessagesHindi : independenceDayMessages;
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <section className={styles.wisher}>
      <div className={styles.wisherLeft}>
        <form onSubmit={handleSubmit}>
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
          <div className={styles.toggleBTN}><span onClick={() => handleLanguageChange("hindi")}>Hindi</span>
            <span onClick={() => handleLanguageChange("english")}>English</span></div>
          <textarea
            name="message"
            cols="30"
            rows="10"
            value={`🇮🇳 Celebrating 77 Glorious Years of India's Independence! 🌟 ${formData.message}`}
            onChange={handleInputChange}
          />
          <button type="submit">Create & Share</button>
        </form>
        {formSubmitted && (
          <div className={styles.CopyLink}>
            <input
              type="url"
              value={`http://localhost:3000/wish/${wishId}`}
              readOnly
            />
            <button onClick={handleCopyLink}>
              <BiLink />
            </button>
          </div>
        )}
      </div>
      <div className={styles.wisherRight}>
        <div className={styles.preview}>
          <Image
            src={formData.profilePhoto}
            alt="Profile Photo"
            width={300}
            height={300}
          />
          <h2>{formData.receiverName || "Receiver Name"}</h2>
          <span className={styles.cursive}>Wish You</span>
          <p>{`🇮🇳 Celebrating 77 Glorious Years of India's Independence! 🌟 ${formData.message}` || "Best wishes message goes here."}</p>
          <span className={styles.cursive}>From</span>
          <h3>{formData.yourName || "Your Name"}</h3>
        </div>
      </div>
    </section>
  );
}
