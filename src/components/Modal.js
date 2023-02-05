import React from 'react'


const Modal = () => {
    const [openModal, setOpenModal] = React.useState(false)
    //const [handleModal, setHandleModal] = React.useState(true)
    function closeModal() {
        setOpenModal(openModal  => !openModal)
    }
    function handleModal(){
        setOpenModal(!openModal)
    }

    return (
        <div>
          {!openModal? <button className='bg-slate-600 text-white px-2' onClick={handleModal}>sign in</button> : ""}  
            {openModal && <div className="w-full rounded-lg p-4  bg-blend-overlay  bg-slate-300">
                <button onClick={closeModal} className='ml-80 bg-red-300 p-2'>X</button>
                {/* <div className='text-center bg-green-400'> */}
                <h1 className='mb-4 text-left'>Username</h1>
                <hr></hr>
                <h1 className='mb-4 text-left'>Password</h1>
                <hr className='mb-6'></hr>
                <button className='bg-slate-600 text-white p-3 rounded-lg'>Don't have an account? sign up</button>
                {/* </div> */}
            </div>
            }
        </div>
    )
}

export default Modal