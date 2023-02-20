import React, { useState } from 'react'

function Demo() {

    const [name, setName] = useState({firstName:" ", lastName:" "})

    const setFirstName=(e)=>{
            setName({...name,firstName:e.target.value})
    }
    const setLastName=(e)=>{
        setName({...name,lastName:e.target.value})
    }
  return (
    <div>
        <input type='text'  onChange={setFirstName}></input>    
        <input type='text'  onChange={setLastName}></input>
        <h1>Your first name is :{name.firstName}</h1>    
        <h1>Your first name is :{name.lastName}</h1>    
    </div>
  )
}

export default Demo