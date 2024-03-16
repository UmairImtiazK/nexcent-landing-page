import React from 'react'
import rightIcon from '../assets/media/Right.svg'

export default function Body() {
  return (
    <section>
        
    <section>
    <div className="container">
      {/*  */}
      <div className="even-colums">
        <div><img src="./src/assets/media/rafiki.png" alt="" /></div>
        <div>
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium
            auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
            sem. Donec elementum pulvinar odio.
          </p>
          <button type="button" className='btn'>Learn More</button>
        </div>
      </div>

      {/*  */}

      <div className="even-colums">
        <div>
          <h1>Helping a local business reinvent itself</h1>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div>
          <div>
            <img src="./src/assets/media/helping 1.svg" alt="" />
            <h1>2,245,341</h1>
            <p>Members</p>
          </div>
          <div>
            <img src="./src/assets/media/helping 2.svg" alt="" />
            <h1>46,328</h1>
            <p>Clubs</p>
          </div>

          <div>
            <img src="./src/assets/media/helping 3.svg" alt="" />
            <h1>828,867</h1>
            <p>Event Bookings</p>
          </div>
          <div>
            <img src="./src/assets/media/helping 4.svg" alt="" />
            <h1>1,926,436</h1>
            <p>Payments</p>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="even-coulms">
        <div>
          <img src="./src/assets/media/rafiki.png" alt="" />
        </div>
        <div>
          <h1>How to design your site footer like we did</h1>
          <p>
            Donec a eros justo. Fusce egestas tristique ultrices. Nam
            tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
            scelerisque elit erat a magna. Donec quis erat at libero
            ultrices mollis. In hac habitasse platea dictumst. Vivamus
            vehicula leo dui, at porta nisi facilisis finibus. In euismod
            augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
            in nisi eget nulla commodo faucibus efficitur quis massa.
            Praesent felis est, finibus et nisi ac, hendrerit venenatis
            libero. Donec consectetur faucibus ipsum id gravida.
          </p>

          <button type="button" className='btn'>Learn More</button>
        </div>
      </div>

      {/*  */}

      <div className="even-colums">
        <div>
          <img src="./src/assets/media/image 9.png" alt="" />
        </div>
        <div>
          <h1>
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
            eu enim metus. Vivamus sed libero ornare, tristique quam in,
            gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
            laoreet elit at ligula molestie, nec molestie mi blandit.
            Suspendisse cursus tellus sed augue ultrices, quis tristique
            nulla sodales. Suspendisse eget lorem eu turpis vestibulum
            pretium. Suspendisse potenti. Quisque malesuada enim sapien,
            vitae placerat ante feugiat eget. Quisque vulputate odio neque,
            eget efficitur libero condimentum id. Curabitur id nibh id sem
            dignissim finibus ac sit amet magna
          </h1>
          <h3>Tim Smith</h3>
          <p>British Dragon Boat Racing Association</p>
          <div>
            <img src="./src/assets/media/customer 1.svg" alt="" />
            <img src="./src/assets/media/customer 2.svg" alt="" />
            <img src="./src/assets/media/customer 3.svg" alt="" />
            <img src="./src/assets/media/customer 4.svg" alt="" />
            <img src="./src/assets/media/customer 5.svg" alt="" />
            <img src="./src/assets/media/customer 6.svg" alt="" />
            <button type="button" className='btn btn-customer'>
              Meet all customers
              <img src="./src/assets/media/Right.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

<section>
<div className="container">
  <div>
    <h1>Caring is the new marketing</h1>
    <p>
      The Nexcent blog is the best place to read about the latest
      membership insights, trends and more. See who s joining the
      community, read about how our community are increasing their
      membership income and lot s more.
    </p>
  </div>
  <div>
    <div>
      <img src="./src/assets/media/image 19.png" alt="" />
      <div>
        <h1>Creating Streamlined Safeguarding Processes with OneRen</h1>
        <button type="button" className='btn btn-customer'>
          Readmore <img src={rightIcon} alt="" />
        </button>
      </div>
    </div>

    <div>
      <img src="./src/assets/media/image 20.png" alt="" />
      <div>
        <h1>
          What are your safeguarding responsibilities and how can you
          manage them?
        </h1>
        <button type="button" className='btn btn-customer'>
          Readmore <img src={rightIcon} alt="" />
        </button>
      </div>
    </div>
    <div>
      <img src="./src/assets/media/image 19.png" alt="" />
      <div>
        <h1>Revamping the Membership Model with Triathlon Australia</h1>
        <button type="button" className='btn btn-customer'>
          Readmore <img src={rightIcon} alt="" />
        </button>
      </div>
    </div>
  </div>
</div>
</section>
    </section>
  )
}
