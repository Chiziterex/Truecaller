import React from "react";

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="text-box">
          <p id="head-text">Features</p>
          <h3>Trust your communicatio­n with Truecaller<span id="dot">.</span></h3>
          <p id="details-text">
            Truecaller is proud to be a leader in caller ID and spam blocking
            software as well as research around call and SMS harassment.
          </p>
          <div className="box-container">
            <div className="box">
              <img src="https://www.truecaller.com/cms/9f8acff5-ada3-43e4-9dbe-46c7d1c4f3e7_feature-icon-caller-id.svg" alt=""></img>
              <span className="text">
                <div>
                  <p id="top">Caller ID</p>
                  <p> Identify incoming calls from unknown numbers</p>
                </div>
                <i></i>
              </span>
            </div>
            <div className="box">
              <img src="https://www.truecaller.com/cms/2bde4dd3-59b0-49dd-9d4f-e7298163aabe_feature-icon-spam.svg" alt=""></img>
              <span className="text">
                <p id="top">Spam Blocking</p>
                <p>Block numbers</p>
              </span>
            </div>
            <div className="box">
              <img src="https://www.truecaller.com/cms/b921f9b4-7160-437a-a706-df781292b276_feature-icon-inbox.svg" alt=""></img>
              <span className="text">
                <p id="top">SMS Fraud Protection</p>
                <p>Stay safe from fraud SMS and links</p>
              </span>
            </div>
            <div className="box">
              <img src="https://www.truecaller.com/cms/4795ec4a-5234-4da7-a75a-837a65c725f8_feature-icon-chat.svg" alt=""></img>
              <span className="text">
                <p id="top">Messaging</p>
                <p>No need to switch to other apps</p>
              </span>
            </div>
          </div>
          <span className="lastParagraph"><p>See all features</p><i>d</i></span>
        </div>
        <div className="image-box">
          <img
            src="https://www.truecaller.com/cms/4340740c01a347e7bfd9488ea9aac81a.avif"
            alt=""
          ></img>
        </div>
       
      </div>
    </>
  );
};

export default Features;
