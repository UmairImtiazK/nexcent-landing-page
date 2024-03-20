import React from "react";
import rightIcon from "../assets/media/Right.svg";

//importing helping society icons
import helpingIcon1 from "../assets/media/helping 1.svg";
import helpingIcon2 from "../assets/media/helping 2.svg";
import helpingIcon3 from "../assets/media/helping 3.svg";
import helpingIcon4 from "../assets/media/helping 4.svg";

//imporitng image 
import panaImg from '../assets/media/pana.jpg';
import customerImg from '../assets/media/image 9.png';

export default function Body() {
  return (
    <section>
      <section className="padding-block-600">
        {/*  */}
        <div className="container">
          <div className="even-colums">
            <div>
              <img src="./src/assets/media/rafiki.png" alt="" />
            </div>
            <div className="cont">
              <h1 className="fs-secondary-heading fw-semi-bold fs-350">The unseen of spending three years at Pixelgrade</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
              <button type="button" className="btn">
                Learn More
              </button>
            </div>
          </div>
        </div>
        </section>
        {/*  */}
        <br />
        <section className="local-bussiness-section | bg-neutral-200 padding-block-600">
          <div className="container">
            <div className="even-colums">
              <div>
                <h1 className="fs-secondary-heading fw-semi-bold">
                  Helping a local <br />
                  <span className="text-accent-100">
                    business reinvent itself{" "}
                  </span>{" "}
                </h1>
                <p className="padding-block-400">
                  We reached here with our hard work and dedication
                </p>
              </div>
              <div className="bussiness-count">
                <div className="cont">
                  <img src={helpingIcon1} alt="" />
                  <h1 className="fs-secondary-heading fw-bold fs-secondary-heading fw-bold">
                    2,245,341
                  </h1>
                  <p>Members</p>
                </div>
                <div className="cont">
                  <img src={helpingIcon2} alt="" />
                  <h1 className="fs-secondary-heading fw-bold fs-secondary-heading fw-bold">
                    46,328
                  </h1>
                  <p>Clubs</p>
                </div>

                <div className="cont">
                  <img src={helpingIcon3} alt="" />
                  <h1 className="fs-secondary-heading fw-bold fs-secondary-heading fw-bold">
                    828,867
                  </h1>
                  <p>Event Bookings</p>
                </div>
                <div className="cont">
                  <img src={helpingIcon4} alt="" />
                  <h1 className="fs-secondary-heading fw-bold fs-secondary-heading fw-bold">
                    1,926,436
                  </h1>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        <section className="Design-section | padding-block-600">
          <div className="container">
        <div className="even-colums">
        <div>
            <img src={panaImg} alt="" />
          </div>
          <div>
            <h1 className="fs-secondary-heading fw-semi-bold">How to design your site footer like we did</h1>
            <p className="padding-block-400">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>

            <button type="button" className="btn">
              Learn More
            </button>
          </div>
          
        </div>
        </div>
        </section>
        {/*  */}

    <section className="customer-cont | padding-block-600  bg-neutral-200">
        <div className="container">
        <div className="even-colums">
          <div>
            <img src={customerImg} alt="" />
          </div>
          <div>
            <h1 className="fs-100 fw-regular-bold">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna
            </h1>
            <h3 className="fs-150 fw-regular-bold text-accent-100">Tim Smith</h3>
            <p >British Dragon Boat Racing Association</p>
            <div className="cust-logo | padding-block-400">
              <img src="./src/assets/media/customer 1.svg" alt="" />
              <img src="./src/assets/media/customer 2.svg" alt="" />
              <img src="./src/assets/media/customer 3.svg" alt="" />
              <img src="./src/assets/media/customer 4.svg" alt="" />
              <img src="./src/assets/media/customer 5.svg" alt="" />
              <img src="./src/assets/media/customer 6.svg" alt="" />
              <button type="button" className="btn btn-customer">
                Meet all customers
                <img src="./src/assets/media/Right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section >
        <div className="container">
          <div className="marketing-section | padding-block-900">
          <div>
            <h1 className="fs-secondary-heading fw-semi-bold text-center">Caring is the new marketing</h1>
            <p className="text-center">
              The Nexcent blog is the best place to read about the latest
              membership insights,<br /> trends and more. See who s joining the
              community, read about how our community <br /> are increasing their
              membership income and lot s more.
            </p>
          </div>
          <div className="marketing-cont | padding-block-400">
            <div className="marketing-sub-cont">
              <img src="./src/assets/media/image 19.png" alt="" />
              <div className="marketing-card">
                <h2  className="fs-100 fw-regular-bold text-accent-100 text-center">Creating Streamlined Safeguarding Processes with OneRen</h2>
                <button type="button" className="btn btn-customer text-center">
                  Readmore <img src={rightIcon} alt="" />
                </button>
              </div>
            </div>

            <div className="marketing-sub-cont">
              <img src="./src/assets/media/image 20.png" alt="" />
              <div className="marketing-card">
                <h2 className="fs-100 fw-regular-bold text-accent-100 text-center">
                  What are your safeguarding responsibilities and how can you
                  manage them?
                </h2>
                <button type="button" className="btn btn-customer text-center">
                  Readmore <img src={rightIcon} alt="" />
                </button>
              </div>
            </div>
            <div className="marketing-sub-cont">
              <img src="./src/assets/media/image 19.png" alt="" />
              <div className="marketing-card">
                <h2 className="fs-100 fw-regular-bold text-accent-100 text-center">Revamping the Membership Model with Triathlon Australia</h2>
                <button type="button" className="btn btn-customer text-center">
                  Readmore <img src={rightIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      
    </section>
  );
}
