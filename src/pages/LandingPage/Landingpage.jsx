import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import "./landingPage.scss";
import hero from "../../Assets/hero.png";
import whywe from "../../Assets/whywe.png";
import singleUser from "../../Assets/single.png";
import multipalUser from "../../Assets/multipal.png";
import extraMultipalUser from "../../Assets/extramul.png";
import myfortunelogo from "../../Assets/myfortunelogo.png";
import { Link } from "react-router-dom";
const Landingpage = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="main">
        <nav>
          <img className="logo" src={myfortunelogo}/>
          <input
            type="checkbox"
            id="menu"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="menu" className="menu-btn">
            <HiMenu className="menu-btn" />
          </label>
          <ul>
            <li>
              <a href="#hero" onClick={handleCheckboxChange}>
                Home
              </a>
            </li>
            <li>
              <a href="#whywe" onClick={handleCheckboxChange}>
                WhyWe
              </a>
            </li>
            <li>
              <a href="#pricing" onClick={handleCheckboxChange}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={handleCheckboxChange}>
                Testimonial
              </a>
            </li>
            <li>
              <Link to="/signin">
                <a className="signin">SignIn </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div id="hero">
        <h1 className="heading">Embark on your journey to financial prosperity</h1>
        <div className="subheading">
          <p>
            Premier wealth management service dedicated to more than just monetary growth; it's about empowering
            <br /> our clients to build confidence and security for their future
          </p>
          <Link to="/signin">
            <button className="hero-signin">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="signup">Register Now</button>
          </Link>
        </div>
        <img src={hero} alt="Hero" />
      </div>
      <section id="whywe">
        <div className="rightSide">
          <h1 className="heading">Why Choose Us?</h1>
          <ul>
            <li>
              Our wealth management services assist investors in strategically and systematically building their wealth.
            </li>
            <li>
              Our skilled wealth managers understand client requirements and financial goals.
            </li>
            <li>
              Utilize our Expense Manager to create a clear monthly budget once you are aware of your spending habits.
            </li>
            <li>
              Request a personalized report on your spending & expenses to closely monitor your everyday finances.
            </li>
          </ul>
        </div>
        <div className="leftSide">
          <img src={whywe} alt="whywe" />
        </div>
      </section>
      <section id="pricing">
        <h1 className="heading">Our Free Plan includes individual access for free</h1>
        <p className="subheding">
          No credit card required, sign up today using UPI.
        </p>
        <div className="plans">
          <div className="hoverplan">
            <div className="plan">
              <img src={singleUser} alt="" />
              <p className="text1">PLUS</p>
              <p className="text2">For individual</p>
              <p className="text3">Free</p>
              <ul>
                <li>For one user only</li>
                <li>Upload files less than 5 MB</li>
                <li>Accepts multiple payment options</li>
              </ul>
            </div>
          </div>
          <div className="hoverplan">
            <div className="plan">
              <img src={multipalUser} alt="" />
              <p className="text1">PREMIUM</p>
              <p className="text2">For 10 People</p>
              <p className="text3">$30</p>
              <ul>
                <li>For one user only</li>
                <li>Upload files less than 5 MB</li>
                <li>Accepts multiple payment options</li>
              </ul>
            </div>
          </div>
          <div className="hoverplan">
            <div className="plan">
              <img src={extraMultipalUser} alt="" />
              <p className="text1">TEAM</p>
              <p className="text2">For individual</p>
              <p className="text3">Custom pricing</p>
              <ul>
                <li>For one user only</li>
                <li>Upload files less than 5 MB</li>
                <li>Accepts multiple payment options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <h1>What Our Users Say</h1>
        <p>Explore the experiences of our users</p>

        <div className="slide-container">
          <div className="slide">
            <h3>Jane Doe</h3>
            <p>
              "The best wealth management app that helps you track fixed assets expenses and income sources. Highly recommended."
            </p>
          </div>
          <div className="slide">
            <h3>Amit Patel</h3>
            <p>
              "The goal of wealth management is to help you achieve financial security and grow and protect your wealth."
            </p>
          </div>
          <div className="slide">
            <h3>Deepika Sharma</h3>
            <p>
              "Thanks to this app, I can track all expenses efficiently. It's excellent for managing expenses and income. I highly recommend MyFortune."
            </p>
          </div>
          <div className="slide">
            <h3>Raj Kumar</h3>
            <p>
              "An outstanding app! I am pleased with how it manages wealth and provides a breakdown of income and expenses. The best I've ever seen."
            </p>
          </div>
        </div>
      </section>
      </div>
      <section id="footer">
        <div className="copyright">
          <h1>MyFortune</h1>
          <p>© Copyright 2024, All Rights Reserved | MyFortune</p>
        </div>
        <div className="features">
          <h1>Explore Our Features</h1>
          <p>Wealth Management</p>
          <p>Accelerate Your Wealth Growth</p>
        </div>
        <div className="company">
          <h1>Our Company</h1>
          <p>
            <a href="">About Us</a>
          </p>
          <p>
            <a href="">Contact Us</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Landingpage;
