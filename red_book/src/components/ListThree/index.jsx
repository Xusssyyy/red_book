import React,{useState} from 'react'
import classnames from 'classnames'
import LazyLoad from 'react-lazyload'
import red from '../../assets/red.jpg'

const ListThree=({source}) =>{

  const [isLike, SetIsLike] = useState(false)
  const changeLike = () => {
      SetIsLike(!isLike)
    }

  return (
    <div>
       <div className="list">
       <LazyLoad
              placeholder={<img width="100%" 
              height="100%" src={red} className="list-img"/>}>
        <img src={source.img} className="list-img" />
       </LazyLoad>
          <div className="list-content">{source.content}</div>
          <div className="list-author">
            <img src={source.icon} className="icon-img"></img>
            <div className="list-h">{source.author}</div>
            <i className={classnames(
              "iconfont",
              {"icon-aixin1": !isLike},
              {"icon-aixin2": isLike},
              {"active": isLike}
            )}
              onClick={()=>changeLike()}
            >
            </i>
          </div>
        </div>
    </div>
  )
}

export default ListThree
