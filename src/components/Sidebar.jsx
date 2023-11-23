import React from 'react'
import { CgProfile } from "react-icons/cg";
import { CgMenuLeft } from "react-icons/cg";


import { GoBell } from "react-icons/go";

import { SidebarData } from './SidebarData'

const Sidebar = () => {
  return (
    <>
        <div className="Sidebar">
            <div className="logo">
                <h4>LOGO</h4>
             <CgMenuLeft size={30} />
            </div>
            <div className="menu">
            <ul className="links">
               {SidebarData.map((e) => {
                return (
                    <li><div className='icon'>{e.icon}</div></li>
                )
               })}
            </ul>
            </div>
            <div className="profile">
                <CgProfile size={30} />
            </div>
        </div>
    </>
  )
}

export default Sidebar
