import React from 'react'
import { Link } from 'react-router-dom';


const BreadCrumb = ( props ) => {
    const {title} = props
  return (
    <div className="breadCrumb pb-0 pt-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 d-flex align-items-center justify-content-center">
              <Link to="/" className="text-dark">
                Home{" "}
              </Link> &nbsp; {" "}
              &rarr; &nbsp;  {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb