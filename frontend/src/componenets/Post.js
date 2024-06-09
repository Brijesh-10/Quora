import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutline, Close, MoreHorizOutlined, RepeatOneOutlined, ShareOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React,{ useState } from 'react'
import ReactTimeAgo from 'react-time-ago'
import "./css/Post.css";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import ReactQuill from 'react-quill';
//import ReactHtmlParser from "html-react-parser";
import 'react-quill/dist/quill.snow.css';
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
 function LastSeen({ date }) {
  return (
    <div>
      <ReactTimeAgo date={date} locale="en-US" timeStyle="round" />
    </div>
  )
}
export default function Post({post}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [answer, setAnswer] = useState("");
    const Closefunc = <Close/>;

    const user = useSelector(selectUser);
    const handleQuill = (value) => {
      setAnswer(value);
    };
    console.log(answer);

    const handleSubmit = async () => {
      if (post?._id && answer !== "") {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const body = {
          answer: answer,
          questionId: post?._id,
          user: user,
        };
        await axios
          .post("/api/answers", body, config)
          .then((res) => {
            console.log(res.data);
            alert("Answer added succesfully");
            setIsModalOpen(false);
            window.location.href = "/";
          })
          .catch((e) => {
            console.log(e);
          });
      }
    };


  return (
    <div className="post">
        <div className="post__info">
            <Avatar src='post?.user?.photo'/>
            <h4>{post?.user?.userName}</h4>
            <small><LastSeen date={post?.createdAt}/></small>
        </div>
        <div className="post__body">
        <div className="post__question">
        <p>{post?.questionName}</p>
            <button className="post__btnAnswer" onClick={() => 
              setIsModalOpen(true)}>Answers</button>
              <Modal open={isModalOpen} close={Closefunc} onClose={() => setIsModalOpen(false)} closeOnEsc center closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto",
              },
            }}
          ><div className="modal_question">
            <h2>{post?.questionName}</h2>
            <p>asked  by  <span className='name'>Username  </span>on {''}<span className='name'>{new Date(post?.createdAt).toLocaleString()}</span></p>
          </div>
          <div className="modal_answer">
            <ReactQuill value={answer} onChange={handleQuill} placeholder='Enter your answer'/>
          </div>
          <div className="modal__button">
          <button className="cancle" onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button  type="submit" onClick={handleSubmit} className="add">Add Answer</button>
          </div>
          </Modal>
        </div>
        {post.questionUrl !== "" && <img src={post.questionUrl} alt="url" />} 
        </div>
        <div className="post__footer">
        <div className="post__footerAction">
            <ArrowUpwardOutlined/>
            <ArrowDownwardOutlined/>
        </div>
        <RepeatOneOutlined/>
        <ChatBubbleOutline/>
        <div className="post__footerLeft">
            <ShareOutlined/>
            <MoreHorizOutlined/>
        </div>
        </div>
        <p style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "12px",
          fontWeight: "bold",
          margin: "10px 0",
        }}>{post?.allAnswers.length}Answer(s)</p>
        <div className="post_answer" style={{
          margin: "5px 0px 0px 0px ",
          padding: "5px 0px 0px 20px",
          borderTop: "1px solid lightgray",
        }}>
        {post?.allAnswers?.map((_a) => (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                padding: "10px 5px",
                borderTop: "1px solid lightgray",
              }}
              className="post-answer-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#888",
                }}
                className="post-answered"
              >     <Avatar src={_a?.user?.photo} />
                <div
                  style={{
                    margin: "0px 10px",
                  }}
                  className="post-info"
                >
                  <p>{_a?.user?.userName}</p>
                  <span>
                    <LastSeen date={_a?.createdAt} />
                  </span>
                </div>
              </div>
              <div className="post-answer">{_a?.answer}</div>
              {/* <div className="post-answer">{ReactHtmlParser(_a?.answer)}</div> */}
            </div>
          </>
        ))}
        </div>
    </div>
  )
}
