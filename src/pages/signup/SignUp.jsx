import React, { useState } from "react";
import style from "./signup.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaFacebookF } from "react-icons/fa6";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Signup = () => {
  let [signupUser, setSignupUser] = useState({
    firstname: "",
    lastname: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  let nevigate = useNavigate()
  let handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({ ...signupUser, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupUser);

    try {
      let response = await axios.post(
        "http://localhost:8080/users",
        signupUser
      );
      console.log(response);
      toast.success("Signup Successfully")
      nevigate("/login")
    } catch (error) {
      console.log("error while posting the signupuser");
      toast.error("error")
    }

    // clearing input fields
    setSignupUser({firstname: "", lastname: "", phonenumber: "", email: "", password: "" })
  };

  return (
    <main id={style.signupcontainer}>
      <section>
        <article>
          <h1>Welcome Back!</h1>
          <p>
            To keep connected with us please login <br /> with your personal
            info
          </p>
          <Link to={"/login"}><button>SIGN IN</button></Link>
        </article>
        <article>
          <h1>Create Account</h1>
          <div className={style.iconscontainer}>
            <span className={style.FaFacebookF}><FaFacebookF /></span>
            <span className={style.FaGooglePlusG}><FaGooglePlusG /> </span>
            <span><FaLinkedinIn /></span>
          </div>
          <p>or use your email for registration</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={signupUser.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={signupUser.lastname}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={signupUser.phone}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={signupUser.email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Password"
              name="password"
              value={signupUser.password}
              onChange={handleChange}
              required
            />
            <br />
            <button type="submit">SIGN UP</button>
          </form>
        </article>
      </section>
    </main>
  );
};

export default Signup;
