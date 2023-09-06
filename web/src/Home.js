import React from "react";
import "./index.css";
import imageSrc from "./images/DEEM BLACK BACKGROUNG.png";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="container">
      <div className="centered-content">
        <h2>Deen Khaalis Da'wah</h2>
        <p>
          29 Mar 2022 — render has been deprecated in React 18 and replaced with
          a new root API using createRoot . The root of your app is the
          top-level DOM element ... 15 answersTop answer:In your file index.js,
          change to: import React from "react"; import ReactDOM from
          "react-dom/client ... Warning:: ReactDOM.render is no longer supported
          in React ...1 Apr 2022 "ReactDOM.render is no longer supported in
          React 18" doesn ... 27 Aug 2022React Testing Library gives console
          error for ReactDOM ...31 Mar 2022 ReactDOM.render is no longer
          supported in React 18 4 Nov 2022 More results from stackoverflow.com
          People also ask How do I replace ReactDOM render with createRoot? Why
          ReactDOM render is no longer supported? How to downgrade React version
          18 to 17?How do I switch to React 18?
        </p>
      </div>
      ;{/* Animated Image */}
      <div className="image-container">
        <motion.img
          src={imageSrc}
          alt="logo"
          //initial={{ x: -1000 }} // Initial position off-screen to the left
          animate={{ x: 500 }} // Animation target position (center)
          transition={{ duration: 0.5, ease: "easeInOut" }} // Animation duration and easing
        />
      </div>
      {/* Advertisement Section */}
      <div className="ad-section">
        <h3>New Admissions Open!</h3>
        <p>Apply now for exciting opportunities.</p>
        <a href="https://forms.gle/wmAF5RA1y1UK4Spk8" target="_blank">
          Register Now
        </a>
      </div>
    </div>
  );
};

export default Home;
