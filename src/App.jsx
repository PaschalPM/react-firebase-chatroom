import React, { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/nav/Navbar";
import NavTitle from "./components/nav/Navtitle";
import NavbarNav from "./components/nav/NavbarNav";
import NavItem from "./components/nav/Navitem";
import FirstLetterCapital from "./components/FirstLetterCapital";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownItem from "./components/dropdown/DropdownItem";
import Main from "./components/main/Main";
import StatusBar from "./components/StatusBar";

import { SiGooglemessages } from "react-icons/si";
import { MdArrowDropDown } from "react-icons/md";
import { FaUserTie, FaReact } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { AppContextProvider } from "./context/AppState";

const App = () => {

  const testUser = { displayName: "PASCHAL", email: "okafor" };
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState(null)
  // const [status, setStatus] = useState(null)

  const appStates = {
    user, setUser, menuOpen, setMenuOpen, status, setStatus
  }

  /** PROPS */
  const navTitleProps = {
    icon:<FaReact/>,
    href:"#"
  } 
  const containerProps = {
    display:"flex", justify:"space-between"
  }
  const navItemIProps = {
    icon:<SiGooglemessages color="white" />,
    href:"#"
  }
  const navItemIIProps = {
    icon:<MdArrowDropDown color="white" size="50px" />,
    href:"#"
  }
  const dropdownItemIProps = {
    icon: user ? <FaUserTie /> : <IoMdLogIn />, 
    href: "#", 
    text: user ? `Hi ${FirstLetterCapital({ name: user.displayName })}`
              : "Log in"
  }
  const dropdownItemIIProps = {
    icon: user ? <IoMdLogOut /> : <SiGnuprivacyguard />, 
    href: "#", 
    text: user ? "Logout" : "Register"
  }
  return (
    <AppContextProvider states={appStates}>
      <div className="wrapper">
      <StatusBar />
        <div className="app">
          <Navbar>
            <Container {...containerProps}>
              <NavTitle {...navTitleProps}>Chatroom</NavTitle>
              <NavbarNav>
                <NavItem {...navItemIProps}/>
                <NavItem {...navItemIIProps}>
                  <DropdownMenu>
                    <DropdownItem {...dropdownItemIProps} />
                    <DropdownItem {...dropdownItemIIProps} />
                  </DropdownMenu>
                </NavItem>
              </NavbarNav>
            </Container>
          </Navbar>
          <Main user={user}></Main>
        </div>
        
      </div>
    </AppContextProvider>
  );
};

export default App;
