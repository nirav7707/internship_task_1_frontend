import axios from "axios";
import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import url from "../config/url";
import InputText from "./InputText";

export default function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: username,
      password,
    };
    axios
      .post(`${url}api/login`, data)
      .then((result) => {
        console.log(props);
        localStorage.setItem("token", result.data);
        setMessage(`login successfull`);
        setTimeout(() => setMessage(""), 5000);
        window.location = "/";
      })
      .catch((ex) => {
        if (ex.response) {
          setMessage(ex.response.data);
          setTimeout(() => setMessage(""), 5000);
        }
      });
  }

  const inputFields = [
    {
      type: "text",
      name: "username",
      placeholder: "Email",
      icon: <AiOutlineUser />,
      value: username,
      onChange: setUsername,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      icon: <RiLockPasswordFill />,
      value: password,
      onChange: setPassword,
    },
  ]
  return (
    <form onSubmit={handleSubmit}>
      {message && <h3>{message}</h3>}
      <div className="formGroup">
        {
          inputFields.map(field=>(
            <InputText field={field} />
          ))
        }
        <div className="inputfield">
          <input type="submit" value="login" />
        </div>
      </div>
    </form>
  );
}
