import React from 'react'
import illustrationImg from '../assets/media/Illustration.png'
// importing clients organiazations logos
import client1 from '../assets/media/client 1.svg';
import client2 from '../assets/media/client 2.svg';
import client3 from '../assets/media/client 3.svg';
import client4 from '../assets/media/client 4.svg';
import client5 from '../assets/media/client 5.svg';
import client6 from '../assets/media/client 6.svg';
import client7 from '../assets/media/client 7.svg';


export default function Home() {
  return (
    <section>
      <section className='bg-neutral-200 | Hero-Section padding-block-900'>
       <div className="container">
        <div className="even-colums">
          <div>
            <h1 className='fs-primary-heading fw-semi-bold'>Lessons and insights <span className='text-accent-100'>from 8 years</span> </h1>
            <p className='padding-block-400'>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button type="button" className='btn'>Register</button>
          </div>
          <div>
            <img src={illustrationImg} alt="" />
          </div>
        </div>
      </div>
      
      </section>
      {/* <!-- clients  --> */}
      <section className='clients-section'>
      <div className='container'>
        <div className='mx-auto'>
          <h2 className='fs-secondary-heading'>Our Clients</h2>
          <p >We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='clients-org'>
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
          <img src={client5} alt="" />
          <img src={client6} alt="" />
          <img src={client7} alt="" />
        </div>
      </div>
      </section>
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
