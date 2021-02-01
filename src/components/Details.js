import React from "react";

export default function Details({ data }) {
  const { city, isp, country, query, zip } = data;
  return (
    <div className="details">
      <div className="detailsBox">
        <div className="box">
          <h4 className="title">IP</h4>
          <h2 className="data">{query}</h2>
        </div>

        <div className="box">
          <h4 className="title">Location</h4>
          <h2 className="data">
            {city} {zip}
          </h2>
        </div>

        <div className="box">
          <h4 className="title">ISP</h4>
          <h2 className="data">{isp}</h2>
        </div>

        <div className="box">
          <h4 className="title">Country</h4>
          <h2 className="data">{country}</h2>
        </div>
      </div>
    </div>
  );
}
