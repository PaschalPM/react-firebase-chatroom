import {useEffect, useState, forwardRef} from "react"
import { useAppContext } from "../../context/AppState";
import Container from "../utils/Container";
import { IoMdSend } from "react-icons/io";

const Main = forwardRef((props, ref)=>{
  const [message, setMessage] = useState("")
  const [button, setButton] = useState("disabled")
  const {
          user, 
          setOpenLogin,
          setOpenModalBox
        } = useAppContext()

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

  const openLogin = () =>{
    setOpenModalBox(true)
    setOpenLogin(true)
  }
  return (

    <main className="main" >
      <div className="flex justify-center items-center w-full display">
        
      </div>
      <div className="switch-join-form">
        <Container>
          {user && (
            <form action="" ref={ref} className="message-form" onSubmit={(e)=>submitMessage(e)}>
              <input type="text" name="message" placeholder="insert message" value={message} onChange={(e)=>setMessage(e.target.value)} />
              <button className="message-form-button" disabled={button === "disabled"}>
                <IoMdSend size="20px" color={button==="disabled"?"#bbb":"#001829"} />
              </button>
            </form>
          )}
          {!user && <button className="message-join-button" onClick={openLogin}>join</button>}
        </Container>
      </div>
    </main>
  );
})

export default Main;
