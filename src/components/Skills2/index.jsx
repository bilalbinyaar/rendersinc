import React from 'react';
import skillsProgress from '../../common/skillsProgress';
const Skills2 = () => {
  React.useEffect(() => {
    skillsProgress();
  }, []);
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6>Architecture</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>Interior Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="75%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6>3D Modeling</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="80%"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <h4 className="playfont line-height-50 mb-20">
                Delivering Tailored Design Solutions to Perfectly Fit Every
                Space
              </h4>
              <p className="mb-10">
                Our expert team specializes in delivering tailored design
                solutions that perfectly fit every space. We combine creativity
                with precision to ensure each project reflects your unique style
                and needs.
              </p>
              <p>
                Whether it&apos;s a commercial or residential space, we bring
                your vision to life with impeccable detail and craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;
