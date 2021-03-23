import React from 'react'
import { Link } from 'react-router-dom'
import url from '../config/url'


export default function ListArtical({artical}) {
    return (
        <div className="listArtical">
            <div><img src={url+artical.articalImage} style={{width:100,height:100}} alt="artical image"/></div>
            <div>
                <h4>{artical.name}</h4>
                <p style={{width:300,height:50,overflow:'hidden'}}>{artical.desc}</p>
                <Link to={`/articals/${artical._id}`} className="link">...Read more</Link>
            </div>
        </div>
    )
}
