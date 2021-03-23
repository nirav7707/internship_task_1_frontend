
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({currentUser}) {

    return (
        <div>
            <nav className="navbar">
                <div className="left_menu">
                    <div><Link to="/articals" className="link" ><h3>Articals</h3></Link></div>
                </div>
                <div className="right_menu">
                    {!currentUser ? <div><Link to="/login" className="link"><button className="button">Login</button></Link></div> : <div>Welcome ,{currentUser}</div>}
                    {currentUser && <div><Link to="/newartical/new" className="link"><button className="button">Add Artical</button></Link></div> }
                    {currentUser && <div><Link to="/myartical" className="link"><button className="button">My Articals</button></Link></div>}
                    {!currentUser && <div><Link to="/register" className="link"><button className="button">Register</button></Link></div>}
                    {currentUser && <div><Link to="/" className="link"><button className="button" onClick={handleLogout}>Logout</button></Link></div>}
                </div>
            </nav>
        </div>
    )
}

function handleLogout(){
    localStorage.removeItem("token");
    window.location="/"
}