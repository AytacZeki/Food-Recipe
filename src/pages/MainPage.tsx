import React from "react";
import Api from "../components/Api";
import logo from "../img/chef.png";
import insta from "../img/insta.png";
import phone from "../img/phone.png";
import "./Main.css";

const MainPage = () => {
  return (
    <div>
      <div className="main">
        <div className="img-side">
          <img src={logo} alt="logo" className="logo1" />
        </div>
        <div>
          <Api />
        </div>
      </div>
      <div className="contact">
        <h2>Contact us</h2>
        <div className="social">
          <div className="logos">
            <div className="insta"><img src={insta} alt="" /> <span>@sunqueen</span></div>
            <div className="insta"><img src={phone} alt="" /> <span>(012)-276-67-87</span></div>
          </div>
          <div className="commet">
            <label htmlFor="textarea">add commet</label>
            <textarea className="area" placeholder="commet..." ></textarea>
            <button type="submit">send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
