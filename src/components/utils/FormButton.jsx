import {ImSpinner6} from "react-icons/im"
import {motion} from "framer-motion"

function FormButton({children, formik}){
    return (<button className='bg-[#4e6862] flex justify-center items-center gap-2 text-white py-1 px-4 rounded disabled:bg-[#4e686244] disabled:text-[#ffffffbb]' type='submit' disabled={!(formik.dirty && formik.isValid) || formik.isSubmitting}>
    {children}
    {formik.isSubmitting && <motion.span 
        animate={{rotate:360}}
        transition = {{repeat:Infinity, ease:"linear", duration:2}}
    ><ImSpinner6/></motion.span>}
</button>)
}

export default FormButton