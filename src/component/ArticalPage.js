import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getCurrentUser } from "./service";
import url from "../config/url";


export default function ArticalPage(props) {
  const [artical, setArtical] = useState([]);
  useEffect(() => {
    axios.get(`${url}api/articals/${props.match.params.id}`)
    .then(result=> setArtical(result.data))
    .catch(ex=>console.log(ex))
  }, []);
  const currentUser = getCurrentUser()
  return (  
    <div className="articalContainer">
      {artical.length !== 0 ? (
        <div>
          <div>
            <img
              src={url+artical.articalImage}
              alt="articalImage"
              style={{ width: 900, height: 400 }}
            />
          </div>
          <div className="descContainer">
            <h3>{artical.name}</h3>
            <span> by {artical.auther}</span>
            <span> timeToRead {artical.timeToRead} minute</span>
          </div>
          <p>{artical.desc}</p>
        </div>
      ) : (
        <div>loading...</div>
      )}
      {currentUser && currentUser._id === artical.autherId && <Link to={`/newartical/${artical._id}`} >Edit artical</Link>}
    </div>
  );
}
