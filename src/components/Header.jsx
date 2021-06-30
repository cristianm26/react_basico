import React from 'react'

const Header = ({ titulo }) => {
    /* const edad = 28;

    let mensaje;

    if (edad >= 18) {
        mensaje = 'Eres mayor de Edad'
    } else {
        mensaje = 'eres menor de Edad'
    } */
    return (
        <>
            <h1 className="encabezado">{titulo}</h1>
        </>
    )
}

export default Header
