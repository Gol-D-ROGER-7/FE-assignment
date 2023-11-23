import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { TfiBlackboard } from "react-icons/tfi";
import { GoVideo } from "react-icons/go";
import { RiSlideshow2Line } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegFileVideo } from "react-icons/fa";
import { PiVideoCameraBold } from "react-icons/pi";
import { IoMicOutline } from "react-icons/io5";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import mathImg from '../images/basic_math_img.png'


const Home = () => {
  return (
    <>
    <div className='home'>
      <div className="headings">
        <div className="lheading">  
            <button className='btn'><MdArrowBackIos size={15} color='grey' /></button>
            <h1>Basic Mathematics 101</h1>
        </div>
        <div className="rheading">
          <div><FiPhone size={20} />
          <h2>call Teacher</h2></div>
          <div><MdSupportAgent size={20} />
          <h2>Support</h2></div>
        </div>
      </div>
      <div className="home-nav">
        <div className="nav-item">
         <SiGoogleclassroom size={30} color='grey' />
         <h2>Classroom</h2>
        </div>
        <div className="nav-item">
         <TfiBlackboard size={30} color='grey' />
         <h2>Whiteboard</h2>
        </div>
        <div className="nav-item">
         <GoVideo size={30} color='grey' />
         <h2>Videos</h2>
        </div>
        <div className="nav-item">
         <RiSlideshow2Line size={30} color='grey' />
         <h2>Slide Show</h2>
        </div>
        <div className="nav-item">
         <IoDocumentTextOutline size={30} color='grey' />
         <h2>Documents</h2>
        </div>
        <div className="nav-item">
         <FaRegFileVideo size={30} color='grey' />
         <h2>Doc.cam</h2>
        </div>
      </div>
      <div className="wrapper">
        <div className="img-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfV1f3bIV9TdcJskE_nAQ8EXOPllXMqqIlBQ&usqp=CAU" alt="" />
            <div className="name">
              <h4>Ridha</h4>
            </div>
        </div>
        <div className="img-container">
            <img src="https://thumbs.dreamstime.com/b/pov-woman-talking-online-videocall-pov-woman-talking-online-videocall-business-meeting-colleagues-using-remote-254446004.jpg" alt="" />
            <div className="name">
              <h4>Ms.Kaur</h4>
            </div>
        </div>
        

        <div className="btns">
          <button className="btnn"><PiVideoCameraBold size={30} color='#000' /></button>
          <button className="btnn"><IoMicOutline size={30} color='#000' /></button>
          <button className="btnn"><FaRegShareFromSquare size={30} color='#000' /></button>
          <button className="btnn"><IoChatbubblesOutline size={30} color='#000' /></button>
          <button className="btnn"><RxExit size={30} color='#000' /></button>
        </div>

      </div>
      <div className="video-container">
          <img src={mathImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default Home
