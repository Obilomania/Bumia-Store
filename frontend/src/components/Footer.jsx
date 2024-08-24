import React from "react";
import styled from "styled-components";
import newsLetterIMG from "../assets/images/newsletter.png";
import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { BsThreadsFill } from "react-icons/bs";
import verveIMG from "../assets/images/Verve-Logo.png";
import mastercardIMG from "../assets/images/mastercard.png";
import visacardIMG from "../assets/images/visa card.png";
import interswitchIMG from "../assets/images/interswitch.png";
import opayIMG from "../assets/images/opay.png";

const Footer = () => {
  return (
    <TheFooter>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-5 align-items-center">
                <img src={newsLetterIMG} alt="newsletterImg" />
                <h2 className="newsletter mb-0 text-white">
                  SUBSCIBE TO NEWSLETTER
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group border-0">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email "
                  aria-label="Your Email "
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text search-bg py-0"
                  id="basic-addon2"
                >
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h5 className="text-white mb-3">Contact Us</h5>
              <div className="footer-links d-flex flex-column">
                <Link to={"/"} className="text-white py-2 mb-0">
                  Bumia Store.
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  N0. 20 Coding Main Street, <br />
                  Conscious State, Nigeria.
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  +2348033954540
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  bumiastore@bumiastore.com
                </Link>
                <div className="d-flex align-items-center gap-3 social-icons">
                  <Link to={"/"}>
                    <IoLogoInstagram />
                  </Link>
                  <Link to={"/"}>
                    <FaFacebookSquare />
                  </Link>
                  <Link to={"/"}>
                    <FaTwitter />
                  </Link>
                  <Link to={"/"}>
                    <IoLogoTiktok />
                  </Link>
                  <Link to={"/"}>
                    <BsThreadsFill />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-3">Information</h5>
              <div className="footer-links d-flex flex-column">
                <Link to={"/"} className="text-white py-2 mb-0">
                  Privacy Policy
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Refund Policy
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Shipping Policy
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Terms & Conditions
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white mb-3">Account</h5>
              <div className="footer-links d-flex flex-column">
                <Link to={"/"} className="text-white py-2 mb-0">
                  About Us
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Login
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  REgister
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Contact
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  FAQs
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white mb-3">Quick Links</h5>
              <div className="footer-links d-flex flex-column">
                <Link to={"/"} className="text-white py-2 mb-0">
                  Computers
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Headphones
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Tablets
                </Link>
                <Link to={"/"} className="text-white py-2 mb-0">
                  Watches
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-between">
              <p className="text-center text-white with-love mb-0">
                Designed with <span className="text-danger ">&#9829;</span> by
                <Link
                  to={"https://www.obilomania.com"}
                  target="_blank"
                  className="text-white"
                >
                  &nbsp; Obilomania
                </Link>
              </p>
              <div className=" with-love mb-0 payment-logo d-flex gap-1">
                <div className="payment-logo-div"><img src={mastercardIMG} alt="mastercard" /></div>
                <div className="payment-logo-div"><img src={visacardIMG} alt="visacard" /></div>
                <div className="payment-logo-div"><img src={verveIMG} alt="interswitch" /></div>
                <div className="payment-logo-div"><img src={interswitchIMG} alt="verve" /></div>
                <div className="payment-logo-div"><img src={opayIMG} alt="opay" /></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </TheFooter>
  );
};

const TheFooter = styled.div`
  width: 100%;
  background: var(--bg-three);
  .with-love {
    font-size: 0.8rem;
  }
  footer {
    border-top: 1px solid var(--bg-two);
  }
  .search-bg {
    background: var(--bg-logo);
  }
  .footer-links {
    font-size: 0.8rem;
    .social-icons {
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        color: white;
        background: var(--bg-two);
        /* padding:.1rem; */
        border-radius: 100%;
      }
    }
  }
  .payment-logo {
    .payment-logo-div {
      width:2rem;
      background-color:white;
      border: 1px solid #ccc;
      overflow:hidden;
      border-radius:5px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
export default Footer;
