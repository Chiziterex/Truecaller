import React from "react";

const Download = () => {
  return (
    <>
      <div className="download trending">
        <img
          src="https://www.truecaller.com/cms/85e363473f8c26721ecd461f79ac3630.avif"
          alt=""
        ></img>
        <div className="text-box">
          <p id="head-text">DOWNLOAD TODAY</p>
          <h3>
            Trust your communicatio­n with Truecaller<span id="dot">.</span>
          </h3>
          <p id="details-text">
            Trusted by over 400 million people, Truecaller is proud to be a
            leader in caller ID and spam blocking software as well as research
            around call and SMS harassment.
          </p>
          <div id="scnd-base">
            <div id="dwnload-tc">
              <img
                src="https://www.truecaller.com/cms/0a2587cdca1b28311c5d067ff7bb701c.avif"
                alt=""
              ></img>
              <p>Download Truecaller</p>
            </div>

            <div className="btnLike-content-parent-div">
              <div class="btnLike-content">
                <img
                  src="https://www.truecaller.com/cms/9e77fdb0-c5f5-4542-9048-1e7f2376fff7_play-store.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <div>
                  <p>Play Store</p>
                  <span>
                    <p>4.5</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                </div>
              </div>

              <div className="btnLike-content">
                <img
                  src="https://www.truecaller.com/cms/04995630-435d-409c-9797-fafb76b92f54_app_store_28ios29.svg"
                  alt=""
                  width="20px"
                  height="20px"
                />
                <div>
                  <p>App Store</p>
                  <span>
                    <p>4.5</p>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Download;
