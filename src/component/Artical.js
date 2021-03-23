import React from "react";
import { Link } from "react-router-dom";
import url from "../config/url";

export default function Artical({ artical }) {
  console.log(url + artical.articalImage);
  return (
    <div className="articalContainer">
      <div>
        <img
          src={url + artical.articalImage}
          alt="articalImage"
          style={{ width: 900, height: 400 }}
        />
      </div>
      <div>
        <h3>{artical.name}</h3>
        <span> by {artical.auther}</span>
        <span> timeToRead {artical.timeToRead} minute</span>
      </div>
      <div className="articalDesc">
        <p>{artical.desc}</p>
      </div>
      <Link to={`/articals/${artical._id}`} className="link">
        ...Read more
      </Link>
    </div>
  );
}
