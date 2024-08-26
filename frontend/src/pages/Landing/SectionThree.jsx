import React from "react";
import styled from "styled-components";
import cameraIMG from "../../assets/images/camera.jpg"
import tvIMG from "../../assets/images/tv.jpg"
import watchIMG from "../../assets/images/watch.jpg"
import musGameIMG from "../../assets/images/headphone.jpg"


const SectionThree = () => {
  return (
    <ThirdSection>
      <section className="home-wrapper-1 p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-1 align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-0">Cameras</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={cameraIMG} alt="cameraImg" />
                </div>
                <div className="d-flex gap-4 align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-0">Smart TVs</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={tvIMG} alt="cameraImg" />
                </div>
                <div className="d-flex gap-4 align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-0">Smart Watches</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={watchIMG} alt="cameraImg" />
                </div>
                <div className="d-flex gap-4 align-items-center justify-content-between justify-content-between">
                  <div>
                    <h6 className="mb-0">Music & Gaming</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={musGameIMG} alt="cameraImg" />
                </div>
                <div className="d-flex gap-4 align-items-center justify-content-between justify-content-between">
                  <div>
                    <h6 className="mb-0">Cameras</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={musGameIMG} alt="cameraImg" />
                </div>
                <div className="d-flex gap-4 align-items-center justify-content-between justify-content-between">
                  <div>
                    <h6 className="mb-0">Cameras</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={musGameIMG} alt="cameraImg" />
                </div>
                <div className="d-flex gap-4 align-items-center justify-content-between justify-content-between">
                  <div>
                    <h6 className="mb-0">Cameras</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={musGameIMG} alt="cameraImg" />
                </div>
                <div className="d-flex gap-4 align-items-center justify-content-between">
                  <div>
                    <h6 className="mb-0">Cameras</h6>
                    <p className="categories-p"> 20 Items</p>
                  </div>
                  <img src={musGameIMG} alt="cameraImg" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </ThirdSection>
  );
};

const ThirdSection = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bg-grey);
  .categories {
    background: white;
    box-shadow: 0 0 10px #0000001a;
    padding: 1rem;
    border-radius: .8rem;

    img {
      width: 110px;
      height: 110px;
    }
    p {
      font-size: 0.8rem;
    }
  }
  .categories > div {
    width: 23%;
  }
  .categories > div:nth-child(1),
  .categories > div:nth-child(2),
  .categories > div:nth-child(3),
  .categories > div:nth-child(4) {
    border-bottom: 1px solid var(--border-stroke);
    /* padding:0rem .5rem; */
  }
  .categories > div:nth-child(1),
  .categories > div:nth-child(2),
  .categories > div:nth-child(3),
  .categories > div:nth-child(6),
  .categories > div:nth-child(7),
  .categories > div:nth-child(5) {
    border-right: 1px solid var(--border-stroke);
    border-right: 1px solid var(--border-stroke);
    padding: 0rem 0.5rem;
  }
`;
export default SectionThree;
