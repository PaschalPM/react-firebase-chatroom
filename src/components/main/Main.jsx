import Container from "../Container";
import { IoMdSend } from "react-icons/io";

function Main(props) {
  return (
    <main className="main">
      <div className="display"></div>
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
