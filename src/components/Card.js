import React from "react";
import "./Card.css";
import {useState, useEffect} from "react";

const UserCard = () => {
    const[userList, setUserList] = useState();

    const userData = () => {
        axios.get("https://randomuser.me/api/").then((res) =>{
            console.log(res.data.results);
            setUserList(res.data.results);
        });
    }
    useEffect(()=>{
        userData();
    },[]);

function Card() {
  return <div>Hello From Card</div>;
};
export default Card;
