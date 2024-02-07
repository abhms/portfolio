import React from "react";

const Home = () => {
  return (
    <div className="max-w-screen-xl flex flex-col md:flex-row items-center justify-between mx-auto">
      <div className="intro">
        <h1 className="hey-there">Hey There,</h1>
        <h2 className="name">I'm Abhishek Mishra</h2>
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
