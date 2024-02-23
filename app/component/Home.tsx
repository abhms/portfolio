"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareXTwitter,
  faMedium,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
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
        <span className="icons_span">
          <h3 className="icons">
            <a href="https://www.linkedin.com/in/abhishek-mishra-8801a21b4/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </h3>
          <h3 className="icons">
            <a href="https://twitter.com/npa_web">
              <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
            </a>
          </h3>
          <h3 className="icons">
            <a href="https://theabhishek7.medium.com/">
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </h3>
          <h3 className="icons">
            <a href="https://github.com/abhms">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </h3>
          <a href="https://leetcode.com/abhms/">
            <img
              className="icons icon_img"
              src="/leetcode.svg"
              alt="leetcode"
              width={"30px"}
            />
          </a>
        </span>
      </div>
      <div className="cert">
        <span className="cert_mern">
          <img
            className="mern_img"
            src="/MERN.jpg"
            // width={"1px"}
            alt="Full stack certificate"
          />
          <h4>
            Udemy Certificate of <strong>FULL STACK DEVELOPER</strong>
          </h4>
        </span>
        <span className="cert_jp">
          <img
            className="jp_img"
            src="/jp_morgan.jpg"
            // width={"1px"}
            alt="Jp Morgan certificate"
          />
          <h4>
            Internship in JPMorgan Chase & Co. Of{" "}
            <strong className="strong_jp">SOFTWARE ENGINEER VIRTUAL EXPERIENCE</strong>
          </h4>
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default Home;
