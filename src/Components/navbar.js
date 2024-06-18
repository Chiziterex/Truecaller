import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <div>
          <p>truecaller</p>
          <ul>
            <li>
              <a
                href="https://www.truecaller.com/truecaller-for-android"
                target=""
              >
                Android app
              </a>
            </li>
            <li>
              <a href="https://www.truecaller.com/truecaller-for-ios" target="">
                iOS app
              </a>
            </li>
            <li>
              <a
                href="https://community.truecaller.com/?utm_source=WebMain&amp;utm_medium=TopNav"
                target="_blank"
              >
                Community
              </a>
            </li>
            <li>
              <a href="https://www.truecaller.com/premium" class="">
                Premium
              </a>
            </li>
            <li>
              <a
                href="https://business.truecaller.com/?utm_source=truecaller-app-website&amp;utm_medium=header-menu&amp;utm_campaign=main-site-header-menu-link"
                target="_blank"
              >
                Business
              </a>
            </li>
          </ul>
        </div>
        <div>
          <select>
            <option value="/">EN</option>
            <option value="/id-id">🇮🇩 Bahasa Indonesia</option>
            <option value="/ms-my">🇲🇾 Melayu</option>
            <option value="/vi-vn">🇻🇳 Tiếng Việt</option>
            <option value="/it-it">🇮🇹 Italiano</option>
            <option value="/es-la">🇨🇴 Español</option>
            <option value="/bn-in">🇮🇳 বাংলা</option>
            <option value="/fr-fr">🇫🇷 Française</option>
            <option value="/hi-in">🇮🇳 हिंदी</option>
            <option value="/sv-se">🇸🇪 Svenska</option>
            <option value="/pt-br">🇧🇷 Português Brasileiro</option>
            <option value="/ar-na">🇪🇬 عربي</option>
          </select>
          <span>
            <i></i>
            <p>sign in</p>
          </span>
          <button>
            <a
              className="btn"
              href="https://web.truecaller.com/linkdevice?utm_source=WebMain&amp;utm_medium=TopNav"
            >
              Truecaller for Web
            </a>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
