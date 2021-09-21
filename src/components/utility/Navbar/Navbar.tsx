import React from 'react'
import Search from "../Search"
import AccountActions from "./AccountActions"
import {Link,BrowserRouter} from "react-router-dom"
export default function Navbar() {
    return (
        <div className="Navbar-Container">
            <Link to=""><h3>MMC</h3></Link>
            <Search/>
            <AccountActions/>
        </div>
    )
}
