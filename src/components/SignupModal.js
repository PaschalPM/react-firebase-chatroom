import React from 'react'


const Modal = () => {
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
            {!openModal ? <button className='bg-slate-600 text-white px-2' onClick={handleModal}>sign up</button> : ""}
            {openModal && <div className="w-full rounded-lg p-4  bg-blend-overlay  bg-slate-300">
                {/* <div className='md:flex justify-between w-full bg-green-700'> */}
                    <p className='text-2xl'>Welcome back!</p>
                    <button onClick={closeModal} className='ml-80 bg-[#4e6862] text-white rounded px-2'>x</button>
                {/* </div> */}

                {/* <div className='text-center bg-green-400'> */}
                <h1 className='mb-4 text-left'>Email</h1>
                <hr></hr>
                <h1 className='mb-4 text-left'>Password</h1>
                <hr className='mb-6'></hr>
                <button className='bg-[#4e6862] text-white p-3 rounded-lg'>Don't have an account? sign up</button>
                {/* </div> */}
            </div>
            }
        </div>
    )
}

export default Modal