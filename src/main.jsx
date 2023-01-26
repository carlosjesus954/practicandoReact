import React from 'react';
import ReactDOM from 'react-dom/client';

import { EjercicioCounter } from './CounterApp'
import './styles.css';

ReactDOM.createRoot( document.querySelector('#root') ).render(
    <React.StrictMode>
        <EjercicioCounter value={123} />
    </React.StrictMode>
)