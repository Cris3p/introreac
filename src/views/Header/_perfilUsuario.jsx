import React from 'react'

const _perfilUsuario = ({usuario}) => {
  return (
    <div className="perfilUsuario centerX centerY">
      <button>
      <span className="fa fa-user-circle"> </span>
      <span>{usuario}</span>
      </button>
      <button>
        <span className='fa fa-caret-down'></span>
      </button>
    </div>
  )
}

export default _perfilUsuario