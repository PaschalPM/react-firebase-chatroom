import React, { useState, useRef } from "react";
import Container from "./components/utils/Container";
import Navbar from "./components/nav/Navbar";
import NavTitle from "./components/nav/Navtitle";
import NavbarNav from "./components/nav/NavbarNav";
import NavItem from "./components/nav/Navitem";
import FirstLetterCapital from "./components/utils/FirstLetterCapital";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import DropdownItem from "./components/dropdown/DropdownItem";
import Main from "./components/main/Main";
import StatusBar from "./components/utils/StatusBar";
import LoginModal from "./components/modals/LoginModal";
import SignUp from "./components/modals/SignUp";

import { SiGooglemessages } from "react-icons/si";
import { MdArrowDropDown } from "react-icons/md";
import { FaUserTie, FaReact } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { AppContextProvider } from "./context/AppState";
import {auth} from "./firebase-config"
import {signOut} from "firebase/auth"

const App = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false)
  const [status, setStatus] = useState(null)

  const [openLogin, setOpenLogin] = useState(false)
  const [openSignup, setOpenSignup] = useState(false)

  const [openModalBox, setOpenModalBox] = useState(false)

  const appStates = {
    user, setUser, menuOpen, setMenuOpen, status, setStatus,
    openLogin, setOpenLogin, openSignup, setOpenSignup, openModalBox, setOpenModalBox
  }

  /** PROPS */
  const navTitleProps = {
    icon:<FaReact/>,
    href:"#"
  } 
  const containerProps = {
    display:"flex", justify:"space-between"
  }
  
  // message nav button
  const navItemIProps = {
    icon:<SiGooglemessages color="white" />,
    href:"#"
  }

  // dropdown nav button
  const navItemIIProps = {
    icon:<MdArrowDropDown color="white" size="50px" />,
    href:"#"
  }

  //Login and display name dropdowm button
  const dropdownItemIProps = {
    icon: user ? <FaUserTie /> : <IoMdLogIn />, 
    href: "#", 
    text: user ? `Hi ${FirstLetterCapital({ name: user.displayName })}`
              : "Log in",
    cb(){
      if (!user){
        setOpenModalBox(true)
        setOpenLogin(true)
        setMenuOpen(false)
      }
    }
  }
  // Register and logout dropdown button
  const dropdownItemIIProps = {
    icon: user ? <IoMdLogOut /> : <SiGnuprivacyguard />, 
    href: "#", 
    text: user ? "Logout" : "Register",
    cb(){
      
      if (!user){
        // Register Button
            setOpenModalBox(true)
            setOpenSignup(true)
            setMenuOpen(false)
      } else {
        // Logout Button
            signOut(auth)
            .then((auth)=>{
              setUser(null)
              setMenuOpen(false)
              setStatus({message:"Logged out!", status:"success"})
            })
      }
      
    }
  }

  const mainFormRef = useRef(null)

  return (
    <AppContextProvider states={appStates}>
      <LoginModal />
        <SignUp />
      <div className="wrapper">
      <StatusBar />
        <div className="app">
          <Navbar>
            <Container {...containerProps}>
              <NavTitle {...navTitleProps}>Chatroom</NavTitle>
              <NavbarNav>
                <NavItem {...navItemIProps} mainFormRef={mainFormRef} />
                <NavItem {...navItemIIProps}>
                  <DropdownMenu>
                    <DropdownItem {...dropdownItemIProps} />
                    <DropdownItem {...dropdownItemIIProps} />
                  </DropdownMenu>
                </NavItem>
              </NavbarNav>
            </Container>
          </Navbar>
          <Main ref={mainFormRef}></Main>
        </div>
        
      </div>
    </AppContextProvider>
  );
};

export default App;
