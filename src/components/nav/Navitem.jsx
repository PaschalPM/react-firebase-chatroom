import { useAppContext } from "../../context/AppState";

function NavItem(props) {
 
  const {menuOpen, setMenuOpen} = useAppContext()

  let nav_item_class = `button-icon`
  if (props.children){
    nav_item_class = `button-icon menu-button ${menuOpen && "active"}`
  }

  return (
    <li className="nav-item">
      <a
        href={props.href}   
        className={nav_item_class}
        onClick={(e) => {
          e.preventDefault();
          if(props.children)
            setMenuOpen((v)=>!v);
        }}
      >
        {props.icon}
      </a>

      {props.children}
    </li>
  );
}

export default NavItem;
