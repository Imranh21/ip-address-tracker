import React, { useState, useEffect } from "react";
import axios from "axios";
import Details from "./components/Details";
import Header from "./components/Header";
import Map from "./components/Map";
import "./styles.css";

export default function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://cors-anywhere.herokuapp.com/http://ip-api.com/json/")
      .then((res) => {
        setData(res.data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={data} setData={setData} />
      <Details data={data} />
      <Map data={data} />
    </div>
  );
}
