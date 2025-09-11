import React from 'react'

const ItemCategoria = ({nombre}, {icono}) => {
  return (
    <div className='item-categoria'>
        <div className='fa-solid fa-bowl-food'></div>
        <span>Ramen del Chino</span>
    </div>
  )
}

export default ItemCategoria

// <div>
// <div className='fa {iconoCategoria}'></div>
// <span>{nombreCategoria}</span>
// </div>