function DropdownMenu(props) {
  return (
    <div className="dropdown-menu">
      <ul>{props.children}</ul>
    </div>
  );
}

export default DropdownMenu;
