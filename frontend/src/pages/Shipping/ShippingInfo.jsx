import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShipProducts from "./ShipProducts";
import { useSelector } from "react-redux";
import { useGetUserAddressQuery } from "../../redux/rtk-queries/authAPI";

const ShippingInfo = () => {
  const [editShippingInfo, setEditShippingInfo] = useState(false);
  const togglePage = () => setEditShippingInfo(!editShippingInfo);
  const [isChecked, setIsChecked] = useState(false);
  const cartInfo = useSelector((state) => state.persistedReducer.cart);
  const userInfo = useSelector((state) => state.persistedReducer.auth);
  const { data } = useGetUserAddressQuery(userInfo.id);
  const [newShipAddress, setNewShipAddress] = useState({
    address: "",
    localGovernmentArea: "",
    state: "",
  })
   const handleInput = (e) => {
     const { name, value } = e.target;
     setNewShipAddress({ ...newShipAddress, [name]: value });
   };

  const handleCheckboxClick = (event) => {
    setIsChecked(event.target.checked); // Update state based on checkbox status
  };
  return (
    <ShippingAddress>
      <Helmet>
        <title>Shipping Infomation</title>
        <meta name="description" content="Our Store" />
      </Helmet>
      <h3 className="heading text-center py-5">
        {editShippingInfo
          ? "Shipping Information"
          : "Confirm Shipping Information"}
      </h3>
      <div className="page-container shipping-page-container">
        {editShippingInfo ? (
          <div className="contact-info">
            <h5 className="info-heading mb-4">Contact Information</h5>
            <p className="info-content">
              Full Name :{" "}
              <span>{userInfo.firstName + " " + userInfo.lastName}</span>
            </p>
            <p className="info-content">
              Phone Number : <span>{userInfo.phone}</span>
            </p>
            <p className="info-content">
              Email : <span>{userInfo.email}</span>
            </p>
            <p className="info-content">
              Country : <span>Nigeria</span>
            </p>
            <p className="info-content">
              State : <span>{data?.addresses[0]?.state}</span>
            </p>
            <p className="info-content">
              Local Govt. :{" "}
              <span>{data?.addresses[0]?.localGovernmentArea}</span>
            </p>
            <p className="info-content">
              Street Address : <span>{data?.addresses[0]?.address}</span>
            </p>
            <div className="shipping-info">
              <h5 className="info-heading mb-4 mt-4">Shipping Information</h5>
              <div className="address-thesame">
                <input
                  type="checkbox"
                  name=""
                  id="myCheckbox"// Set checked status based on state
                  onChange={handleCheckboxClick}
                />
                <p>Click if contact is thesame as shipping address</p>
              </div>
              <form action="">
                <input type="text" placeholder="Street Address" value={isChecked ? data?.addresses[0]?.address : newShipAddress.address} onChange={(e) => handleInput(e)}/>
                <div className="form-split">
                  <input type="text" placeholder="Local Government Area" value={isChecked ? data?.addresses[0]?.localGovernmentArea : newShipAddress.localGovernmentArea} onChange={(e) => handleInput(e)}/>
                  <input type="text" placeholder="State "  value={isChecked ? data?.addresses[0]?.state : newShipAddress.state} onChange={(e) => handleInput(e)}/>
                </div>
                {/* <div className="form-split">
                  <input type="text" placeholder="Email Address " />
                  <input type="text" placeholder="Phone Number " />
                </div> */}
                {/* <input type="text" placeholder="Country " /> */}
                <div className="call-to-action mb-5">
                  <Link to={"/cart"}> &larr; &nbsp; Back to Cart </Link>
                  <button onClick={togglePage}>Continue To shipping</button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="confirm-shipping">
            <div className="confirm-shipping-info">
              <p>
                Contact : &nbsp; &nbsp; {userInfo.email}
                <span onClick={togglePage} className="change-btn">
                  change
                </span>
              </p>
              <p>
                Ship to : &nbsp; &nbsp; {data?.addresses[0]?.address}
                <span onClick={togglePage} className="change-btn">
                  change
                </span>
              </p>
            </div>
            <br />
            {/* <div className="confirm-shipping-info">
              <div className="type-shipping d-flex align-items-center gap-2">
                <input type="radio" className="radio-shipping" /> &nbsp; &nbsp;{" "}
                <p>
                  Standard <span>&#x20A6; 15,000</span>
                </p>
              </div>
            </div> */}
            <div className="call-to-action mt-3">
              <button onClick={togglePage} className="goBack">
                {" "}
                &larr; &nbsp; Back to Information{" "}
              </button>
              <button>Continue To Payment</button>
            </div>
          </div>
        )}
        <div className="product-info">
          {cartInfo.cartItems.map((item, index) => (
            <div className="about-product" key={index}>
              <ShipProducts item={item} />
            </div>
          ))}
          <div className="dub-total">
            <p>
              Subtotal <span>&#x20A6; {cartInfo.cartTotalAmount}</span>
            </p>
            <p>
              Shipping{" "}
              <span>
                {cartInfo.cartTotalAmount > 200000 ? (
                  "Free"
                ) : (
                  <> &#x20A6; 15,000</>
                )}
              </span>
            </p>
            <p>
              Estimated taxes <span>&#x20A6; {cartInfo.estTax}</span>
            </p>
          </div>
          <p className="product-total">
            Total{" "}
            <span>&#x20A6; {cartInfo.cartTotalAmount + cartInfo.estTax}</span>
          </p>
        </div>
      </div>
    </ShippingAddress>
  );
};

const ShippingAddress = styled.div`
  width: 100%;
  min-height: 70vh;
  height: fit-content;
  background: var(--bg-grey);
  padding: 2rem 8rem;
  .shipping-page-container {
    width: 100%;
    display: flex;
    align-items: start;

    .contact-info,
    .confirm-shipping {
      width: 50%;
      padding-right: 2rem;
      display: flex;
      flex-direction: column;
      p {
        width: 100%;
        font-size: 0.8rem;
        margin-bottom: 0.2rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* border-bottom: 1px solid grey;
        padding-bottom: 0.5rem; */
        background: rgba(211, 211, 211, 0.475);
        padding: 0.8rem;
        span {
          font-weight: 400;
        }
      }
    }
    .shipping-info {
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 100%;
      .address-thesame {
        display: flex;
        align-items: center;
        p {
          background: none;
          margin-bottom: 0;
        }
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 0.3rem;
        .form-split,
        .call-to-action {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          width: 100%;
          a {
            width: 50%;
            color: var(--bg-one);
            color: white;
            background: var(--bg-one);
            font-size: 0.8rem;
            padding: 0.8rem 1.5rem;
            border-radius: 0.2rem;
            transition: var(--transition);
            border: none;
            text-align: center;
            &:hover {
              color: white;
              background: var(--bg-two);
              transition: var(--transition);
            }
          }
          button {
            width: 50%;
            color: black;
            background: var(--bg-logo);
            font-size: 0.8rem;
            padding: 0.8rem 1.5rem;
            border-radius: 0.2rem;
            transition: var(--transition);
            border: none;
            &:hover {
              color: white;
              background: var(--bg-two);
              transition: var(--transition);
            }
          }
        }
        input {
          width: 100%;
          border: none;
          background: lightgray;
          outline: none;
          padding: 0.8rem;
          font-size: 0.8rem;
          resize: none;
          border-radius: 0.2rem;
          opacity: 0.7;
          &::placeholder {
            opacity: 0.7;
            color: var(--bg-one);
          }
        }
      }
    }
    //***********Product Info********** */
    .product-info {
      width: 50%;
      height: 100%;
      padding-left: 2rem;
      border-left: 1.5px solid grey;
      p {
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-weight: 500;
        }
      }
      .about-product {
        border-bottom: 1px solid lightgrey;
        padding-bottom: 2rem;
      }
      .dub-total {
        padding: 1.5rem 0 0.8rem 0;
        border-bottom: 1px solid lightgrey;
      }
      .product-total {
        padding: 1.3rem 0 0.8rem 0;
        font-size: 1rem;
      }
    }
  }
  .confirm-shipping {
    .call-to-action {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      width: 100%;
      a {
        width: 50%;
        color: var(--bg-one);
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.8rem 1.5rem;
        border-radius: 0.2rem;
        transition: var(--transition);
        border: none;
        text-align: center;
        &:hover {
          color: white;
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
      button {
        width: 50%;
        color: black;
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.8rem 1.5rem;
        border-radius: 0.2rem;
        transition: var(--transition);
        border: none;
        &:hover {
          color: white;
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
    }
    .call-to-action {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      width: 100%;
      .goBack {
        width: 50%;
        color: var(--bg-one);
        color: white;
        background: var(--bg-one);
        font-size: 0.8rem;
        padding: 0.8rem 1.5rem;
        border-radius: 0.2rem;
        transition: var(--transition);
        border: none;
        text-align: center;
        &:hover {
          color: white;
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
      button {
        width: 50%;
        color: black;
        background: var(--bg-logo);
        font-size: 0.8rem;
        padding: 0.8rem 1.5rem;
        border-radius: 0.2rem;
        transition: var(--transition);
        border: none;
        &:hover {
          color: white;
          background: var(--bg-two);
          transition: var(--transition);
        }
      }
    }
    input[type="radio"] {
      appearance: none;
      width: 20px;
      height: 20px;
      border: 2px solid var(--bg-one);
      border-radius: 50%;
      background-color: white;
      cursor: pointer;
      position: relative;
    }
    /* Checked style */
    input[type="radio"]:checked {
      background-color: var(--bg-logo);
      border: 2px solid var(bg-one);
      padding: 2px;
    }
    .confirm-shipping-info {
      width: 100%;
      border: 1px solid grey;
      border-radius: 0.5rem;
      padding: 1rem;
      .change-btn {
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1300px) {
  }
  @media screen and (max-width: 1200px) {
  }
  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 70vh;
    height: fit-content;
    background: var(--bg-grey);
    padding: 1rem;
    .shipping-page-container {
      width: 100%;
      display: flex;
      align-items: start;
      flex-direction:column-reverse;
      justify-content:center;

      .contact-info,
      .confirm-shipping {
        width: 100%;
        padding-right: 0rem;
        display: flex;
        flex-direction: column;
        p {
          width: 100%;
          font-size: 0.8rem;
          margin-bottom: 0.2rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: space-between;
          /* border-bottom: 1px solid grey;
        padding-bottom: 0.5rem; */
          background: rgba(211, 211, 211, 0.475);
          padding: 0.8rem;
          span {
            font-weight: 400;
          }
        }
      }
      .shipping-info {
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        .address-thesame {
          display: flex;
          align-items: center;
          p {
            background: none;
            margin-bottom: 0;
          }
        }
        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: start;
          gap: 0.3rem;
          .form-split,
          .call-to-action {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            width: 100%;
            a {
              width: 100%;
              color: var(--bg-one);
              color: white;
              background: var(--bg-one);
              font-size: 0.8rem;
              padding: 0.8rem 1.5rem;
              border-radius: 0.2rem;
              transition: var(--transition);
              border: none;
              text-align: center;
              &:hover {
                color: white;
                background: var(--bg-two);
                transition: var(--transition);
              }
            }
            button {
              width: 100%;
              color: black;
              background: var(--bg-logo);
              font-size: 0.8rem;
              padding: 0.8rem 1.5rem;
              border-radius: 0.2rem;
              transition: var(--transition);
              border: none;
              &:hover {
                color: white;
                background: var(--bg-two);
                transition: var(--transition);
              }
            }
          }
          input {
            width: 100%;
            border: none;
            background: lightgray;
            outline: none;
            padding: 0.8rem;
            font-size: 0.8rem;
            resize: none;
            border-radius: 0.2rem;
            opacity: 0.7;
            &::placeholder {
              opacity: 0.7;
              color: var(--bg-one);
            }
          }
        }
      }
      //***********Product Info********** */
      .product-info {
        width: 100%;
        height: 100%;
        padding-left: 2rem;
        border-left: 1.5px solid grey;
        p {
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          span {
            font-weight: 500;
          }
        }
        .about-product {
          border-bottom: 1px solid lightgrey;
          padding-bottom: 2rem;
        }
        .dub-total {
          padding: 1.5rem 0 0.8rem 0;
          border-bottom: 1px solid lightgrey;
        }
        .product-total {
          padding: 1.3rem 0 0.8rem 0;
          font-size: 1rem;
        }
      }
    }
    .confirm-shipping {
      .call-to-action {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        width: 100%;
        a {
          width: 100%;
          color: var(--bg-one);
          color: white;
          background: var(--bg-one);
          font-size: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.2rem;
          transition: var(--transition);
          border: none;
          text-align: center;
          &:hover {
            color: white;
            background: var(--bg-two);
            transition: var(--transition);
          }
        }
        button {
          width: 100%;
          color: black;
          background: var(--bg-logo);
          font-size: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.2rem;
          transition: var(--transition);
          border: none;
          &:hover {
            color: white;
            background: var(--bg-two);
            transition: var(--transition);
          }
        }
      }
      .call-to-action {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        width: 100%;
        .goBack {
          width: 100%;
          color: var(--bg-one);
          color: white;
          background: var(--bg-one);
          font-size: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.2rem;
          transition: var(--transition);
          border: none;
          text-align: center;
          &:hover {
            color: white;
            background: var(--bg-two);
            transition: var(--transition);
          }
        }
        button {
          width: 100%;
          color: black;
          background: var(--bg-logo);
          font-size: 0.8rem;
          padding: 0.8rem 1.5rem;
          border-radius: 0.2rem;
          transition: var(--transition);
          border: none;
          &:hover {
            color: white;
            background: var(--bg-two);
            transition: var(--transition);
          }
        }
      }
      input[type="radio"] {
        appearance: none;
        width: 20px;
        height: 20px;
        border: 2px solid var(--bg-one);
        border-radius: 50%;
        background-color: white;
        cursor: pointer;
        position: relative;
      }
      /* Checked style */
      input[type="radio"]:checked {
        background-color: var(--bg-logo);
        border: 2px solid var(bg-one);
        padding: 2px;
      }
      .confirm-shipping-info {
        width: 100%;
        border: 1px solid grey;
        border-radius: 0.5rem;
        padding: 1rem;
        .change-btn {
          cursor: pointer;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default ShippingInfo;
