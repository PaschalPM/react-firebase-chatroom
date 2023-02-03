import { useState } from "react";

function NavItem(props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    
  let nav_item_class = `button-icon`
  if (props.children){
    nav_item_class = `button-icon menu-button ${isDropdownOpen && "active"}`
  }

  return (
    <li className="nav-item">
      <a
        href={props.href}   
        className={nav_item_class}
        onClick={(e) => {
          e.preventDefault();
          setIsDropdownOpen(!isDropdownOpen);
        }}
      >
        {props.icon}
      </a>

      {isDropdownOpen && props.children}
    </li>
  );
}

export default NavItem;
