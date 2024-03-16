import React from 'react'

export default function Home() {
  return (
    <section>
    <div className="container">
      <div>
        <div className="even-columns">
          <div>
            <h1>Lessons and insights from 8 years</h1>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button type="button">Register</button>
          </div>
          <div>
            <img src="./src/assets/media/Illustration.png" alt="" />
          </div>
        </div>
        <div>
          {/* <!-- dots --> */}
        </div>
      </div>
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
    </div>
  </section>

  )
}
