import React from "react";

const LatestArticles = () => {
  return (
    <>
      <div className="articles">
        <div className="content">
          <h3>See our latest articles</h3>
          <div className="box-container">
            <div className="box">
              <span className="top-text">
                <i className="dot red"></i>
                <p>Scam Alert</p>
              </span>
              <img
                src="https://images.prismic.io/tc-main/ZmFnsJm069VX1gEU_ScammersandTech-blog.jpg?w=800"
                alt="" className="img1"
              ></img>
              <div className="text-box">
                <h4>
                  How Scammers Are Using Technology to Up Their Game and...
                </h4>
                <span>
                  <p>Jun 6, 2024</p>
                  <p>.</p>
                  <p>3 min read</p>
                </span>
              </div>
            </div>

            <div className="box">
              <span className="top-text">
                <i className="dot green"></i>
                <p>Features</p>
              </span>
              <img
                src="https://images.prismic.io/tc-main/ZlmouKWtHYXtT9tg_BankScam-blog.jpg?w=800"
                alt="" className="img2"
              ></img>
              <div className="text-box">
                <h4>Are You Smarter Than A Phone Scammer? </h4>
                <span>
                  <p>May 31, 2024</p>
                  <p>.</p>

                  <p>3 min read</p>
                </span>
              </div>
            </div>

            <div className="box">
              <span className="top-text">
                <i className="dot green"></i>
                <p>Features</p>
              </span>
              <img
                src="https://images.prismic.io/tc-main/ZlcV9KWtHYXtT5Jk_AI-Call-Scanner_KV-blog.png?w=800"
                alt="" className="img3"
              ></img>
              <div className="text-box">
                <h4>
                  Say Hello to AI Call Scanner: Your Shield Against Scam Calls
                </h4>
                <span>
                  <p>May 29, 2024</p>
                  <p>.</p>
                  <p>3 min read</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestArticles;
