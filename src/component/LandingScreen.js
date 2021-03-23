import axios from "axios";
import React, { useEffect, useState } from "react";
import url from "../config/url";
import Artical from "./Artical";
import ListArtical from "./ListArtical";
// import listOfArtical from "./articaljson";

export default function LandingScreen() {
  const [listOfArtical, setlistOfArtical] = useState([])
  useEffect(()=>{
    axios.get(`${url}api/articals`)
    .then(result=> setlistOfArtical(result.data))
    .catch(ex=>console.log(ex))
  },[])
  return (
    <div className="landingScreen">
      <div className="landingScreen_left">
        {listOfArtical.map((artical) => (
          <Artical key={artical._id} artical={artical} />
        ))}
      </div>
      <div className="landingScreen_right">
        TOP ARTICALS
        {listOfArtical
          .map((artical) => <ListArtical key={artical._id} artical={artical} />)
          .slice(0, 5)}
      </div>
    </div>
  );
}
