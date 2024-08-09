import { useContext, useState } from "react"
import { Example1 } from "./Example1"
import { text } from "./Example1"

export const Example2 = () =>{
let {state} = useContext(text)
    return(
        <>
        <h1>{state}</h1>
        </>
        )
}
