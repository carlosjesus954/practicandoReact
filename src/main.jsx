import React from 'react';
import ReactDOM from 'react-dom/client';

import { EjercicioCounter } from './CounterApp'
// import { CarlosWapo } from './FirstApp'
import './styles.css';

ReactDOM.createRoot( document.querySelector('#root') ).render(
    <React.StrictMode>
        <EjercicioCounter value={0} />
        {/* <CarlosWapo title='Hola, soy gey, david es como una ballena'/> */}
    </React.StrictMode>
)