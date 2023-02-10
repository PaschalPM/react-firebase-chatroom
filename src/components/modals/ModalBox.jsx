import React from 'react'

const ModalBox = (props) => {
  return (
	<div className="bg-[#001829c5] w-full h-screen fixed top-0 bottom-0 z-10 flex justify-center items-center">
		{props.children}
	</div>
  )
}

export default ModalBox