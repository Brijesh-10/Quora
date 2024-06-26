import React from 'react'
import WidgetContent from './WidgetContent'
import "./css/Widget.css";
export default function Widget() {
  return (
    <div className="widget">
    <div className="widget__header">
      <h5>Space to follow</h5>
    </div>
    <div className="widget__contents">
      <WidgetContent />
      <WidgetContent />
      <WidgetContent />
    </div>
  </div>
  )
}
