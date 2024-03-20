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

// importing community icons
import community1 from '../assets/media/community 1.svg';
import community2 from '../assets/media/community 2.svg';
import community3 from '../assets/media/community 3.svg';

export default function Home() {
  return (
    <section>
      <section className='Hero-Section | bg-neutral-200 padding-block-900'>
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
      <section className='clients-section padding-block-600'>
      <div className='container'>
        <div>
          <h2 className='fs-secondary-heading fw-semi-bold text-center'>Our Clients</h2>
          <p className='text-center'>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className='clients-org padding-block-600'>
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
      <section >
      <div className='container'>
        <div className='community-section'>
        <div>
          <h2 className='fs-secondary-heading fw-semi-bold text-center'>Manage your entire community <br /> in a single system</h2>
          <p className='text-center padding-block-400'>Who is Nextcent suitable for?</p>
        </div>
        <div className='community-cont'>
          <div className='membeship-cont'>
            <div>
              <img src={community1} alt="" />
            </div>
            <h2 className='text-center fs-150 fw-bold'>Membership Organisations</h2>
            <p className='text-center'>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className='membeship-cont'>
            <div>
              <img src={community2} alt="" />
            </div>
            <h2 className='text-center fs-150 fw-bold'>National Associations</h2>
            <p className='text-center'>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className='membeship-cont'>
            <div>
              <img src={community3} alt="" />
            </div>
            <h2 className='text-center fs-150 fw-bold'>Clubs And Groups</h2>
            <p className='text-center'>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
      </div>
      </section>
      </section>
     

  )
}
