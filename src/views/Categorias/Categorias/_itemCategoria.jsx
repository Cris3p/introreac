import React from 'react'

const listaCategorias=[
  {nombre:'Pizza', icon:'fa-pizza-circle'},
  {nombre:'Hamburguesas', icon:'fa-hamburger'},
  {nombre:'Pizza', icon:'fa-cocktail'},
  {nombre:'Pizza', icon:'fa-ice-cream'},
  {nombre:'Bebidas', icon:'fa-leaf'},
  {nombre:'Sushi', icon:'fa-fish'},

]

const ItemCategoria = ({nombre}, {icono}) => {
  return (
    <div className='item-categoria'>
        <div className={`fa-solid ${icono}`}></div>
        <span>{nombre}</span>
    </div>
  )
}

export default ItemCategoria

// <div>
// <div className='fa {iconoCategoria}'></div>
// <span>{nombreCategoria}</span>
// </div>