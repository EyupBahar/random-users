import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";

const UserCard = () => {
  const [userList, setUserList] = useState();

  const userData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log(res.data.results);
      setUserList(res.data.results);
    });
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="user-profile">
      {userList?.map((user, index) => (
        <div key={index} className="card-box">
          <img src={user.picture.medium} alt="pic" className="pic" />
          <p id="name">
            {user.name.title} {user.name.first} {user.name.last}
          </p>
          <img src={email} alt="logo" className="logo1" />
          <p className="mail">{user.email}</p>
          <img src={phone} alt="logo" className="logo2" />
          <p className="phone">{user.phone}</p>
          <img src={location} alt="logo" className="logo3" />
          <p className="location">
            {user.location.city} {user.location.country}
          </p>
          <p>
            {"Age:"}
            {user.dob.age}
          </p>
          <br />
          <p>
            {"Register Date:"}
            {user.registered.date}
          </p>
        </div>
      ))}
      <button onClick={userData}>Random User</button>
    </div>
  );
};
export default UserCard;
