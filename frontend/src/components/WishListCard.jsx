import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { REMOVE_FROM_WISHLIST } from "../redux/reducers/wishListSlice";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { ADD_CART_ITEM } from "../redux/reducers/cartSlice";
import toast from "react-hot-toast";
import { addProductToWishList } from "../redux/axiosCalls/productAPI";

const WishListCard = ({ prod }) => {
  const dispatch = useDispatch();
  const ItemInCart = useSelector(
    (state) => state.persistedReducer.cart.cartItems
  );
  const addItem = (product) => {
    const theCartItem = ItemInCart?.find((item) => item._id === product._id);
    if (theCartItem) {
      toast.error("Item Already In Cart");
      return;
    }
    dispatch(ADD_CART_ITEM(product));
  };
  const removeFromWishList = async (prod) => {
    await addProductToWishList({ prodId: prod._id });
    dispatch(REMOVE_FROM_WISHLIST(prod));
  };
  return (
    <WishCard>
      <div className="compare-image">
        <img src={prod.images[0]?.url} alt="eosImg" />
        <span className="close" onClick={() => removeFromWishList(prod)}>
          <IoClose />
        </span>
      </div>
      <div className="compare-content">
        <div>
          <p className="compare-heading">{prod?.title}</p>
          <p className="compare-price">&#x20A6; {prod?.price}</p>
        </div>
        <p className="three" onClick={() => addItem(prod)} style={{ cursor: "pointer" }}>
        <LiaShoppingBagSolid />
        </p>
      </div>
    </WishCard>
  );
};

const WishCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0rem;
  box-shadow: 0 0 10px #0000001a;
  position: relative;
  .compare-image {
    position: relative;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    padding: 2rem;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
      object-fit: center;
    }
    span {
      position: absolute;
      z-index: 5;
      top: 0rem;
      right: 0.5rem;
      font-size: 1.5rem;
      background: rgba(255, 255, 255, 0.5);
      padding: 0.5rem;
      cursor: pointer;
    }
  }
  .compare-content {
    padding: 1rem;
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    justify-content: space-between;
    gap: 0rem;
    width: 100%;
    background: var(--bg-grey);
    .compare-heading {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0;
    }
    .compare-price {
      width: 100%;
      font-size: 0.8rem;
      color: red;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  }
`;
export default WishListCard;
