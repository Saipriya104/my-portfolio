// src/app/page.js
"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import myImage from "./images/photo.png"; // This image can stay here if only used internally

export default function HomePage() {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // The path to the resume in the public folder
    link.download = "Sai_Priya_Resume.pdf"; // Set the download attribute with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up by removing the link
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px",
      }}
    >
      {/* Left section for content */}
      <div style={{ flex: 1 }}>
        <h2>Hey there! 👋</h2>
        <h1>I am Sai Priya Doddi — I design and build software solutions.</h1>
        <p>
          With experience in software engineering, I have worked on various
          projects in different sectors. I specialize in creating scalable web
          applications and enjoy solving complex challenges.
        </p>
        <Button
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={handleDownloadResume}
        >
          Download Resume ⬇️
        </Button>
      </div>

      {/* Right section for image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#ddd",
          }}
        >
          {/* Replace placeholder with an actual image */}
          <Image
            src={myImage}
            alt="SaiPriya"
            layout="responsive"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
