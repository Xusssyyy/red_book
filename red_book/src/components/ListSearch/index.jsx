import React from 'react'
import {NavLink} from 'react-router-dom'

const ListSearch=({things}) =>{
  return (
    <div>
      <NavLink to='/detail'>
       <div className="list">
           <img src={things.img} className="list-img" />
            <div className="list-content">{things.content}</div>
            <span className='list-price'>{things.price}</span>
        </div>
        </NavLink>
    </div>
  )
}

export default ListSearch