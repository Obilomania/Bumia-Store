import React, { useState } from "react";
import styled from "styled-components";
import FeaturedProduct from "../../components/FeaturedProduct";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { featuredProducts } from "../../assets/dummyData";
import { useDispatch, useSelector } from "react-redux";
import { ADD_CART_ITEM } from "../../redux/reducers/cartSlice";
import toast from "react-hot-toast";
import { ADD_TO_WISHLIST } from "../../redux/reducers/wishListSlice";
import { addProductToWishList } from "../../redux/axiosCalls/productAPI";

const SectionSix = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productLength = featuredProducts.length;
  const ItemInCart = useSelector(
    (state) => state.persistedReducer.cart.cartItems
  );
  const allAppProducts = useSelector(
    (state) => state.persistedReducer.admin.allProducts
  );
  const dispatch = useDispatch();
  const handleNext = () => {
    setCurrentSlide(currentSlide === productLength - 6 ? 0 : currentSlide + 1);
  };

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? productLength - 6 : currentSlide - 1);
  };

  const addItem = (product) => {
    const theCartItem = ItemInCart?.find((item) => item._id === product._id);
    if (theCartItem) {
      toast.error("Item Already In Cart");
      return;
    }
    dispatch(ADD_CART_ITEM(product));
  };

  const addItemToWishList = async (product) => {
    await addProductToWishList({ prodId: product._id });
    dispatch(ADD_TO_WISHLIST(product));
  };

  return (
    <SixthSection>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="page-container">
          <div className="col-12 d-flex align-items-center justify-content-between">
            <h3 className="section-heading">Featured Products</h3>
            <div className="featured-arrows d-flex align-items-center gap-4">
              <span onClick={handlePrev}>
                <FaArrowLeftLong />
              </span>
              <span onClick={handleNext}>
                <FaArrowRightLong />
              </span>
            </div>
          </div>
          <div className="featured-cards-lg-scrren">
            {allAppProducts
              .slice(currentSlide, currentSlide + 6)
              .map((product) => (
                <FeaturedProduct
                  product={product}
                  key={product._id}
                  addItem={addItem}
                  addItemToWishList={addItemToWishList}
                />
              ))}
          </div>
          <div className="featured-cards-mobile-scrren">
            {allAppProducts
              .slice(currentSlide, currentSlide + 2)
              .map((product) => (
                <FeaturedProduct
                  product={product}
                  key={product._id}
                  addItem={addItem}
                  addItemToWishList={addItemToWishList}
                />
              ))}
          </div>
        </div>
      </section>
    </SixthSection>
  );
};
const SixthSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  padding: 0 8rem;
  .featured-arrows {
    span {
      color: var(--bg-two);
      opacity: 0.5;
      border: 2px solid var(--bg-two);
      font-size: 0.8rem;
      padding: 0rem 0.8rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: var(--transition);
      &:hover {
        font-size: 1rem;
        transition: var(--transition);
      }
      &:active {
        background: var(--bg-logo);
      }
    }
  }
  .featured-cards-lg-scrren {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .featured-cards-mobile-scrren {
    display: none;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
    background: var(--bg-grey);
    padding: 1rem;
    .featured-arrows {
      span {
        color: var(--bg-two);
        opacity: 0.5;
        border: 2px solid var(--bg-two);
        font-size: 0.8rem;
        padding: 0rem 0.8rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          transition: var(--transition);
        }
        &:active {
          background: var(--bg-logo);
        }
      }
    }
    .featured-cards-lg-scrren {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .featured-cards-mobile-scrren {
      display: none;
    }
  }
  @media screen and (max-width: 900px) {
    .section-heading {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    .featured-arrows {
      margin-bottom: 0.8rem;

      span {
        color: var(--bg-two);
        opacity: 0.5;
        border: 2px solid var(--bg-two);
        font-size: 0.8rem;
        padding: 0rem 0.8rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          transition: var(--transition);
        }
        &:active {
          background: var(--bg-logo);
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
    background: var(--bg-grey);
    padding: 1rem;
    .section-heading {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    .featured-arrows {
      margin-bottom: 0.8rem;

      span {
        color: var(--bg-two);
        opacity: 0.5;
        border: 2px solid var(--bg-two);
        font-size: 0.8rem;
        padding: 0rem 0.8rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          transition: var(--transition);
        }
        &:active {
          background: var(--bg-logo);
        }
      }
    }
    .featured-cards-lg-scrren {
      width: 100%;
      display: none;
      align-items: center;
      justify-content: space-between;
    }
    .featured-cards-mobile-scrren {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    height: 100%;
    background: var(--bg-grey);
    padding: 1rem;
    .section-heading {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    .featured-arrows {
      margin-bottom: 0.8rem;

      span {
        color: var(--bg-two);
        opacity: 0.5;
        border: 2px solid var(--bg-two);
        font-size: 0.8rem;
        padding: 0rem 0.8rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          transition: var(--transition);
        }
        &:active {
          background: var(--bg-logo);
        }
      }
    }
    .featured-cards-lg-scrren {
      width: 100%;
      display: none;
      align-items: center;
      justify-content: space-between;
    }
    .featured-cards-mobile-scrren {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    height: 100%;
    background: var(--bg-grey);
    padding: 1rem;
    .section-heading {
      font-size: 1rem;
      margin-bottom: 0.8rem;
    }
    .featured-arrows {
      margin-bottom: 0.8rem;

      span {
        color: var(--bg-two);
        opacity: 0.5;
        border: 2px solid var(--bg-two);
        font-size: 0.8rem;
        padding: 0rem 0.8rem;
        cursor: pointer;
        border-radius: 0.5rem;
        transition: var(--transition);
        &:hover {
          font-size: 1rem;
          transition: var(--transition);
        }
        &:active {
          background: var(--bg-logo);
        }
      }
    }
    .featured-cards-lg-scrren {
      width: 100%;
      display: none;
      align-items: center;
      justify-content: space-between;
    }
    .featured-cards-mobile-scrren {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
export default SectionSix;
