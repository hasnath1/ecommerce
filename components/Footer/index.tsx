import Image from "next/image";

import dribbble from "../../public/social_media_icons/dribbble.svg";
import linked from "../../public/social_media_icons/linked.svg";
import google from "../../public/social_media_icons/google.svg";
import facebook from "../../public/social_media_icons/facebook.svg";
import instagram from "../../public/social_media_icons/instagram.svg";
import twitter from "../../public/social_media_icons/twitter.svg";

const Footer = () => {
  return (
    <div className="footer-ctn">
      <div className="footer-content-ctn">
        <div className="col-span-2">
          <h1 className="font-monts">
            <span className="text-[#000000] font-bold text-2xl">Next</span>
            <span className="text-[#FF3C20] font-bold text-2xl">Commerce</span>
          </h1>

          <p className="mt-[30px] max-w-xs font-monts">
            NextCommerce is the world’s leading ecommerce website . Just some
            days ago , it has took over amazon
          </p>

          <div className="flex mt-[35px]">
            <a className="mr-2" href="/">
              <Image src={instagram} width="22" height="22" />
            </a>

            <a className="mr-2" href="/">
              <Image src={twitter} width="22" height="22" />
            </a>

            <a className="mr-2" href="/">
              <Image src={dribbble} width="22" height="22" />
            </a>

            <a className="mr-2" href="/">
              <Image src={linked} width="22" height="22" />
            </a>

            <a className="mr-2" href="/">
              <Image src={google} width="22" height="22" />
            </a>

            <a className="mr-2" href="/">
              <Image src={facebook} width="22" height="22" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-section-header">Customer Care</h2>
          <div>
            <a href="/" className="footer-link">
              Help Center
            </a>
            <br />
            <a href="/" className="footer-link">
              Returns &#38; Refunds
            </a>
            <br />
            <a href="/" className="footer-link">
              Terms &#38; Conditions
            </a>
            <br />
            <a href="/" className="footer-link">
              Contact Us
            </a>
            <br />
            <a href="/" className="footer-link">
              How to buy
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-section-header">Payment Methods</h2>
          <div>
            <a href="/" className="footer-link">
              Paypal
            </a>
            <br />
            <a href="/" className="footer-link">
              Bank
            </a>
            <br />
            <a href="/" className="footer-link">
              Visa
            </a>
            <br />
            <a href="/" className="footer-link">
              Cards
            </a>
            <br />
            <a href="/" className="footer-link">
              Master
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-section-header">Get to Know Us</h2>
          <div>
            <a href="/" className="footer-link">
              Careers
            </a>
            <br />
            <a href="/" className="footer-link">
              Blog
            </a>
            <br />
            <a href="/" className="footer-link">
              About NextCommerce
            </a>
            <br />
            <a href="/" className="footer-link">
              Investor Relation
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h2 className="footer-section-header">Make Money With Us</h2>
          <div>
            <a href="/" className="footer-link">
              Sell Product with us
            </a>
            <br />
            <a href="/" className="footer-link">
              Sell Books with us
            </a>
            <br />
            <a href="/" className="footer-link">
              Advertisement
            </a>
            <br />
            <a href="/" className="footer-link">
              Sponsor Us
            </a>
          </div>
        </div>
      </div>
      <footer className="footer-copyright">
        © 2021 nextCommerce. All rights reserved .
      </footer>
    </div>
  );
};

export default Footer;
