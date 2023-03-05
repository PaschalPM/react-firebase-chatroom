import React from 'react'
import { FaReact } from "react-icons/fa";
import ModalBox from './ModalBox';
import { useAppContext } from '../../context/AppState';
import {Formik, Form, Field} from "formik"
import ErrorDiv from '../utils/ErrorDiv';
import FormButton from "../utils/FormButton"

import * as Yup from "yup"

const LoginModal = () => {
    const {
            openLogin, 
            setOpenLogin, 
            setOpenModalBox,
            setOpenSignup
        } = useAppContext()


    const closeModal = ()=>{
        setOpenModalBox(false)
        setOpenLogin(false)
    }

    const registerHandle = ()=>{
        setOpenLogin(false)
        setOpenSignup(true)
    }

    const formikProps = {
        initialValues:{
            "email":"",
            "password":""
        },
        validationSchema:Yup.object({
            email:Yup.string().email("Invalid Email").required("Required"),
            password:Yup.string().min(8, "Password too short").required("Required")
        }),
        onSubmit(values, helper){
            setTimeout(()=>{
                console.log(values);
                helper.resetForm()
            }, 3000)
        }
    }
    return (
        <>
            {openLogin && <ModalBox handleClick={closeModal}>
                <Formik {...formikProps}>
                    {(formik)=>(<Form className="rounded-lg p-4  bg-blend-overlay  bg-slate-300" onSubmit={formik.handleSubmit}>
                        <div className='flex flex-col items-center w-[300px] my-4 '>
                            <FaReact size={50}/>
                            <h1 className='text-xl  mx-auto font-semibold mt-2'>Welcome back!</h1>
                        </div>
                        <div className='my-6'>
                            <Field name="email" type="email" placeholder='Email' className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                            <ErrorDiv name="email"/>
                        </div>
                        <div className='my-6'>
                            <Field name="password" placeholder='Password' type="password" className='bg-transparent w-full border-b-2 px-2 placeholder:text-center'/>
                            <ErrorDiv name="password"/>
                        </div>
                        <div className='flex justify-center my-6'>
                            <FormButton formik={formik}>
                                log in
                            </FormButton>
                        </div>
                        <p className='text-[#4e6862] p-2 text-center'>Don't have an account? <a href="#" className="underline font-semibold cursor-pointer " onClick={registerHandle}> register</a></p>
                    </Form>
                    )}
                </Formik>
            </ModalBox>
            }
            </>
    )
}

export default LoginModal;