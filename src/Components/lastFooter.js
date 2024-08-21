import React from "react";
import Facebook from "../Assets/facebook.png";
import Utube from "../Assets/utube.png";
import Gram from "../Assets/gram.png";
import LinkedIn from "../Assets/in.png";
import X from "../Assets/x.png";

const LastFooter = () => {
  return (
    <>
      <div className="lastFooter">
        <div>
          <p id="tc">© 2024 Truecaller AB</p>
        </div>
        <div>
          <p>
            Privacy <span></span> Terms of Service <span></span> Cookies{" "}
            <span></span> Responsible Disclosure <span></span> Directory{" "}
            <span></span> Publication certificate <span></span> Indian
            Government Services <span></span> Edit cookies <span></span> Code of
            Conduct
          </p>
        </div>
        <div className="images">
          <img src={Facebook} alt="facebook" />
          <img src={X} alt="x" />
          <img src={Gram} alt="instagram" />
          <img src={Utube} alt="youtube" />
          <img src={LinkedIn} alt="Linkedin" />
        </div>
      </div>
    </>
  );
};

export default LastFooter;
