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

import { SiGooglemessages } from "react-icons/si";
import { MdArrowDropDown } from "react-icons/md";
import {FaUserTie} from "react-icons/fa"
import {IoMdLogIn, IoMdLogOut} from "react-icons/io"
import {SiGnuprivacyguard} from "react-icons/si"


const App = () => {
  const testUser = {displayName:"PASCHAL", email:"okafor"}
  const [user, setUser] = useState(null);

  const icon1 = user ? <FaUserTie />: <IoMdLogIn/>
  const text1 = user ? `Hi ${FirstLetterCapital({name:user.displayName})}` : 'Log in'

  const icon2 = user ? <IoMdLogOut/> : <SiGnuprivacyguard/>
  const text2 = user ? 'Logout' : 'Register'  
 
  return (
    <div className="wrapper">
      <div className="app">
        <Navbar>
          <Container display="flex" justify="space-between">
            <NavTitle href="#">Chatroom</NavTitle>
            <NavbarNav>
              <NavItem icon={<SiGooglemessages color="white" />} href="#" />
              <NavItem
                icon={<MdArrowDropDown color="white" size="50px" />}
                href="#"
              >
                <DropdownMenu>
                  <DropdownItem  icon={icon1} href="#" text={text1}/>
                  <DropdownItem  icon={icon2} href="#" text={text2}/>
                </DropdownMenu>
              </NavItem>
            </NavbarNav>
          </Container>
        </Navbar>
        <Main user={user}></Main>
      </div>
    </div>
  );
};

export default App;
