import React from 'react'
import { FaReact } from "react-icons/fa";
import ModalBox from './ModalBox';

const LoginModal = () => {
    const [openModal, setOpenModal] = React.useState(true)
    //const [handleModal, setHandleModal] = React.useState(true)

    return (
        <>
            {openModal && <ModalBox><form className="rounded-lg p-4  bg-blend-overlay  bg-slate-300">
                <div className='flex flex-col items-center w-[300px] my-4 '>
                    <FaReact size={50}/>
                    <h1 className='text-xl  mx-auto font-semibold mt-2'>Welcome back!</h1>
                </div>
                <div className='my-6'>
                    <input name="email" type="email" placeholder='Email' className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                </div>
                <div className='my-6'>
                    <input name="password" placeholder='Password' type="password" className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                </div>
                <div className='flex justify-center my-6'>
                    <button className='bg-[#4e6862] text-white py-1 px-4 rounded'>
                        log in
                    </button>
                </div>
                <p className='text-[#4e6862] p-2 text-center'>Don't have an account? <a href="#" className="underline font-semibold cursor-pointer "> register</a></p>
            </form></ModalBox>
            }
            </>
    )
}

export default LoginModal;