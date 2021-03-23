import { Redirect, Route, Switch } from "react-router";
import "./App.css";
import LoginRegister from "./component/LoginRegister";
import Navbar from "./component/Navbar";
import ArticalPage from "./component/ArticalPage";
import CreateArtical from "./component/CreateArtical";
import Myarticals from "./component/Myarticals";
import LandingScreen from "./component/LandingScreen";
import jwtDecode from 'jwt-decode'
import React, { useEffect, useState } from 'react'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect(()=>{
      try{
          const jwt = localStorage.getItem('token');
          const currentUser = jwtDecode(jwt).name
          setCurrentUser(currentUser);
      }catch(ex){
          setCurrentUser(null)
      }
  },[currentUser])
  return (
    <div className="App">
      <Navbar currentUser={currentUser}/>
      <div>
        <Switch>
          <Route path="/login" component={LoginRegister} />
          <Route path="/register" component={LoginRegister} />
          <Route path="/articals" exact component={LandingScreen} />
          <Route path="/articals/:id" component={ArticalPage} />
          <Route path="/newartical/:id" component={CreateArtical} />
          <Route path="/newartical" component={CreateArtical} />
          <Route path="/myartical" component={Myarticals} />
          <Redirect to="/articals" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
