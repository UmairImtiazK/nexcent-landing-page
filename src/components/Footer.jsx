import React from 'react'

export default function Footer() {
  return (
    <footer>
        <section>
        <div className="container">
          <h1>Pellentesque suscipit fringilla libero eu.</h1>

          <button type="button" className='btn'>
            Get a Demo <img src="./src/assets/media/Right.svgs" alt="" />
          </button>
        </div>
      </section>
        <section>

      <div className="container">
        <div>
          <img src="./src/assets/media/Logo (2).svg" alt="" />
          <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
          <div>
            <img src="./src/assets/media/Social Icons-1.svg" alt="" />
            <img src="./src/assets/media/Social Icons-2.svg" alt="" />
            <img src="./src/assets/media/Social Icons-3.svg" alt="" />
            <img src="./src/assets/media/Social Icons.svg" alt="" />
          </div>
        </div>

        <div>
          <div>
            <h2>Company</h2>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Feature</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Testimonial</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </nav>
          </div>
          <div>
            <h2>Support</h2>
            <nav>
              <ul>
                <li><a href="#">Help center </a></li>
                <li><a href="#">Terms of service </a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Privacy policy </a></li>
                <li><a href="#">Status</a></li>
              </ul>
            </nav>
          </div>
        </div>

        <div>
          <h3>Stay up to date</h3>
          <div>
            <input
              type="text"
              placeholder="Your email address
            "
            />
            <img src="./src/assets/media/send.svg" alt="" />
          </div>
        </div>
      </div>
              </section>
    </footer>
  )
}
