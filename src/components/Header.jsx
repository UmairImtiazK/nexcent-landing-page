import React, { useState, useEffect } from "react";
import humbglerIcon from "../assets/media/icon-hamburger.svg";
import closeIcon from "../assets/media/icon-close.svg";

export default function Header() {
  const [toggle, settoggel] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = () => {
    settoggel(!toggle);
  };
  return (
    <header className="bg-neutral-200 fs-50 fw-regular-bold">
      <div className="container">
        <section className="nav-bar | text-regular-100">
          <div>
            <a href="#">
              <img
                src="./src/assets/media/Logo (2).svg"
                alt="logo of Website"
              />
            </a>
          </div>
          { windowWidth <= 1200 && (
            <nav className={ toggle? 'sm-only': 'lrg-only' }>
              <ul>
                <li>
                  <a href="#" data-type="visible">
                    Home
                  </a>
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
          )}

          <div className="Buttons--Container">
            <button type="button" className="text-accent-100 bg-neutral-200">
              Login
            </button>
            <button status="active" type="button" className="bg-accent-100">
              Sign up
            </button>
            {windowWidth <= 1200 && (
              <button
                onClick={handleClick}
                type="button"
                className="nav-toggle | bg-neutral-200"
              >
                <img src={!toggle ? humbglerIcon : closeIcon} alt="" />
              </button>
            )}
          </div>
        </section>
      </div>
    </header>
  );
}