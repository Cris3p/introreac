import React from 'react'

const _buscador = () => {
  return (
    <div className='buscador'>
      <i className='icono fa fa-location-dot'></i>
      <input type='text' placeholder='Buscar...'></input>
      <button className='icono fa fa-magnifying-glass'></button>
    </div>
  )
}

export default _buscador