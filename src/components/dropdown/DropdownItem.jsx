function DropdownItem(props) {
  return (
    <li className="dropdown-item" onClick={props.cb}>
      <a href={props.href} >
        <span className="button-icon"> {props.icon} </span>
        <span> {props.text} </span>
      </a>
    </li>
  );
}

export default DropdownItem;
