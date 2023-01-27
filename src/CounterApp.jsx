import { useState } from "react";
import PropTypes from "prop-types";



export const EjercicioCounter = ({value}) =>{
    // function eventoCLick (eve){
    //     console.log(eve)
    // }

    const [ counter, setCounter ] = useState( value )
    const sumaCLick = () =>{
        // setCounter( counter + 1 )
        setCounter( (c) => c + 1 )
    }
    const restaCLick = () =>{
        // setCounter( counter + 1 )
        setCounter( (c) => c - 1 )
    }
    const resetCLick = () =>{
        // setCounter( counter + 1 )
        setCounter( (c) => c = 0 )
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ sumaCLick }>
                +1
            </button>
            <button onClick={ restaCLick }>
                -1
            </button>
            <button onClick={ resetCLick }>
                reset
            </button>
        </>
    )
}

EjercicioCounter.protoTypes = {
    value: PropTypes.number.isRequired
}