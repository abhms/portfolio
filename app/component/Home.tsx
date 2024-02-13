"use client";
import React from "react";
import Image from "next/image";
// import abhishek from "../../public/images/abhishek.jpg"

const Home = () => {
  return (
    <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto">
      <div className="intro">
        <h1 className="hey-there">Hey There,</h1>
        <h2 className="name">I&apos;m Abhishek Mishra</h2>
      </div>

      <div className="homeImg">
        <img
          className="mainImg"
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY}/image/upload/v1707843335/iw12wurflydq2v05znxh.jpg`}
          width={170}
          height={170}
          alt={"Abhishek Mishra"}
        />
      </div>

      <div>
        <h4 className="hey-there name aboutpara">
          I develop beautiful things and I love what I do.
        </h4>
      </div>
    </div>
  );
};

export default Home;
