import React from "react";
import headLogo from "../assets/chef-claude-icon.png";

export default function Header() {
    return(
        <div className="header">
            <img src={headLogo} className='head-image'alt="chef-icon" />
            <h1>Chef Timiz</h1>
        </div>
    );
}