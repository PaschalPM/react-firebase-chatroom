import { useAppContext } from "../../context/AppState";
import Container from "../Container";
import { IoMdSend } from "react-icons/io";

function Main(props) {

  const {setStatus} = useAppContext()

  const submitMessage = (e) => {
    e.preventDefault()
    const message = e.target.message.value
    if (!message)
      return setStatus({message:"Message field is empty", status:"error"})
  
    if (message.length < 5)
      return setStatus({message:"Message length is too short!", status:"warning"})
    
    console.log(message)
    setStatus({message:"Message sent!", status:"success"})
  }
  return (
    <main className="main">
      <div className="display"></div>
      <div className="switch-join-form">
        <Container>
          {props.user && (
            <form action="" className="message-form" onSubmit={(e)=>submitMessage(e)}>
              <input type="text" name="message" placeholder="insert message" />
              <button className="message-form-button">
                <IoMdSend size="20px" color="#001829" />
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
