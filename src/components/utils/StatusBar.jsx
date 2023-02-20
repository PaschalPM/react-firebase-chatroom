import { MdErrorOutline } from "react-icons/md"
import {BsCheck} from "react-icons/bs"
import {AiOutlineWarning} from "react-icons/ai"
import { useAppContext } from "../../context/AppState"
import { useEffect } from "react"
import {motion, AnimatePresence} from "framer-motion"

function StatusBar(){
	const {status, setStatus} = useAppContext()
	let __class = "" 
	
	if (status && status.status === "success")
		__class = "success"
	else if(status && status.status === "error")
		__class = "error"
	else if(status && status.status === "warning")
		__class = "warning"

	useEffect(()=>{
		if (status){
			setTimeout(()=>{
				setStatus(null)
			},3000)
		}
		}, [status, setStatus])
	return (
		<AnimatePresence>
		{status && <motion.div className={`status-bar ${__class}`}
			exit={{opacity:0}}
		>
			<span > {
				status.status === "success" ? <BsCheck size={20} color="#dee"/> 
				: status.status === "error"? <MdErrorOutline size={20} color="#dee"/> 
				: <AiOutlineWarning size={20} color="#dee"/>} 
			</span>
			<span> {status.message} </span>
		</motion.div>}
		</AnimatePresence>)
}

export default StatusBar