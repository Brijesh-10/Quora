import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/Quorabox.css";
export default function Quorabox() {
  const user = useSelector(selectUser);
  return (
    <div className="quorabox">
        <div className="quorabox__info">
        <Avatar src={user?.photo} />
        </div>
        <div className="quorabox__quora">
        <h5>What is your question or link?</h5>
      </div>
    </div>
  )
}
