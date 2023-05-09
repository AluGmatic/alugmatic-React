import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>alugmatic</title>
        <meta property="og:title" content="alugmatic" />
      </Helmet>
      <div className="home-container1">
        <div className="home-container2">
          <div className="home-container3">
            <img
              alt="image"
              src="/playground_assets/564619-200h.png"
              className="home-image"
            />
            <span className="home-text">
              Hello there! I&apos;m glad you came here to check out my website.
              Unfortunately, this is just a hastily put together temporary
              website. I am currently working on an official one. I don&apos;t
              know when it&apos;ll be ready, so just enjoy the imposter one.
              Also, the phone version is bricked, good luck.
            </span>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <div className="home-container6">
              <h1 className="home-text01">
                <span>AluGmatic</span>
                <br></br>
              </h1>
              <span className="home-text04">aka SolidSnail</span>
              <span className="home-text05">
                <span>
                  Hello there! I am AluGmatic, but you may know me from
                  LazerPigs server, as SolidSnail or Alu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <span className="home-text08">
                <span>
                  Yes, I am that retard that drew a bunch of Among Us art and LP
                  server Mods as soyjacks. And yes, I am also the one that keeps
                  trying to get that #Vore-Channel. If you want the vore lore,
                  check out the links on the right.
                </span>
                <br></br>
              </span>
              <span className="home-text11">
                <span>
                  On a more serious note. I am a semi-professional artist, that
                  got stuck working as a freelancer in an advertisement agency.
                  I have recently ditched that god awful job and decided that I
                  want to start earning money solely on the Internet. For those
                  that are interested, I now take commissions! And this time it
                  won&apos;t take me a year to finish them! I really appreciate
                  the support I&apos;ve gotten so far. Thanks to you, I can
                  start working without stress from home and also on my personal
                  projects in my free time. Thank you again for coming here and
                  big thank you, if you decided to financially support me.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>I really appreciate it.</span>
              </span>
            </div>
          </div>
          <div className="home-container7">
            <div className="home-container8">
              <Link to="/me" className="home-navlink button">
                Me, QnA and Commissions
              </Link>
              <Link to="/my-art" className="home-navlink1 button">
                Art, sus Art and more Art
              </Link>
              <button className="home-button button">I beg you, feed me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
