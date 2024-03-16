import React from 'react'
import illustrationImg from '../assets/media/Illustration.png'

export default function Home() {
  return (
    <section>
      <section className='bg-neutral-200 | Hero-Section'>
       <div className="container">
        <div className="even-colums">
          <div>
            <h1 className='text-regular-100 fs-primary-heading'>Lessons and insights <span>from 8 years</span> </h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button type="button" className='btn'>Register</button>
          </div>
          <div>
            <img src={illustrationImg} alt="" />
          </div>
        </div>
        <div>
          {/* <!-- dots --> */}
        </div>
      </div>
      
      </section>
      {/* <!-- clients  --> */}
      <div>
        <div>
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div>
          <img src="./src/assets/media/client 1.svg" alt="" />
          <img src="./src/assets/media/client 2.svg" alt="" />
          <img src="./src/assets/media/client 3.svg" alt="" />
          <img src="./src/assets/media/client 4.svg" alt="" />
          <img src="./src/assets/media/client 5.svg" alt="" />
          <img src="./src/assets/media/client 6.svg" alt="" />
          <img src="./src/assets/media/client 7.svg" alt="" />
        </div>
      </div>

      {/* <!-- Comunity --> */}
      <div>
        <div>
          <h2>Manage your entire community in a single system</h2>
          <p>Who is Nextcent suitable for?</p>
        </div>
        <div>
          <div>
            <div>
              <img src="./src/assets/media/community 1.svg" alt="" />
            </div>
            <h2>Membership Organisations</h2>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div>
            <div>
              <img src="./src/assets/media/community 2.svg" alt="" />
            </div>
            <h2>National Associations</h2>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div>
            <div>
              <img src="./src/assets/media/community 3.svg" alt="" />
            </div>
            <h2>Clubs And Groups</h2>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
      </section>
     

  )
}
