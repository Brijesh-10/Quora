import React from 'react'
import Quoraheader from './Quoraheader'
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widget from "./Widget";
import "./css/Quora.css";

export default function Quora() {
  return (
    <div className="quora">
    <Quoraheader />
    <div className="quora__contents">
      <div className="quora__content">
        {/* <Sidebar /> */}
        <Feed />
        {/* <Widget /> */}
      </div>
    </div>
  </div>
  )
}
