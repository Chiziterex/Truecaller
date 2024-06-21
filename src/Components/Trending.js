import React from "react";

const Trending = () => {
  return (
    <>
      <div className="trending">
        <img
          src="https://www.truecaller.com/cms/3389890b34df1cf823f41db4f3312f72.avif"
          alt="Truecaller for web"
        ></img>
        <div className="text-box">
          <p id="head-text">Trending</p>
          <h3>
            Introducing Truecaller for Web<span id="dot">.</span>
          </h3>
          <p id="details-text">
            Experience a new way of texting with Truecaller on your desktop.
            Getting started is as easy as scanning a QR code. With just a few
            clicks, you'll be up and running
          </p>
          <a className="btn">set it up now</a>
        </div>
      </div>
      <div className="iphone trending">
        <div className="text-box">
          <p id="head-text">iphone</p>
          <h3>
            Caller ID on iPhone is now 10x better<span id="dot">.</span>
          </h3>
          <p id="details-text">
            Truecaller's iPhone app has been completely re-written from the
            ground up to be lighter, more efficient, but most important of all,
            10 times better spam, scam and business call identificati­on
            compared to previous versions of the app.
          </p>
          <a className="btn">Learn more</a>
        </div>
        <img
          src="https://www.truecaller.com/cms/8dff8bb7f1cd44125c0f168784535245.avif"
          alt="illustration that represents truecaller and its features"
        ></img>
      </div>

      <div className="impact trending">
        <img
          src="https://www.truecaller.com/cms/2955cad945b7f22620739d4bfba791c8.avif"
          alt="man sitting and texting"
        ></img>
        <div className="text-box">
          <p id="head-text">impact</p>
          <h3>
            Making an Impact through Truecaller<span id="dot">.</span>
          </h3>
          <p id="details-text">
            Truecaller's iPhone app has been completely re-written from the
            ground up to be lighter, more efficient, but most important of all,
            10 times better spam, scam and business call identificati­on
            compared to previous versions of the app.
          </p>
          <a className="btn">Read more</a>
        </div>
      </div>
    </>
  );
};

export default Trending;
