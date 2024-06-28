import React from 'react';

const ContactInfo = () => {
  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="cont">
                <h6 className="custom-font">Call Us</h6>
                <p>+971526591299</p>
                <p>+923214418001</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item extra-pad">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">Email Us</h6>
                <p>info@rendersinc.com</p>
                {/* <p>username@website.com</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">Address</h6>
                <p>
                  E1 Block, Ghalib Rd, Block E1 Block E 1 Gulberg III, Lahore,
                  Punjab 54660
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
