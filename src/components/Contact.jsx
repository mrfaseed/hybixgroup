import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Contact.css'
import emailAnimation from '../assets/Email.lottie';

const Contact = () => {
  return (
    <div className="contact_us_green">
      <div className="responsive-container-block big-container">
        <div className="responsive-container-block container">

          {/* LEFT SIDE FORM */}
          <div
            className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-10 line"
            id="i69b-2"
          >
            <form className="form-box">
              <div className="container-block form-wrapper">
                <div className="head-text-box">
                  <p className="text-blk-contactus-head">Contact us</p>
                </div>

                <div className="responsive-container-block">
                  <div
                    className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt-6"
                  >
                    <p className="text-blk input-title">FIRST NAME</p>
                    <input className="input" id="ijowk-6" name="FirstName" />
                  </div>

                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">LAST NAME</p>
                    <input className="input" id="indfi-4" name="LastName" />
                  </div>

                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">EMAIL</p>
                    <input className="input" id="ipmgh-6" name="Email" />
                  </div>

                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <p className="text-blk input-title">PHONE NUMBER</p>
                    <input className="input" id="imgis-5" name="PhoneNumber" />
                  </div>

                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i-6"
                  >
                    <p className="text-blk input-title">
                      WHAT DO YOU HAVE IN MIND
                    </p>
                    <textarea
                      className="textinput"
                      id="i5vyy-6"
                      placeholder="Please enter query..."
                    ></textarea>
                  </div>
                </div>

                <div className="btn-wrapper">
                  <button className="submit-btn">Submit</button>
                </div>
              </div>
            </form>
          </div>

          {/* RIGHT SIDE INFO */}
          <div
            className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-6 wk-ipadp-10"
            id="ifgi"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <DotLottieReact
              src={emailAnimation}
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
