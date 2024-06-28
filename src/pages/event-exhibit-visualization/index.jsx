/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MainLayout from '../../layouts/main';
import PageHeader from '../../components/Page-header';
import ProjectIntro from '../../components/Project-Intro';
import NextProject from '../../components/Next-Project';
import ProjectVideo from '../../components/Project-Video';
import Link from 'next/link';
import services3Data from '../../data/cv2.json';

const EventExhibitVisualization = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Event Exhibit Visualization"
        fullPath={[
          { id: 1, name: 'home', url: '/' },
          {
            id: 2,
            name: 'event exhibit visualization',
            url: '/event-exhibit-visualization',
          },
        ]}
        image="/assets/img/portfolio/project1/contact.jpg"
      />
      {/* <ProjectIntro /> */}
      <section className="intro-section section-padding pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="htit">
                <h4>introduction</h4>
              </div>
            </div>
            <div className="col-lg-8 offset-lg-1 col-md-8 mb-30">
              <div className="text">
                <p>
                  Event Exhibit Visualization revolutionizes your event planning
                  by providing detailed and interactive visualizations. Our
                  state-of-the-art technology ensures your event setup is
                  precisely represented, enhancing planning and execution for
                  unforgettable experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="projdtal">
        <div className="container">
          <div className="htit">
            <h4 className="pb-2">gallery</h4>
          </div>
          <div className="justified-gallery pb-5">
            <div className="row pb-2">
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
            </div>
            <div className="row">
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
              <a href="#" className="col-lg-4 col-xl-3 col-md-12">
                <img alt="" src="/assets/img/portfolio/project1/contact.jpg" />
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* <ProjectVideo /> */}

      {/* <section className="projdtal">
        <div className="justified-gallery">
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project1/8.jpg" />
          </a>
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project1/9.jpg" />
          </a>
        </div>
      </section> */}

      {/* <NextProject /> */}

      <section className="services-grid pb-5">
        <div className="container">
          <div className="htit pb-3">
            <h4>features</h4>
          </div>

          <div className="row justify-center">
            {services3Data.map((item, index) => (
              <div className="col-lg-4" key={item.id}>
                <div
                  className="item-bx bg-img wow fadeInUp"
                  data-wow-delay={
                    index == 0 ? '.3s' : index == 1 ? '.5s' : '.7s'
                  }
                >
                  <h6 className="mb-20">{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="works pb-140">
        <div className="container">
          <div className="htit">
            <h4>gallery</h4>
          </div>
          <div className="row gallery services-feature-work">
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/11.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/22.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/33.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/33.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/11.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/col/22.jpg" alt="" />
                </div>
                <div className="cont">
                  <h5>Modern Townhouse</h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EventExhibitVisualization;
