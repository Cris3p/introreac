import React from 'react'

const ItemCategoria = ({ nombre, icono }) => {
  return (
    <div className='item-categoria'>
      <i className={`fa-solid ${icono}`}></i>
      <span>{nombre}</span>
    </div>
  )
}

export default ItemCategoria