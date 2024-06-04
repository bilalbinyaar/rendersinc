/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Team2 from '../../components/Team2';
import Video from '../../components/Video';
import MainLayout from '../../layouts/main';
import Blogs4 from '../../components/Blogs4';
import Intro4 from '../../components/Intro4';
import AboutUs6 from '../../components/About-Us6';
import Services3 from '../../components/Services3';
import Portfolio2 from '../../components/Portfolio2';
import Testimonials1 from '../../components/Testimonials1';
import IntroWithHorizontal from '../../components/Intro-with-horizontal';
import Brands from '../../components/Brands';
import Head from 'next/head';
import Link from 'next/link';

const Home5 = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);
  return (
    <MainLayout>
      <Head>
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <style jsx>{`
        .works-header {
          min-height: 85vh;
          position: relative;
        }

        .works-header:after {
          content: '';
          position: absolute;
          top: 50px;
          left: 50px;
          right: 50px;
          bottom: 50px;
          background: #000;
          opacity: 0.4;
        }

        .works-header:before {
          background: #000;
        }
      `}</style>
      {/* <Intro4 /> */}
      <IntroWithHorizontal />
      <AboutUs6 />
      <Services3 bigTitle grid />
      <Portfolio2 />

      <Video />
      {/* <Team2 /> */}
      {/* <Testimonials1 withBg />  */}

      <Testimonials1 bigTitle />
      {/* <header
        className="works-header fixed-slider hfixd valign bg-img"
        data-background=""
        style={{ backgroundImage: 'url(/assets/img/pg2.jpg)' }}
        data-overlay-dark="6"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 static text-center">
              <div className="capt mt-50">
                <div className="parlx">
                  <h1 className="mb-10">
                    Start your journey with Renders Inc.
                  </h1>
                  <p className="ls10 text-u">
                    We use state-of-the-art technology and software to create
                    realistic 3D models, animations and virtual reality
                    experiences that actually represent stakeholder’s vision.
                  </p> 
                  <Link href="#">
                    <a className="btn-curve btn-bord btn-lit mt-30">
                      <span>Book Meeting</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      {/* <Blogs4 /> */}
    </MainLayout>
  );
};

export default Home5;
