  function NavTitle(props){
    return(
      <a href={props.href} className='nav-title'>
        <h2>
          {props.children}
        </h2>
      </a>
    )
  }

  export default NavTitle