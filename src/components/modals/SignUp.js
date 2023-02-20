import React from 'react'
import { FaReact } from 'react-icons/fa'
import ModalBox from './ModalBox'
import { useAppContext } from '../../context/AppState'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import ErrorDiv from '../utils/ErrorDiv'
import * as Yup from "yup"

const SignUp = () => {
    const {openSignup, setOpenSignup, setOpenModalBox, setOpenLogin} = useAppContext()

    const signInHandle = ()=>{
        setOpenSignup(false)
        setOpenLogin(true)
    }

    const closeModal = ()=>{
        setOpenModalBox(false)
        setOpenSignup(false)
    }
    
    const formikProps = {
        initialValues:{
            display_name:"",
            email:"",
            password:"",
            confirm_password:""
        },
        validationSchema:Yup.object({
            display_name: Yup.string().required("required"),
            email: Yup.string().email("invalid email").required("required"),
            password: Yup.string().min(8, "Password too short").required("required"),
            confirm_password: Yup.string().oneOf(["",Yup.ref("password")], "password does not match").required("required")
        }),
        onSubmit:(values)=>{
            console.log(values)
        }
    }
    return (
        <div>
            
            {openSignup && <ModalBox handleClick={closeModal}> 
                <Formik {...formikProps}>
                    {({handleSubmit})=>(
                        <Form className=" rounded-lg p-4  bg-blend-overlay  bg-slate-300 m-0" onSubmit={handleSubmit}>
                        <div className='flex flex-col items-center my-4 justify-center '>
                                <FaReact size={50}/>
                                <h1 className='text-2xl  mx-auto font-semibold mt-2'>Sign Up!</h1>
                            </div>
            
                            <div className='my-4 mt-6'>
                                <Field name="display_name" placeholder='Display Name' className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                                <ErrorDiv name="display_name"/>
                            </div>
                            <div className='my-4'>
                                <Field name="email" type="email" placeholder='Email' className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                                <ErrorDiv name="email"/>
                            </div>
                            <div className='my-4'>
                                <Field name="password" placeholder='Password' type="password" className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                                <ErrorDiv name="password"/>
                            </div>
                            <div className='my-4'>
                                <Field name="confirm_password" placeholder='Confirm Password' type="password" className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                                <ErrorDiv name="confirm_password"/>
                            </div>
                            <div className='flex justify-center my-4'>
                                <button className='bg-[#4e6862] text-white py-1 px-4 rounded' type='submit'>
                                    sign up
                                </button>
                            </div>
                            <p className='text-[#4e6862] p-2 text-center'>Already have an account? <a href="#" onClick={signInHandle} className="underline font-semibold cursor-pointer "> sign in</a></p>
                        </Form>
                    )}
                </Formik>
        
            </ModalBox>
            }
        </div>
    )
}

export default SignUp