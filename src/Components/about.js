import React from "react";

const About = () => {
  return (
    <>
      <div className="about">
        <h3>What We Do</h3>
        <div className="box-container">
          <div className="box">
            <img src="https://www.truecaller.com/cms/56efefd4da30e9814f9e1de39fef0feb.avif" alt=""></img>
            <div className="writeup">
              <span>#1 trusted Caller ID app</span>
              <p>
                Trusted and used by over 400 million people to identify calls
                and SMS from around the world.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="https://www.truecaller.com/cms/5b3e44ef04a2635fbbf8acd3f89c0d98.avif" alt=""></img>
            <div className="writeup">
              <span>Community-based spam reporting</span>
              <p>
                Real-time spam reporting allows for accurate and quick
                protection from scams, telemarketer­s, fraud and more.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="https://www.truecaller.com/cms/f81f7e7c9d5a6e1334ff1f1708e4ed08.avif" alt=""></img>
            <div className="writeup">
              <span>Auto-block spam calls and SMS</span>
              <p>
                Stop spam in its tracks - or before it rings. You’ll never have
                to worry about another spammer getting through.
              </p>
            </div>
          </div>
          <div className="box">
            <img src="https://www.truecaller.com/cms/c8a78287e3a07421f9b3cabf628411d4.avif" alt=""></img>
            <div className="writeup">
              <span>Safe and efficient communicatio­n</span>
              <p>
                Choose a better way to communicate by letting Truecaller make
                smart choices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
