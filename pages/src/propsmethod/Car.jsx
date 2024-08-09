import React from "react";




export const Value = () => {

    const name = "GHJ"

    return (
        <div>
            <Car brand={name} />
        </div>
    );
};


export const Car = (props) => {
let letter = "Letter"
    return (
        <>

            <h1>Rate of {props.brand} amount is $10</h1>
            <Text brand={letter}/>

        </>
    )
}


export const Text = ({brand}) => {

    let crtvalue = "ten"
    return (
        <>
            <p>{brand}</p>
        </>
    )

}


