import React from "react";
import "./intro.css";
import bg from "../../assets/bg.jpeg";
import { Link } from 'react-scroll';
import btnimg from "../../assets/btnimg.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hi there,</span>
        <span className="introText">
          I'm <span className="introName">Niharika Chaturvedi</span>,
          <br />
          <span className="role">Software Engineer</span>
        </span>
        <p className="introPara">
          A passionate developer eager to craft impactful digital experiences. Always exploring, learning, and pushing boundaries through innovative code and elegant design.
        </p>
        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnimg} alt="Hire" className="btnimg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
