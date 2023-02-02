// const newMessage= {
//     message: 'Joselu que es???',
//     title: 'Maricon',
//     edad: 99,
//     capacidadMental: 'ninguna'
// };

// const operacionSuma =()=> {
//     return 4 + 10;
// }
import PropTypes from "prop-types";
export const CarlosWapo = ( {
    title, 
    subTitle,
    name
} ) =>{
    // console.log(props)
    
    return (
        <> 
        <h1 data-testid="test-title">{ title }</h1>
        {/* <h1>Cuantos coñitos hay? { operacionSuma() }</h1> */}
            {/* <h1>Hola { JSON.stringify(newMessage) }</h1> */}
            {/* <h2>{subTitle}</h2> */}
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <p>{name}</p>
            
            <p>Ere gey</p>
        </>
    )
}

CarlosWapo.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}
CarlosWapo.defaultProps = {
    // title: 'No hay titulo, pero david esta gordito',
    subTitle: 'queh no hay subtiti',
    name:'carlos jesus'
}