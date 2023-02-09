import React from 'react'


const SignUp = () => {
    const [createAccountModal, setCreateAccountModal] = React.useState(false)
    function closeModal() {
        setCreateAccountModal(createAccountModal => !createAccountModal)
    }
    function handleModal() {
        setCreateAccountModal(!createAccountModal)
    }

    return (
        <div>
            {!createAccountModal ? <button className='bg-slate-600 text-white px-2' onClick={handleModal}>sign up</button> : ""}
            {createAccountModal && <div className="w-full rounded-lg p-4  bg-blend-overlay  bg-slate-300">
                <div className='md:flex justify-between  pb-2 w-[300px]'>
                    <p className='text-2xl'>Sign up</p>
                    <button onClick={closeModal} className='bg-[#4e6862] text-white rounded px-2'>x</button>
                </div>

                
                <h1 className='mb-4 text-left'>Your name</h1>
                <hr></hr>
                <h1 className='mb-4 text-left'>Your email</h1>
                <hr></hr>
                <h1 className='mb-4 text-left'>Your password</h1>
                <hr className='mb-6'></hr>
               
            </div>
            }
        </div>
    )
}

export default SignUp