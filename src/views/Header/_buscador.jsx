import React from 'react'

const _buscador = () => {
  return (
    <div className='buscador w-100 d-flex centerX centerY fondoSalmon' >
      <i className='fa fa-location-dot cuadrado'></i>
      <input className='w-100' type='text' placeholder='Buscar...'></input>
      <button className='fa fa-magnifying-glass cuadrado'></button>
    </div>
  )
}

export default _buscador