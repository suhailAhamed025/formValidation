import React, { useState } from 'react'
import "../component/FormInput.css"

function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const {lable,id,errorMassage, onChange,...inputs }=props

    let handlefocused=(e)=>{
      setFocused(true)
    }
    
  
  return (
    <div className='formInputs'>
        <lable>{lable}</lable>
        <input {...inputs} 
        onChange={onChange} 
        onBlur={handlefocused}  
        onFocus={()=>inputs.name==='confirmPassword'&& setFocused(true)}
        focused={focused.toString()}/>
        <span>{errorMassage}</span>
    </div>
  )
}

export default FormInput