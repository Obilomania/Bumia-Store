import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import styled from 'styled-components'
import BreadCrumb from '../../components/BreadCrumb';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';



const initialState = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  password: "",
};
const Address = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isChecked, setChecked] = useState(false);
  const [registerInfo, setRegisterInfo] = useState(initialState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };


   const handleSubmit = async (e) => {
     e.preventDefault();
     if (
       !registerInfo.firstname ||
       !registerInfo.lastname ||
       !registerInfo.email ||
       !registerInfo.password ||
       !registerInfo.confirmPassword ||
       !registerInfo.phone
     ) {
       return toast.error("Please fill all fields");
     } 
    //  const res = await registerNewUser({
    //    firstname: registerInfo.firstname,
    //    lastname: registerInfo.lastname,
    //    email: registerInfo.email,
    //    password: registerInfo.password,
    //    phone: registerInfo.phone,
    //  });
    //  console.log(res);
    //  if (res?.data) {
    //    toast.success("Login Succesfull");
    //    const {
        
    //    } = res?.data;


    //    localStorage.setItem("userRole", role);
    //    localStorage.setItem("userName", firstname);

    //    navigate("/address");
    //  } else if (res?.error) {
    //    return toast.error(res?.error?.data?.message);
    //  }
     navigate("/address");
   };

  return (
    <AddressPage>
        {/* {isLoading && <Loader />} */}
        <Helmet>
          <title>Address</title>
          <meta name="description" content="Address" />
        </Helmet>
        <BreadCrumb title="Address" />
        <form action="" className="login-form" onSubmit={handleSubmit}>
          <h5 className="form-heading text-center">Sign Up</h5>
          <br />
          <div className="inputs">
            <div className="inp">
              <input
                type="text"
                placeholder="First Name *"
                name="firstname"
                value={registerInfo.firstname}
                onChange={(e) => handleInput(e)}
              />
              <input
                type="text"
                placeholder="Last Name *"
                name="lastname"
                value={registerInfo.lastname}
                onChange={(e) => handleInput(e)}
              />
              <input
                type="text"
                placeholder="Phone Number *"
                name="phone"
                value={registerInfo.phone}
                onChange={(e) => handleInput(e)}
              />
              <input
                type="text"
                placeholder="Email Address *"
                name="email"
                value={registerInfo.email}
                onChange={(e) => handleInput(e)}
              />
              <input
                type="password"
                placeholder="Password *"
                name="password"
                value={registerInfo.password}
                onChange={(e) => handleInput(e)}
              />
              <input
                type="password"
                placeholder="Confirm Password *"
                name="confirmPassword"
                value={registerInfo.confirmPassword}
                onChange={(e) => handleInput(e)}
              />
            </div>
           
          </div>
          <div className="form-bottons mt-4">
            <Link to={"/"}>Skip</Link>
            <button type="submit">Save Address</button>
          </div>
        </form>
    </AddressPage>
  );
}

const AddressPage = styled.div`
  width: 100%;
  min-height: 70vh;
  height: 100%;
  background: var(--bg-grey);
  overflow: hidden;
  form {
    width: 25%;
    margin: 5vh auto;
    background-color: white;
    border-radius: 0.5rem;
    padding: 1rem 1rem 2rem 1rem;
    box-shadow: 0 0 10px #0000001a;
    position: relative;
  }
  form .inputs {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 0rem;
    width: 100%;
    .form-checkbox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 1rem;
      font-weight: 500;
      input {
        width: fit-content;
      }
      p {
        width: 100%;
        margin-top: 0rem;
        font-size: 0.8rem;
        font-weight: 400;
        a {
          text-decoration: none;
          color: var(--primary);
          font-weight: 600;
        }
      }
    }
    .inp {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 1rem;
      width: 100%;
      input {
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
          color: var(--bg-one);
        }
      }
    }
    a {
      font-size: 0.8rem;
      margin: 1rem 0.5rem;
      font-weight: 500;
      text-decoration: none;
      color: var(--bg-one);
    }
  }
  form .form-bottons {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    button {
      color: white;
      background: var(--bg-one);
      font-size: 0.8rem;
      padding: 0.3rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      font-weight: 500;
      &:hover {
        background: var(--bg-two);
        transition: var(--transition);
        font-weight: 500;
      }
    }
    a {
      color: black;
      border: 1px solid var(--bg-logo);
      background: var(--bg-logo);
      font-size: 0.8rem;
      padding: 0.3rem 1.5rem;
      border-radius: 1rem;
      transition: var(--transition);
      font-weight: 500;
      &:hover {
        background: var(--bg-logo2);
        transition: var(--transition);
        font-weight: 500;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    background: var(--bg-grey);
    form {
      width: 60%;
      margin: 10vh auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 1rem 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
    }
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    background: var(--bg-grey);
    form {
      width: 60%;
      margin: 10vh auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 1rem 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
    }
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    padding: 0 1rem;
    background: var(--bg-grey);
    form {
      width: 100%;
      margin: 5vh auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 1rem 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
    }
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    padding: 0 1rem;
    background: var(--bg-grey);
    form {
      width: 100%;
      margin: 5vh auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 1rem 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
    }
  }
  @media screen and (max-width: 350px) {
    width: 100%;
    min-height: 70vh;
    height: 100%;
    padding: 0 1rem;
    background: var(--bg-grey);
    form {
      width: 100%;
      margin: 5vh auto;
      background-color: white;
      border-radius: 0.5rem;
      padding: 1rem 1rem 2rem 1rem;
      box-shadow: 0 0 10px #0000001a;
    }
  }
`;
export default Address