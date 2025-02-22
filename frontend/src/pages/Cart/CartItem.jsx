import React, { useEffect } from "react";
import styled from "styled-components";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  ADD_CART_ITEM,
  CALCULATE_SUB_TOTAL,
  CALCULATE_TOTAL_COUNT,
  DECREASE_CART_ITEM,
  DELETE_CART_ITEM,
  SAVE_URL,
} from "../../redux/reducers/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // const url = window.location.href;
  const increaseCart = (cartItem) => {
    dispatch(ADD_CART_ITEM(cartItem));
  };
  const decreaseCart = (cartItem) => {
    dispatch(DECREASE_CART_ITEM(cartItem));
  };

  const removeFromCart = (cartItem) => {
    dispatch(DELETE_CART_ITEM(cartItem));
  };

  // const clearCart = () => {
  //   dispatch(CLEAR_CART());
  // };

  useEffect(() => {
    dispatch(CALCULATE_SUB_TOTAL());
    dispatch(CALCULATE_TOTAL_COUNT());
    dispatch(SAVE_URL(""));
  }, [dispatch, item]);

  const productTotal = item?.price * item?.count;

  const formattedProductTotal = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(productTotal);
  return (
    <MyCart>
      <div className="store-wrapper py-5 home-wrapper">
        <div>
          <div className="cart-list">
            <div className="list-body">
              <div className="the-product ">
                <div className="prod-image">
                  <img src={item?.images[0].url} alt="prode-img" />{" "}
                </div>
                <div className="the-product-content ">
                  <p>{item?.name}</p>
                  <p>
                    Brand :{" "}
                    <span>
                      <b>{item?.brand}</b>
                    </span>
                  </p>
                </div>
              </div>
              <p className="the-price">
                <b>&#x20A6; {item?.price}</b>
              </p>
              <div className="the-quantity">
                <div className="counter">
                  <div className="signs">
                    <button
                      className="add-reduce"
                      onClick={() => decreaseCart(item)}
                    >
                      -
                    </button>
                    <p className="count">{item.count}</p>
                    <button
                      className="add-reduce"
                      onClick={() => increaseCart(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="trash-can"
                  onClick={() => removeFromCart(item)}
                >
                  <FaRegTrashCan />
                </button>
              </div>
              <p className="the-total">&#x20A6; {formattedProductTotal}</p>
            </div>
          </div>
        </div>
      </div>
    </MyCart>
  );
};
const MyCart = styled.div`
  width: 100%;
  margin-top: -3rem;
  margin-bottom: -3rem;
  .cart-list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .list-body {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 0;
      padding-bottom: 1rem;
      box-shadow: 0 4px 6px -2px #0000001a;
      margin: 0;
      p {
        margin-bottom: 0;
        font-size: 0.8rem;
        font-weight: 500;
        color: grey;
      }
      .the-product {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: star1;
        gap: 2rem;
        .prod-image {
          width: 5rem;
          height: 5rem;
          border-radius: 0.5rem;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        .the-product-content {
          display: flex;
          align-items: start;
          justify-content: start;
          flex-direction: column;
          gap: 0.3rem;
        }
      }
      .the-price {
        width: 15%;
      }
      .the-quantity {
        width: 20%;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        justify-content: start;
        border: 2px solid var(--bg-grey);
        .counter {
          padding: 0 1rem 0 0.5em;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          .signs {
            font-size: 1rem;
            display: flex;
            align-items: start;
            justify-content: start;
            gap: 1rem;
            button {
              width: 2rem;
              margin-bottom: 0.3rem;
              border: 1px solid var(--bg-one);
              padding: 0rem 0.5rem;

              cursor: pointer;
              transition: var(--transition);
              p {
                font-size: 1.2rem;
              }
              &:hover {
                background: var(--bg-logo);
                transition: var(--transition);
              }
            }
          }
          .count {
            font-size: 1rem;
          }
        }
        .trash-can {
          color: white;
          background: var(--bg-one);
          width: 2.2rem;
          height: 2.2rem;
          font-size: 1rem;
          border-radius: 100%;
          transition: var(--transition);
          border: none;
          &:hover {
            background: var(--bg-logo);
            transition: var(--transition);
            color: var(--bg-one);
            border: none;
          }
        }
      }
      .the-total {
        width: 15%;
        text-align: end;
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
    margin-top: -3rem;
    margin-bottom: -3rem;
    .cart-list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .list-body {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 0;
        padding-bottom: 1rem;
        box-shadow: 0 4px 6px -2px #0000001a;
        margin: 0;
        p {
          margin-bottom: 0;
          font-size: 0.8rem;
          font-weight: 500;
          color: grey;
        }
        .the-product {
          width: 40%;
          display: flex;
          align-items: center;
          justify-content: star1;
          gap: 2rem;
          .prod-image {
            width: 3rem;
            height: 3rem;
            border-radius: 0.5rem;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .the-product-content {
            display: flex;
            align-items: start;
            justify-content: start;
            flex-direction: column;
            gap: 0.3rem;
          }
        }
        .the-price {
          width: 15%;
        }
        .the-quantity {
          width: 15%;
          height: fit-content;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          justify-content: center;
          border: 2px solid var(--bg-grey);
          .counter {
            padding: 0 1rem 0 0.5em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            .signs {
              font-size: 1rem;
              display: flex;
              align-items: start;
              justify-content: start;
              gap: 1rem;
              button {
                width: 2rem;
                margin-bottom: 0.3rem;
                border: 1px solid var(--bg-one);
                padding: 0rem 0.5rem;

                cursor: pointer;
                transition: var(--transition);
                p {
                  font-size: 0.8rem;
                }
                &:hover {
                  background: var(--bg-logo);
                  transition: var(--transition);
                }
              }
            }
            .count {
              font-size: 0.8rem;
            }
          }
          .trash-can {
            color: white;
            background: var(--bg-one);
            width: 2.2rem;
            height: 2.2rem;
            font-size: 0.8rem;
            border-radius: 100%;
            transition: var(--transition);
            border: none;
            display: none;
            &:hover {
              background: var(--bg-logo);
              transition: var(--transition);
              color: var(--bg-one);
              border: none;
            }
          }
        }
        .the-price {
          display: none;
        }
        .the-total {
          width: 25%;
          text-align: end;
        }
      }
    }
  }
  @media screen and (max-width: 420px) {
  }
  @media screen and (max-width: 350px) {
  }
`;
export default CartItem;
