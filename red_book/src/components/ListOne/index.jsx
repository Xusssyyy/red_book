import React from 'react'
import {NavLink} from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import red from '../../assets/red.jpg'

const ListOne=({info}) =>{
  return (
    <div>
      <NavLink to='/detail'>
       <div className="list">
           <LazyLoad
              placeholder={<img width="100%" 
              height="100%" src={red} className="list-img"/>}>
            <img src={info.img} className="list-img" />
           </LazyLoad>
            <div className="list-content">{info.content}</div>
            <span className='list-price'>{info.price}</span>
        </div>
        </NavLink>
    </div>
  )
}

export default ListOne
