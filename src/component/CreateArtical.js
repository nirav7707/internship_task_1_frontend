import React, { useEffect, useState } from "react";
import { AiOutlineFileImage, AiOutlineUser } from "react-icons/ai";
import { MdDescription } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";
import { getCurrentUser } from "./service";
import url from "../config/url";

export default function CreateArtical(props) {
  const [articalName, setArticalName] = useState("");
  const [auther, setAuther] = useState("");
  const [autherId, setAutherId] = useState("");
  const [timeToRead, setTimeToRead] = useState("");
  const [desc, setDesc] = useState("");
  const [articalImage, setArticalImage] = useState("");
  const [message,setMessage] = useState("");

  const currentUser = getCurrentUser();

  useEffect(()=>{
    const articalId =props.match.params.id;
    if(articalId === "new") return ;
    try{
      axios.get(`${url}api/articals/${props.match.params.id}`)
        .then(result=>{
          setAuther(result.data.auther);
          setAutherId(currentUser._id)
          setArticalName(result.data.name);
          setDesc(result.data.desc);
          setTimeToRead(result.data.timeToRead);
          setArticalImage(result.data.articalImage);
        })}
        catch(er){
          console.log("something went wrong")
        }
    
  },[])

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", articalName);
    formData.append("desc", desc);
    formData.append("auther", auther);
    formData.append("timeToRead", timeToRead);
    formData.append("articalImage", articalImage);
    formData.append("autherId", currentUser._id);

    axios.put(`${url}api/articals`,formData)
      .then(result=>{
          setMessage(`${result.data.name} artical added successfully`);
          setTimeout(()=>setMessage(""),5000);
      })
      .catch(ex=>{
          console.log(ex)
          setMessage("somthig want wrong");
          setTimeout(()=>setMessage(""),5000)
      }
      )

    setAuther("");
    setArticalName("");
    setDesc("");
    setTimeToRead("");
    setArticalImage("");
  }
  return (
    <div className="containerLogin">
      <form onSubmit={handleSubmit}>
        <h3 style={{ marginLeft: "10%" }}>Add New Artical</h3>
        <br />
        {message && <h3>{message}</h3>}
        <div className="formGroup">
          <div className="inputfield">
            <AiOutlineUser />
            <input
              type="text"
              name="articalName"
              placeholder="ArticalName"
              className="input"
              value={articalName}
              onChange={(e) => setArticalName(e.target.value)}
            />
          </div>
          <div className="inputfield">
            <AiOutlineUser />
            <input
              type="text"
              name="Auther"
              placeholder="Auther"
              className="input"
              value={auther}
              onChange={(e) => setAuther(e.target.value)}
            />
          </div>
          <div className="inputfield">
            <BiTimeFive />
            <input
              type="text"
              name="timeToRead"
              placeholder="TimeToRead"
              className="input"
              value={timeToRead}
              onChange={(e) => setTimeToRead(e.target.value)}
            />
          </div>
          <div className="inputfield">
            <MdDescription />
            <textarea
              name="description"
              placeholder="Description"
              className="input"
              rows="5"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className="inputfield">
            <AiOutlineFileImage />
            <input type="file" name="articalImage" className="input" onChange={e=>setArticalImage(e.target.files[0])}/>
          </div>
          <div className="inputfield">
            <input type="submit" value="add" />
          </div>
        </div>
      </form>
    </div>
  );
}
