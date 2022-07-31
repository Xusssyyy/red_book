import React from 'react'
import {NavLink} from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import red from '../../assets/red.jpg'

const ListTwo=({spofo}) =>{
  return (
    <div>
      <NavLink to='/detail'>
       <div className="list">
          <LazyLoad
              placeholder={<img width="100%" 
              height="100%" src={red} className="list-img"/>}>
            <img src={spofo.img} className="list-img" />
          </LazyLoad>
            <div className="list-content">{spofo.content}</div>
            <span className='list-price'>{spofo.price}</span>
        </div>
        </NavLink>
    </div>
  )
}

export default ListTwo
