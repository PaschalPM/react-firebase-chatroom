import { useAppContext } from "../../context/AppState";

function NavItem(props) {
 
  const {
          menuOpen, 
          setMenuOpen, 
          setOpenLogin,
          setOpenModalBox
        } = useAppContext()
        
  const mainForm = props.mainFormRef?.current
  const mainFormMessage = mainForm?.message

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
  
            if (mainFormMessage){
                mainFormMessage.focus()
                setMenuOpen(false)
            }
            else if(mainForm === null){
                setOpenModalBox(true)
                setOpenLogin(true)
                setMenuOpen(false)
            }
        }}
      >
        {props.icon}
      </a>

      {props.children}
    </li>
  );
}

export default NavItem;
