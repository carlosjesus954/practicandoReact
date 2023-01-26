import PropTypes from "prop-types";

export const EjercicioCounter = ({value}) =>{
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ value }</h2>
        </>
    )
}

EjercicioCounter.protoTypes = {
    value: PropTypes.number.Required
}