import React from 'react'
import {Link,Route} from "react-router-dom"

import { links } from "../../data/footerLinks"

export default function Footer() {
    const footerLinks = links.map((data)=>{
        return <a href={data.link} target="_blank">{data.id}</a>
    })
    return (
        <div className="Footer-Container">
            <div className="Closure-Container">
                <p>Made from scratch by <Link to="">Kristian Diez</Link> |</p>
            </div>
            <div className="Socials-Container">
                {footerLinks}
            </div>
        </div>
    )
}
