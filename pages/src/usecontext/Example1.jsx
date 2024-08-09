import { createContext, useState } from "react"
import { Example2 } from "./Example2"

export const text = createContext()
export const Example1=()=>{
const [state,setState]= useState("Hello world")

    return(
        <text.Provider value={{state}}>
            <Example2/>
        </text.Provider>
    )
}
//-sign up

//user name
//dob
//contact number
//email
//enter pass
//re-enter
//submit button


//login 

//user name
//password
