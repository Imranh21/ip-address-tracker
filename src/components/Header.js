import React, { useState } from "react";
import axios from "axios";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Header({ setData }) {
  const [input, setInput] = useState("");

  const onSub = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://ip-api.com/json/${input}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setInput("");
      });
  };
  return (
    <div className="header">
      <h1 className="heading">IP address Tracker</h1>
      <form onSubmit={onSub} className="form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input"
          placeholder="Search IP"
        />
        <button className="btn">
          <ArrowForwardIosIcon />
        </button>
      </form>
    </div>
  );
}
