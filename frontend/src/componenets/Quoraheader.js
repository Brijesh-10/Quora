import React, { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Avatar } from '@mui/material';
import "./css/Quoraheader.css";
import { Close, ExpandMore } from "@mui/icons-material";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";

 function QuoraHeader() {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [inputUrl, setInputUrl] = useState("");
   const [question, setQuestion] = useState("");
   const Closefunc = <Close/>;
const dispatch = useDispatch();
const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios.post("/api/questions", body, config).then((res) => {
          console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };
  return (
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlinedIcon />
          </div>
        </div>
        <div className="qHeader__input">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search questions" />
        </div>
        <div className="qHeader__Rem">
          <span onClick={handleLogout}>
            <Avatar src={user?.photo} />
          </span>
          <button  onClick={() => setIsModalOpen(true)}>Add Question</button>
          </div>
          <Modal
            open={isModalOpen}
            close={Closefunc}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          ><div className="modal__title">
            <h5>Add Question</h5>
            <h5>Share Link</h5>
          </div>
          <div className="modal__info">
          <Avatar className="avatar" />
          <div className="modal__scope">
          <PeopleAltOutlinedIcon />
          <p>Public</p>
          <ExpandMore />
            </div>
          </div>
          <div className="modal__Field">
            <input type='text' value={question}
                onChange={(e) => setQuestion(e.target.value)} placeholder="Start your questions"/>
            <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              ><input type='text'  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }} value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)} placeholder="Optional:inclue a link that gives context"/>
                  {inputUrl!=='' &&  <img
                    style={{
                      height: "30vh",
                      objectFit: "contain",
                    }} src={inputUrl} alt="displayimage"/>}
                  
              </div>
          </div>
          <div className="modal__buttons">
          <button className="cancle" onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button  onClick={handleSubmit} type="submit" className="add">Add Question</button>
          </div>
          </Modal>
      </div>
    </div>
  );
}

export default QuoraHeader;
