import React, { useState } from 'react'
import {ReactComponent as Menu} from "../../../assets/facebook.svg"
export default function MobileMenu() {
    const [isClicked,setClicked] = useState(false)
    return (
        <div className="MobileMenu-Container">
            <Menu onClick={()=>setClicked(p=>!p)}/>
            <div className="MobileMenu" style={{visibility:isClicked?"visible":"hidden"}}></div>
        </div>
    )
}
