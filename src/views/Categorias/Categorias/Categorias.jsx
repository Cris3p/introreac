import React from 'react';
import ItemCategoria from './_itemCategoria';

const listaCategorias = [
  { nombres: 'Pizza', icon: 'fas fa-pizza-slice' },  // Asegúrate de que 'icon' esté correcto
  { nombres: 'Hamburguesas', icon: 'fas fa-hamburger' },
  { nombres: 'Cócteles', icon: 'fas fa-cocktail' },
  { nombres: 'Postres', icon: 'fas fa-ice-cream' },
  { nombres: 'Bebidas', icon: 'fas fa-beer' },
  { nombres: 'Sushi', icon: 'fas fa-fish' },
];

const Categorias = () => {
	return (
	  <div className="categorias">
		{listaCategorias.map((item, index) => {
		  console.log('Item en el map:', item); // Muestra el objeto 'item'
		  return <ItemCategoria key={index} nombre={item.nombres} icono={item.icon} />;
		})}
	  </div>
	);
  };
  

export default Categorias;
