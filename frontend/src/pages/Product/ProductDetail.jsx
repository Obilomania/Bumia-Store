import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import BreadCrumb from "../../components/BreadCrumb";
import subImg from "../../assets/images/tab1.jpg";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosShuffle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { RxDimensions } from "react-icons/rx";
import verveIMG from "../../assets/images/Verve-Logo.png";
import mastercardIMG from "../../assets/images/mastercard.png";
import visacardIMG from "../../assets/images/visa card.png";
import interswitchIMG from "../../assets/images/interswitch.png";
import opayIMG from "../../assets/images/opay.png";
import ReviewForm from "./component/ReviewForm";
import YouMayLike from "./component/YouMayLike";

const ProductDetail = () => {
  return (
    <SingleProduct>
      <Helmet>
        <title>Product Detail</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <BreadCrumb title="Product Detail" />
      <div className="contact-wrapper py-5 home-wrapper">
        <div className="container-xxl">
          <div className="row product-content">
            <div className="col-6 product-image">
              <div className="main-image">
                <img src="\images\tab.jpg" alt="" />
              </div>
              <div className="sub-images">
                <div className="subIMG">
                  <img src={subImg} alt="" />
                </div>
                <div className="subIMG-two">
                  <img src={subImg} alt="" />
                </div>
              </div>
            </div>

            {/* ******PRODUCT WRITE UP************* */}
            <div className="col-6 product-write-up">
              <h className="product-name">SAMSUNG TABLET 2023</h>
              <p className="product-price">&#x20A6; 250,000</p>
              <p className="star-rating d-flex align-items-center gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
              </p>
              <p className="product-type">
                Type : <span>Tablets</span>
              </p>
              <p className="product-brand">
                Brand : <span>Samsung</span>
              </p>
              <p className="product-categories">
                Categories : <span>Phones, Tablet</span>
              </p>
              <p className="product-tags">
                Tags : <span>Phones, Tablet, Phone Accessories</span>
              </p>
              <p className="product-sku">
                SKU : <span>SKU2024</span>
              </p>
              <p className="product-availability">
                Availability : <span>500 in stock</span>
              </p>
              <div className="product-size d-flex">
                <p>Size :</p> &nbsp;
                <div className="sizes">
                  <span>S</span> &nbsp; &nbsp; &nbsp; <span>M</span> &nbsp;
                  &nbsp; &nbsp; <span>L</span>
                </div>
              </div>
              <p className="product-colors">
                <span className="red"></span>
                <span className="blue"></span>
                <span className="black"></span>
              </p>
              <div className="product-quantity d-flex align-items-center">
                <p className="quantity">Quantity</p> &nbsp;{" "}
                <input type="number" />{" "}
                <button className="cart">ADD TO CART</button>
                <button className="buy">BUY NOW</button>
              </div>
              <div className="wish-list">
                <span>
                  {" "}
                  <FiHeart /> Add to wishlist
                </span>
                <span>
                  <IoIosShuffle />
                  Add to compare
                </span>
              </div>
              {/* **************ACCORDIAN**********************/}
              <div
                className="accordion accordion-flush w-full"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed w-full"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      <span>
                        <MdOutlineLocalShipping />
                      </span>
                      Shipping & Returns
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the first item's accordion body.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      <span>
                        <SiMaterialdesignicons />
                      </span>
                      Materials
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the second item's accordion body. Let's imagine
                      this being filled with some actual content.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      <span>
                        <RxDimensions />
                      </span>
                      Dimensions
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Placeholder content for this accordion, which is intended
                      to demonstrate the <code>.accordion-flush</code> class.
                      This is the third item's accordion body. Nothing more
                      exciting happening here in terms of content, but just
                      filling up the space to make it look, at least at first
                      glance, a bit more representative of how this would look
                      in a real-world application.
                    </div>
                  </div>
                </div>
              </div>

              {/* *****END OF ACCORDION********************* */}

              <div className="payment-method">
                <h6>Payment methods</h6>
                <div className=" with-love mb-0 payment-logo d-flex gap-3">
                  <div className="payment-logo-div">
                    <img src={mastercardIMG} alt="mastercard" />
                  </div>
                  <div className="payment-logo-div">
                    <img src={visacardIMG} alt="visacard" />
                  </div>
                  <div className="payment-logo-div">
                    <img src={verveIMG} alt="interswitch" />
                  </div>
                  <div className="payment-logo-div">
                    <img src={interswitchIMG} alt="verve" />
                  </div>
                  <div className="payment-logo-div">
                    <img src={opayIMG} alt="opay" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description container-xxl py-5">
          <h5>Description</h5>
          <p className="desc-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id incidunt
            neque inventore quidem dolores molestiae vel eos! Eius mollitia
            velit porro? Maxime quidem ducimus, ex voluptates eaque consectetur
            nemo ipsam a veritatis porro error impedit quasi, possimus animi
            culpa veniam ratione nulla sapiente. Inventore perferendis nisi
            laboriosam porro quibusdam est dicta dolorum? Aut beatae qui omnis
            laudantium impedit rem, iste officia voluptatum sequi saepe quos
            animi reprehenderit error numquam iure pariatur. Ipsa praesentium
            voluptatibus totam sunt dignissimos, iste ut nam optio rem magni
            illum. Laudantium magni amet voluptatum recusandae neque ullam sunt
            architecto sapiente delectus distinctio, ad nemo pariatur esse
            dolores sequi sit voluptas quidem quaerat. Quisquam repellendus,
            eius distinctio aliquam deleniti deserunt nulla repudiandae ipsum
            suscipit adipisci accusamus cum quo ipsa itaque minima amet eveniet
            nihil quibusdam quasi explicabo aliquid unde aspernatur eos id?
            Suscipit tenetur ipsum, facilis unde dicta, accusamus dolorem
          </p>
        </div>
        <ReviewForm />
        <YouMayLike />
      </div>
    </SingleProduct>
  );
};

