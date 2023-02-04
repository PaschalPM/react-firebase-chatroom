import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useAppContext } from "../../context/AppState";

function DropdownMenu(props) {

  const {menuOpen} = useAppContext()
  
  const nodeRef = useRef(null)
  return (
    <CSSTransition
      in={menuOpen}
      timeout={300}
      classNames={"dropdown-menu"}
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div className="dropdown-menu" ref={nodeRef}>
        <ul>{props.children}</ul>
      </div>
    </CSSTransition>
  );
}

export default DropdownMenu;
