import Container from "../Container";
import { IoMdSend } from "react-icons/io";
import LoginModal from "../LoginModal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import SignUp from '../SignUp'

function Main(props) {
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
            <form action="" className="message-form">
              <input type="text" placeholder="insert message" />
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
