import React from "react";
import Navbar from "./navbar";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="backdrop-color">
          <Navbar />
          <main>
            <h1>
              The World’s Best <br />
              Caller ID and Spam <br />
              Blocking App
            </h1>
            <div id="scnd-base">
              <div id="dwnload-tc">
                <img src="https://www.truecaller.com/cms/0a2587cdca1b28311c5d067ff7bb701c.avif" alt=""></img>
                <p>Download Truecaller</p>
              </div>

              <div className="btnLike-content-parent-div">
              <div class="btnLike-content">
                <img src="https://www.truecaller.com/cms/9e77fdb0-c5f5-4542-9048-1e7f2376fff7_play-store.svg" alt="" width="20px" height="20px" />
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
                <img src="https://www.truecaller.com/cms/04995630-435d-409c-9797-fafb76b92f54_app_store_28ios29.svg" alt="" width="20px" height="20px" />
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
            <div id="input">
              <select>
                <option value="ng">+234</option>
                <option value="af">Afghanistan (+93)</option>
                <option value="al">Albania (+355)</option>
                <option value="dz">Algeria (+213)</option>
                <option value="as">American Samoa (+1684)</option>
                <option value="ad">Andorra (+376)</option>
                <option value="ao">Angola (+244)</option>
                <option value="ai">Anguilla (+1264)</option>
                <option value="ag">Antigua &amp; Barbuda (+1268)</option>
                <option value="ar">Argentina (+54)</option>
                <option value="am">Armenia (+374)</option>
                <option value="aw">Aruba (+297)</option>
                <option value="au">Australia (+61)</option>
                <option value="at">Austria (+43)</option>
                <option value="az">Azerbaijan (+994)</option>
                <option value="bs">Bahamas (+1242)</option>
                <option value="bh">Bahrain (+973)</option>
                <option value="bd">Bangladesh (+880)</option>
                <option value="bb">Barbados (+1246)</option>
                <option value="by">Belarus (+375)</option>
                <option value="be">Belgium (+32)</option>
                <option value="bz">Belize (+501)</option>
                <option value="bj">Benin (+229)</option>
                <option value="bm">Bermuda (+1441)</option>
                <option value="bt">Bhutan (+975)</option>
                <option value="bo">Bolivia (+591)</option>
                <option value="ba">Bosnia &amp; Herzegovina (+387)</option>
                <option value="bw">Botswana (+267)</option>
                <option value="br">Brazil (+55)</option>
                <option value="io">
                  British Indian Ocean Territory (+246)
                </option>
                <option value="vg">British Virgin Islands (+1284)</option>
                <option value="bn">Brunei (+673)</option>
                <option value="bg">Bulgaria (+359)</option>
                <option value="bf">Burkina Faso (+226)</option>
                <option value="mm">Myanmar (Burma) (+95)</option>
                <option value="bi">Burundi (+257)</option>
                <option value="kh">Cambodia (+855)</option>
                <option value="cm">Cameroon (+237)</option>
                <option value="ca">Canada (+1)</option>
                <option value="cv">Cape Verde (+238)</option>
                <option value="ky">Cayman Islands (+1345)</option>
                <option value="cf">Central African Republic (+236)</option>
                <option value="td">Chad (+235)</option>
                <option value="cl">Chile (+56)</option>
                <option value="cn">China (+86)</option>
                <option value="cx">Christmas Island (+6189)</option>
                <option value="co">Colombia (+57)</option>
                <option value="km">Comoros (+269)</option>
                <option value="cg">Congo - Brazzaville (+242)</option>
                <option value="cd">Congo - Kinshasa (+243)</option>
                <option value="ck">Cook Islands (+682)</option>
                <option value="cr">Costa Rica (+506)</option>
                <option value="hr">Croatia (+385)</option>
                <option value="cu">Cuba (+53)</option>
                <option value="cy">Cyprus (+357)</option>
                <option value="cz">Czechia (+420)</option>
                <option value="dk">Denmark (+45)</option>
                <option value="dj">Djibouti (+253)</option>
                <option value="dm">Dominica (+1767)</option>
                <option value="do">Dominican Republic (+1849)</option>
                <option value="do">Dominican Republic (+1829)</option>
                <option value="do">Dominican Republic (+1809)</option>
                <option value="tl">Timor-Leste (+670)</option>
                <option value="ec">Ecuador (+593)</option>
                <option value="eg">Egypt (+20)</option>
                <option value="sv">El Salvador (+503)</option>
                <option value="gq">Equatorial Guinea (+240)</option>
                <option value="er">Eritrea (+291)</option>
                <option value="ee">Estonia (+372)</option>
                <option value="et">Ethiopia (+251)</option>
                <option value="fo">Faroe Islands (+298)</option>
                <option value="fj">Fiji (+679)</option>
                <option value="fi">Finland (+358)</option>
                <option value="fr">France (+33)</option>
                <option value="gf">French Guiana (+594)</option>
                <option value="pf">French Polynesia (+689)</option>
                <option value="ga">Gabon (+241)</option>
                <option value="gm">Gambia (+220)</option>
                <option value="ge">Georgia (+995)</option>
                <option value="de">Germany (+49)</option>
                <option value="gh">Ghana (+233)</option>
                <option value="gi">Gibraltar (+350)</option>
                <option value="gr">Greece (+30)</option>
                <option value="gl">Greenland (+299)</option>
                <option value="gd">Grenada (+1473)</option>
                <option value="gp">Guadeloupe (+590)</option>
                <option value="gu">Guam (+1671)</option>
                <option value="gt">Guatemala (+502)</option>
                <option value="gn">Guinea (+224)</option>
                <option value="gw">Guinea-Bissau (+245)</option>
                <option value="gy">Guyana (+592)</option>
                <option value="ht">Haiti (+509)</option>
                <option value="hn">Honduras (+504)</option>
                <option value="hk">Hong Kong (+852)</option>
                <option value="hu">Hungary (+36)</option>
                <option value="is">Iceland (+354)</option>
                <option value="in">India (+91)</option>
                <option value="id">Indonesia (+62)</option>
                <option value="ir">Iran (+98)</option>
                <option value="iq">Iraq (+964)</option>
                <option value="ie">Ireland (+353)</option>
                <option value="il">Israel (+972)</option>
                <option value="it">Italy (+39)</option>
                <option value="ci">Côte d’Ivoire (+225)</option>
                <option value="jm">Jamaica (+1876)</option>
                <option value="jp">Japan (+81)</option>
                <option value="jo">Jordan (+962)</option>
                <option value="kz">Kazakhstan (+7)</option>
                <option value="ke">Kenya (+254)</option>
                <option value="ki">Kiribati (+686)</option>
                <option value="kw">Kuwait (+965)</option>
                <option value="kg">Kyrgyzstan (+996)</option>
                <option value="la">Laos (+856)</option>
                <option value="lv">Latvia (+371)</option>
                <option value="lb">Lebanon (+961)</option>
                <option value="ls">Lesotho (+266)</option>
                <option value="lr">Liberia (+231)</option>
                <option value="ly">Libya (+218)</option>
                <option value="li">Liechtenstein (+423)</option>
                <option value="lt">Lithuania (+370)</option>
                <option value="lu">Luxembourg (+352)</option>
                <option value="mo">Macao (+853)</option>
                <option value="mk">North Macedonia (+389)</option>
                <option value="mg">Madagascar (+261)</option>
                <option value="mw">Malawi (+265)</option>
                <option value="my">Malaysia (+60)</option>
                <option value="mv">Maldives (+960)</option>
                <option value="ml">Mali (+223)</option>
                <option value="mt">Malta (+356)</option>
                <option value="mh">Marshall Islands (+692)</option>
                <option value="mq">Martinique (+596)</option>
                <option value="mr">Mauritania (+222)</option>
                <option value="mu">Mauritius (+230)</option>
                <option value="yt">Mayotte (+262)</option>
                <option value="mx">Mexico (+52)</option>
                <option value="md">Moldova (+373)</option>
                <option value="mc">Monaco (+377)</option>
                <option value="mn">Mongolia (+976)</option>
                <option value="me">Montenegro (+382)</option>
                <option value="ms">Montserrat (+1664)</option>
                <option value="ma">Morocco (+212)</option>
                <option value="mz">Mozambique (+258)</option>
                <option value="na">Namibia (+264)</option>
                <option value="nr">Nauru (+674)</option>
                <option value="np">Nepal (+977)</option>
                <option value="nl">Netherlands (+31)</option>
                <option value="cw">Curaçao (+599)</option>
                <option value="nc">New Caledonia (+687)</option>
                <option value="nz">New Zealand (+64)</option>
                <option value="ni">Nicaragua (+505)</option>
                <option value="ne">Niger (+227)</option>
                <option value="nu">Niue (+683)</option>
                <option value="nf">Norfolk Island (+672)</option>
                <option value="mp">Northern Mariana Islands (+1670)</option>
                <option value="kp">North Korea (+850)</option>
                <option value="no">Norway (+47)</option>
                <option value="om">Oman (+968)</option>
                <option value="pk">Pakistan (+92)</option>
                <option value="pw">Palau (+680)</option>
                <option value="ps">Palestine (+970)</option>
                <option value="pa">Panama (+507)</option>
                <option value="pg">Papua New Guinea (+675)</option>
                <option value="py">Paraguay (+595)</option>
                <option value="pe">Peru (+51)</option>
                <option value="ph">Philippines (+63)</option>
                <option value="pn">Pitcairn Islands (+870)</option>
                <option value="pl">Poland (+48)</option>
                <option value="pt">Portugal (+351)</option>
                <option value="pr">Puerto Rico (+1787)</option>
                <option value="qa">Qatar (+974)</option>
                <option value="re">Réunion (+262)</option>
                <option value="ro">Romania (+40)</option>
                <option value="ru">Russia (+7)</option>
                <option value="rw">Rwanda (+250)</option>
                <option value="sh">St. Helena (+290)</option>
                <option value="kn">St. Kitts &amp; Nevis (+1869)</option>
                <option value="lc">St. Lucia (+1758)</option>
                <option value="mf">St. Martin (+1599)</option>
                <option value="pm">St. Pierre &amp; Miquelon (+508)</option>
                <option value="vc">St. Vincent &amp; Grenadines (+1784)</option>
                <option value="ws">Samoa (+685)</option>
                <option value="sm">San Marino (+378)</option>
                <option value="st">São Tomé &amp; Príncipe (+239)</option>
                <option value="sa">Saudi Arabia (+966)</option>
                <option value="sn">Senegal (+221)</option>
                <option value="rs">Serbia (+381)</option>
                <option value="sc">Seychelles (+248)</option>
                <option value="fk">
                  Falkland Islands (Islas Malvinas) (+500)
                </option>
                <option value="sl">Sierra Leone (+232)</option>
                <option value="sg">Singapore (+65)</option>
                <option value="sk">Slovakia (+421)</option>
                <option value="si">Slovenia (+386)</option>
                <option value="sb">Solomon Islands (+677)</option>
                <option value="so">Somalia (+252)</option>
                <option value="za">South Africa (+27)</option>
                <option value="kr">South Korea (+82)</option>
                <option value="ss">South Sudan (+211)</option>
                <option value="es">Spain (+34)</option>
                <option value="lk">Sri Lanka (+94)</option>
                <option value="sd">Sudan (+249)</option>
                <option value="sr">Suriname (+597)</option>
                <option value="sz">Eswatini (+268)</option>
                <option value="se">Sweden (+46)</option>
                <option value="ch">Switzerland (+41)</option>
                <option value="sy">Syria (+963)</option>
                <option value="tw">Taiwan (+886)</option>
                <option value="tj">Tajikistan (+992)</option>
                <option value="tz">Tanzania (+255)</option>
                <option value="th">Thailand (+66)</option>
                <option value="tg">Togo (+228)</option>
                <option value="tk">Tokelau (+690)</option>
                <option value="to">Tonga (+676)</option>
                <option value="tt">Trinidad &amp; Tobago (+1868)</option>
                <option value="tn">Tunisia (+216)</option>
                <option value="tr">Turkey (+90)</option>
                <option value="tm">Turkmenistan (+993)</option>
                <option value="tc">Turks &amp; Caicos Islands (+1649)</option>
                <option value="tv">Tuvalu (+688)</option>
                <option value="ug">Uganda (+256)</option>
                <option value="gb">United Kingdom (+44)</option>
                <option value="ua">Ukraine (+380)</option>
                <option value="ae">United Arab Emirates (+971)</option>
                <option value="uy">Uruguay (+598)</option>
                <option value="us">United States (+1)</option>
                <option value="uz">Uzbekistan (+998)</option>
                <option value="vu">Vanuatu (+678)</option>
                <option value="ve">Venezuela (+58)</option>
                <option value="vn">Vietnam (+84)</option>
                <option value="vi">U.S. Virgin Islands (+1340)</option>
                <option value="wf">Wallis &amp; Futuna (+681)</option>
                <option value="ye">Yemen (+967)</option>
                <option value="zm">Zambia (+260)</option>
                <option value="zw">Zimbabwe (+263)</option>
              </select>
              <input
                type="tel"
                placeholder="Search phone number..."
                aria-label="Phone number"
                name="Phone number"
              />
              <span id="search-bar">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </main>
        </div>
      </div>

      <div className="hero-section-bottom">
        <img src="https://www.truecaller.com/cms/2c9f56e0f6907088c8d7ecd234ac98ed.avif" alt="" className="pic-one"></img>
        <img src="https://www.truecaller.com/cms/fa1c869e999cd10b4ea1f30bb1d31a92.avif" alt="" className="pic-two"></img>
        <img src="https://www.truecaller.com/cms/f4fcddffe59a744a8fa0a00087be79a1.avif" alt="" className="pic-three"></img>
        <img src="https://www.truecaller.com/cms/107a20405cf357b5464d4b1bdc985b4f.avif" alt="" className="pic-four"></img>
        <img src="https://www.truecaller.com/cms/2bb7a7c4926a1d4f6a26c8217d7b4150.avif" alt="" className="pic-five"></img>
      </div>
    </>
  );
};

export default Home;
