  function Container(props){
    return(
      <div className="container" style={{ 
        display:`${props.display}`,
        justifyContent:`${props.justify}`
       }}>
        {props.children}
      </div>
    )
  }

  export default Container