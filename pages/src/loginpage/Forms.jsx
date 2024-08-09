import React, { useState } from 'react'
import { Form } from 'react-router-dom'

export const Forms =()=> {
    const[name,setName] = useState("")
    const handleSubmit=(event)=>{
        handleSubmit.preventDefault()
    }
   


  return (
    <form>
        <label>User Name:
            <input type="text" value={name} onChange={(e) =>setName(e.target.value)}/>
        </label>
        {/* <label></label> */}
        {/* <input type='submit'vl/> */}
    </form>
  )
}

