"use client";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faSquareXTwitter,faMedium ,faGithub} from '@fortawesome/free-brands-svg-icons';
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
      <span className="experience">
        <span className="experience_number">
          <h1>2</h1>
        </span>
        <span className="experience_text">
          <h4>Almost Years</h4>
          <h4>Experience</h4>
        </span>
      </span>
      <div>
        <h4 className="hey-there name aboutpara">
          I develop beautiful things and I love what I do.
        </h4>
      </div>
      <div className="e_mail">
        <h1 className="emailHad">Email</h1>
        <h4 className="hey-there name aboutpara">
          {process.env.NEXT_PUBLIC_EMAIL}
        </h4>

        <h3><FontAwesomeIcon icon={faLinkedin} /></h3>
        <h3><FontAwesomeIcon icon={faSquareXTwitter} /></h3>
        <h3><FontAwesomeIcon icon={faMedium} /></h3>
        <h3><FontAwesomeIcon icon={faGithub} /></h3>
        <img src="/leetcode.svg" alt="leetcode" width={"15px"}/>
      </div>
      <div className="cert">

      </div>
    </div>
  );
};

export default Home;
