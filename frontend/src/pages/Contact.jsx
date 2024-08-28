import React from "react";
import styled from "styled-components";
import BreadCrumb from "../components/BreadCrumb";
import { Helmet } from "react-helmet";
import { FaHouseDamage, FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";

const Contact = () => {
  return (
    <ContactPage>
      <Helmet>
        <title>Contact Us</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.9204483401684!2d3.365876373656716!3d6.541766356433044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dbc9301a3cf%3A0x63a85b30c97ff4ba!2sPalmgrove!5e0!3m2!1sen!2sng!4v1724801049720!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{
                  border: 0,
                  borderRadius: ".5rem",
                  boxShadow: "0 0 10px #0000001a",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
              <div className="col-12 mt-5">
                <div className="contact-content">
                  <div className="form">
                    <h5>Contact</h5>
                    <form action="">
                      <input type="text" placeholder="Name" />
                      <input type="email" placeholder="Email *" />
                      <input type="text" placeholder="Phone Number" />
                      <textarea
                        name=""
                        rows="5"
                        id=""
                        placeholder="message"
                      ></textarea>
                      <button type="submit">Send</button>
                    </form>
                  </div>
                  <div className="contact-info">
                    <h5>Get In Touch With Us</h5>
                    <p>
                      <span>
                        <FaHouseDamage />{" "}
                      </span>
                      No. 20 Coding Main Street, Conscious State, Nigeria.
                    </p>
                    <p>
                      <span>
                        <FaPhoneAlt />
                      </span>{" "}
                      +2348033954540
                    </p>
                    <p>
                      <span>
                        <MdMarkEmailRead />
                      </span>{" "}
                      obilomania@gmail.com , obilomania@techie.com
                    </p>
                    <p>
                      <span>
                        <TiInfoLarge />
                      </span>
                      Monday - Sunday, 8 AM - 11 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactPage>
  );
};

const ContactPage = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  .contact-content {
    display: flex;
    align-items: start;
    justify-content: space-between;
    background-color: white;
    border-radius: 0.5rem;
    padding:2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
    overflow: hidden;
    .form {
      width: 49%;
      form {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        gap: 1rem;
        input,
        textarea {
          width: 100%;
          border: none;
          background: var(--bg-grey);
          outline: none;
          padding: 0.8rem;
          font-size: 0.8rem;
          resize: none;
          border-radius: 0.5rem;
          opacity: 0.7;
          &::placeholder {
            opacity: 0.7;
            color:var(--bg-one);
          }
        }
        button {
          color: white;
          background: var(--bg-one);
          font-size: 0.8rem;
          padding: 0.3rem 1.5rem;
          border-radius: 1rem;
          transition: var(--transition);
          &:hover {
            background: var(--bg-two);
            transition: var(--transition);
          }
        }
      }
    }
  }
  .contact-info {
    width: 48%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: .5rem;
    p {
      display: flex;
      align-items: center;
      gap: .5rem;
      font-size: 0.8rem;
      opacity: 0.7;
      span {
        font-size: 1.2rem;
      }
    }
  }
`;
export default Contact;