const SingleProduct = styled.div`
  width: 100%;
  min-height: 60vh;
  height: 100%;
  background: var(--bg-grey);
  .the-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }
  .product-content {
    width: 100%;
    background: white;
    min-height: 100vh;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px #0000001a;
    padding: 1rem;
  }
  .product-image {
    width: 50%;
    /* height: 70vh; */
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: var(--transition);
    .main-image {
      width: 100%;
      height: 50vh;
      overflow: hidden;
      border: 2px solid var(--bg-grey);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: var(--transition);
      }
      &:hover {
        img {
          width: 100%;
          height: 100%;
          transition: var(--transition);
          transform: scale(1.2);
        }
      }
    }
    .sub-images {
      display: flex;
      align-items: center;
      justify-content: space-between;
      overflow: hidden;
      .subIMG {
        border: 2px solid var(--bg-grey);
        transition: var(--transition);
        width: 100%;
        height: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        &:hover {
          border: 2px solid var(--bg-grey);
          transition: var(--transition);
          width: 100%;
          height: 50%;
          img {
            width: 100%;
            height: 100%;
            transition: var(--transition);
            transform: scale(1.2);
          }
        }
      }
      .subIMG-two {
        border: 2px solid var(--bg-grey);
        transition: var(--transition);
        width: 100%;
        height: 50%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        &:hover {
          border: 2px solid var(--bg-grey);
          transition: var(--transition);
          width: 100%;
          height: 50%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            transition: var(--transition);
            transform: scale(1.2);
          }
        }
      }
    }
  }
  /* ********************WRITE UP*************** */
  .product-write-up {
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    p {
      font-size: 0.8rem;
      margin-bottom: 0;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 2rem;

      span {
        font-weight: 400;
        text-align: right;
      }
    }
    .product-name {
      font-size: 1.2rem;
      margin-bottom: 0;
      font-weight: 600;
    }
    .product-price {
      color: red;
    }
    .product-size {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      span {
        font-size: 0.8rem;
        border: 1px solid var(--bg-one);
        padding: 0.2rem 0.5rem;
      }
    }
    .product-colors {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      span {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        cursor: pointer;
      }
      .red {
        background: red;
      }
      .blue {
        background: blue;
      }
      .black {
        background: black;
      }
    }
    .star-rating {
      font-size: 0.8rem;
      color: gold;
    }
    .product-quantity {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      input {
        width: 3rem;
        font-size: 0.8rem;
        padding: 0 0.5rem;
      }
      .cart {
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.3rem 1rem;
        border-radius: 1rem;
        transition: var(--transition);
        font-weight: 500;
        &:hover {
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
      .buy {
        color: black;
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.3rem 1rem;
        border-radius: 1rem;
        transition: var(--transition);
        border: 2px solid var(--bg-logo);
        font-weight: 500;
        &:hover {
          border: 2px solid var(--bg-logo2);
          background: var(--bg-logo2);
          transition: var(--transition);
        }
      }
    }
    .wish-list {
      font-size: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      span {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.3rem;
        cursor: pointer;
      }
    }
    .accordion {
      width: 100%;
      .accordion-header {
        button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          font-size: 0.8rem;
          width: 100%;
          padding: 0.5rem 0;
        }
      }
      .collapse {
        font-size: 0.8rem;
      }
    }
  }
  .payment-method {
    width: 100%;
    background: var(--bg-grey);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem;
    border-radius: 0.1rem;
  }
  .payment-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    .payment-logo-div {
      width: 2rem;
      background-color: white;
      border: 1px solid #ccc;
      overflow: hidden;
      border-radius: 5px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .description {
    p {
      background-color: white;
      box-shadow: 0 0 10px #0000001a;
      padding: 2rem;
      font-size: 0.8rem;
      border-radius: 0.5rem;
      margin-bottom: 0;
    }
  }
`;
export default ProductDetail;
