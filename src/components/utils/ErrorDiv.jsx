import React from 'react'
import { ErrorMessage } from 'formik'

const ErrorDiv = ({name}) => {
  return (
	<div className='text-red-700 text-xs'>
		<ErrorMessage name = {name}/>
	</div>
  )
}

export default ErrorDiv