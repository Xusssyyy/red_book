import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {FooterWrapper} from './style' 
import classnames from 'classnames'
import { Badge } from 'antd-mobile'

function Footer() {
  const {pathname}=useLocation()
  if (pathname == '/choose'||pathname=='/search') return
  return (
    <FooterWrapper>
      <Link to="/" className={classnames({active:pathname == '/'})}><span>首页</span></Link>
      <Link to="/shop" className={classnames({active:pathname == '/shop'})}><span>商城</span></Link>
      <Link to="/choose" className={classnames({active:pathname == '/choose'})}><span><i className="iconfont icon-Addtianjia3"></i></span></Link>
      <Link to="/message" className={classnames({active:pathname == '/message'})}><Badge content='5'><span>消息</span></Badge></Link>
      <Link to="/mine" className={classnames({active:pathname == '/mine'})}><span>我</span></Link>
    </FooterWrapper>
  )
}

export default Footer
