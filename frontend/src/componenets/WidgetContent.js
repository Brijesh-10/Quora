import React from 'react'
import "./css/WidgetContent.css";
import mobile from './pic/mobile.jpg'
export default function WidgetContent() {
  return (
    <div className=" widget__contents">
        <div className="widget__content">
            <img src={mobile} alt='mpbile'/>
            <div className="widget__contentTitle">
            <h5>Mobile App Programmer</h5>
          <p>The best Mobile App Development Company</p>
            </div>
        </div>
    </div>
  )
}
