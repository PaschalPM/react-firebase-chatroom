import React from 'react'
import { useAppContext } from '../../context/AppState'
import {motion} from "framer-motion"


const ModalBox = (props) => {

  const {openModalBox} = useAppContext()

  const handleClick = (e)=>{
	if (e.target.matches(".modal-box")){
		props.handleClick()
	}
  }

  const variants = {
	hidden: {
		opacity:0
	},
	visible: {
		opacity:1,
		transition:{stiffness:300}
	}
  }
  return (openModalBox && <motion.div variants={variants} initial="hidden" animate="visible" onClick={(e)=>handleClick(e)} className="modal-box bg-[#001829c5] w-full h-screen fixed top-0 bottom-0 z-10 flex justify-center items-center">
		<motion.div className='w-[315px]' initial={{y:"100vh"}} animate={{y:0, transition:{type:"spring", stiffness:120}}}>{props.children}</motion.div>
	</motion.div>
  )
}

export default ModalBox