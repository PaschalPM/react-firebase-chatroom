  function NavTitle(props){
    return(
      <a href={props.href} className='nav-title'>
        <h2>
          <span> {props.icon} </span>
          {props.children}
        </h2>
      </a>
    )
  }

  export default NavTitle