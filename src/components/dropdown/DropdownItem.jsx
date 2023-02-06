function DropdownItem(props) {
  function check(){
    alert("Good!!!")
  }
  return (
    <li className="dropdown-item" onClick={check }>
      <a href={props.href}>
        <span className="button-icon"> {props.icon} </span>
        <span> {props.text} </span>
      </a>
    </li>
  );
}

export default DropdownItem;
