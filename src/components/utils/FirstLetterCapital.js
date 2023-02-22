const FirstLetterCapital = (props) => {
  
    let parsedName = props.name.toLowerCase().replace(/^[a-z]/, (m)=>m.toUpperCase())
    return parsedName
}

export default FirstLetterCapital