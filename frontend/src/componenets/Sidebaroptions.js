import React from 'react'
import "./css/Sidebaroptions.css";
import logo from './pic/zen.png'
export default function Sidebaroptions() {
  return (
    <div className="sidebarOptions">
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>History</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Business</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Psychology</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Cooking</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Music</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Science</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Health</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Music</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Technology</p>
        </div>
        <div className="sidebarOption">
        <img src={logo} style={{height:'25px',width:'30px'}} alt=""/>
        <p>Education</p>
        </div>
    </div>
  )
}
