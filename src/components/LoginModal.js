import React from 'react'
import SignUp from './SignUp';
 import { Link } from "react-router-dom";


const LoginModal = () => {
    const [openModal, setOpenModal] = React.useState(false)
    //const [handleModal, setHandleModal] = React.useState(true)
    function closeModal() {
        setOpenModal(openModal => !openModal)
    }
    function handleModal() {
        setOpenModal(!openModal)
    }


    return (
        <div>
            {!openModal ? <button className='bg-slate-600 text-white m-3 px-2' onClick={handleModal}>sign in</button> : ""}
            {openModal && <div className="w-full rounded-lg p-4  bg-blend-overlay  bg-slate-300">
                <div className='flex justify-between w-[300px]'>
                    <h1 className='text-xl'>Welcome back!</h1>
                    <button onClick={closeModal} className='bg-[#4e6862] text-white rounded px-2'>x</button>
                </div>
                <h1 className='mb-4 text-left'>Email</h1>
                <hr></hr>
                <h1 className='mb-4 text-left'>Password</h1>
                <hr className='mb-6'></hr>
                {/* <Link to={"/SignUp"} className='bg-[#4e6862] text-white p-3 rounded-lg'>Don't have an account? sign up  </Link> */}
                <a href='#' className='bg-[#4e6862] text-white p-2 rounded'>Don't have an account? sign up</a>
            </div>
            }
        </div>
    )
}

export default LoginModal;