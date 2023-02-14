import React from 'react'
import { FaReact } from 'react-icons/fa'
import ModalBox from './ModalBox'
import { useAppContext } from '../../context/AppState'

const SignUp = () => {
    const {openSignup, setOpenSignup, setOpenModalBox} = useAppContext()

    const closeModal = ()=>{
        setOpenModalBox(false)
        setOpenSignup(false)
    }
    
    return (
        <div>
            
            {openSignup && <ModalBox handleClick={closeModal}> <form className=" rounded-lg p-4  bg-blend-overlay  bg-slate-300">
            <div className='flex flex-col items-center w-[300px] my-4 '>
                    <FaReact size={50}/>
                    <h1 className='text-2xl  mx-auto font-semibold mt-2'>Sign Up!</h1>
                </div>

                <div className='my-4 mt-6'>
                    <input name="display_name" placeholder='Display Name' className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                </div>
                <div className='my-4'>
                    <input name="email" type="email" placeholder='Email' className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                </div>
                <div className='my-4'>
                    <input name="password" placeholder='Password' type="password" className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                </div>
                <div className='my-4'>
                    <input name="confirm_password" placeholder='Confirm Password' type="password" className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                </div>
                <div className='flex justify-center my-4'>
                    <button className='bg-[#4e6862] text-white py-1 px-4 rounded'>
                        sign up
                    </button>
                </div>
                <p className='text-[#4e6862] p-2 text-center'>Already have an account? <a href="#" className="underline font-semibold cursor-pointer "> sign in</a></p>
            </form>
            </ModalBox>
            }
        </div>
    )
}

export default SignUp