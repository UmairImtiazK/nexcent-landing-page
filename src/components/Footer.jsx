import React from "react";
//importing logo 
import right from '../assets/media/Right.svg';
import send from '../assets/media/send.svg';
import logo from '../assets/media/Logo.svg';

//importing social icons
import social1 from '../assets/media/Social Icons-1.svg';
import social2 from '../assets/media/Social Icons-2.svg';
import social3 from '../assets/media/Social Icons-3.svg';
import social4 from '../assets/media/Social Icons.svg';

export default function Footer() {
  return (
    <footer>
      <section className="demo-section | bg-neutral-200 margin-top-900 padding-block-600">
        <div className="container">
          <div className="demo-cont">
            <h1 className="fs-primary-heading fw-semi-bold text-center">
              Pellentesque suscipit <br /> fringilla libero eu.
            </h1>

            <button type="button" className="btn">
              Get a Demo <img src={right} alt="" />
            </button>
          </div>
        </div>
      </section>

      {/*  */}
      <section className="bg-regular-100 padding-block-700">
        <div className="container">
          <div className="footer-section">
            <div className="logo">
              <img src={logo} alt="" />
              <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
              <div>
                <img src={social1} alt="" />
                <img src={social2} alt="" />
                <img src={social3} alt="" />
                <img src={social4} alt="" />
              </div>
            </div>

            <div className="navigation">
              <div className="fst-nav">
                <h2>Company</h2>
                <nav>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Service</a>
                    </li>
                    <li>
                      <a href="#">Feature</a>
                    </li>
                    <li>
                      <a href="#">Product</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="lst-nav">
                <h2>Support</h2>
                <nav>
                  <ul>
                    <li>
                      <a href="#">Help center </a>
                    </li>
                    <li>
                      <a href="#">Terms of service </a>
                    </li>
                    <li>
                      <a href="#">Legal</a>
                    </li>
                    <li>
                      <a href="#">Privacy policy </a>
                    </li>
                    <li>
                      <a href="#">Status</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="form">
              <h3 className="fw-semi-bold">Stay up to date</h3>
              <div>
                <input
                  type="text"
                  placeholder="Your email address"
                />
                <img src={send} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
