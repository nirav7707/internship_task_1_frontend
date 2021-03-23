import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import url from "../config/url";
import { getCurrentUser } from "./service";

export default function Myarticals() {
  const [listOfArtical, setlistOfArtical] = useState([]);
  const currentUser = getCurrentUser()
  useEffect(() => {
    axios
      .get(`${url}api/articals`)
      .then((result) => {
        const usersArtical = result.data.filter(
          (artical) => artical.autherId === currentUser._id
        );
        setlistOfArtical(usersArtical)
      })
      .catch((ex) => console.log(ex));
  }, []);
  return (
    <div className="myaricalView">
      {listOfArtical.map((artical) => (
        <div>
          <div>
            <img
              src={url+artical.articalImage}
              alt={artical.name}
              style={{ width: 150, height: 150 }}
            />
          </div>
          <div>
            <h3>{artical.name}</h3>
            <div style={{width:300}}>{artical.desc}</div>
          </div>
          <div>
            <Link to="/articals/:id" />
          </div>
        </div>
      ))}
    </div>
  );
}
