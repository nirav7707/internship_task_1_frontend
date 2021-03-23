import axios from "axios";
import React, { useState } from "react";
import InputText from "./InputText";
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import url from "../config/url";


export default function RegisterForm(props) {
  const [username, setUsername] = useState("");
  const [fathername, setFathername] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: username,
      fathername,
      surname,
      email,
      number,
      password,
    };

    axios
      .post(`${url}api/registration`, data)
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setMessage(`${result.data.name} register successfully`);
        setTimeout(() => setMessage(""), 5000);
        window.location = "/";
      })
      .catch((ex) => {
        if (ex.response) {
          setMessage(ex.response.data);
          setTimeout(() => setMessage(""), 5000);
        }
      });

    setUsername("");
    setFathername("");
    setSurname("");
    setEmail("");
    setNumber("");
    setPassword("");
  }

  const inputFields = [
    {
      type: "text",
      name: "username",
      placeholder: "Username",
      icon: <AiOutlineUser />,
      value: username,
      onChange: setUsername,
    },
    {
      type: "text",
      name: "fathername",
      placeholder: "Fathername",
      icon: <AiOutlineUser />,
      value: fathername,
      onChange: setFathername,
    },
    {
      type: "text",
      name: "surname",
      placeholder: "Surname",
      icon: <AiOutlineUser />,
      value: surname,
      onChange: setSurname,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      icon: <AiOutlineMail />,
      value: email,
      onChange: setEmail,
    },
    {
      type: "number",
      name: "number",
      placeholder: "Number",
      icon: <AiOutlinePhone />,
      value: number,
      onChange: setNumber,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      icon: <RiLockPasswordFill />,
      value: password,
      onChange: setPassword,
    },
  ];
  return (
    <form onSubmit={handleSubmit}>
      {message && <h3>{message}</h3>}
      <div className="formGroup">
        {inputFields.map((field) => (
          <InputText field={field} />
        ))}
        <div className="inputfield">
          <input type="submit" value="Register" />
        </div>
      </div>
    </form>
  );
}
