import {useEffect, useState} from "react"
import { useAppContext } from "../../context/AppState";
import Container from "../Container";
import { IoMdSend } from "react-icons/io";
import LoginModal from "../LoginModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import SignUp from '../SignUp'

function Main(props) {

  const [message, setMessage] = useState("")
  const [button, setButton] = useState("disabled")

  useEffect(()=>{
    if (message){
      setButton("active")
    }else{
      setButton("disabled")
    }
  },[message])

  const {setStatus} = useAppContext()

  const submitMessage = (e) => {
    e.preventDefault()
    const message = e.target.message.value
  
    if (message.length < 5)
      return setStatus({message:"Message length is too short!", status:"warning"})
    
    console.log(message)
    setStatus({message:"Message sent!", status:"success"})
  }
  return (
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<main />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <div className="flex justify-center items-center w-full display">
        <LoginModal />
        <SignUp />
      </div>
      <div className="switch-join-form">
        <Container>
          {props.user && (
            <form action="" className="message-form" onSubmit={(e)=>submitMessage(e)}>
              <input type="text" name="message" placeholder="insert message" value={message} onChange={(e)=>setMessage(e.target.value)} />
              <button className="message-form-button" disabled={button === "disabled"}>
                <IoMdSend size="20px" color={button==="disabled"?"#bbb":"#001829"} />
              </button>
            </form>
          )}
          {!props.user && <button className="message-join-button">join</button>}
        </Container>
      </div>
    </main>
  );
}

export default Main;
