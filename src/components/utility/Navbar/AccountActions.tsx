import React from 'react'
import MobileMenu from "./MobileMenu"
import DesktopMenu from "./DesktopMenu"
export default function AccountActions() {
    return (
        <div className="AccountActions-Container">
            <DesktopMenu/>
            <MobileMenu/>
        </div>
    )
}
