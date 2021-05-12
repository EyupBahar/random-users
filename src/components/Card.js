import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";

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
        <div key={index}>
          <div>
            <p>
              {user.name.title} {user.name.first} {user.name.last}
            </p>
          </div>
          <div>
            <p>{user.email}</p>
          </div>
          <div>
            <p>{user.phone}</p>
          </div>
          <div>
            <p>
              {user.location.city} {user.location.country}
            </p>
          </div>
          <div>{user.dob.age}</div>
          <div>{user.registered.date}</div>
        </div>
      ))}
      <button onClick={userData}>Random User</button>
    </div>
  );
};
export default UserCard;
