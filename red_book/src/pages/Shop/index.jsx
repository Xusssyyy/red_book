import React, { useState,useEffect } from "react";
import {Top,Banner,BannerItem,Tab,Img,Pop,PopWrapper} from './style'
import { NavLink } from 'react-router-dom'
import { SearchBar,Tabs,Popup } from "antd-mobile";
import Recommend from "./Recommend";
import Sport from './Sport'
import cart from '../../assets/cart.png'

const Shop = () =>{
    const [visible2, setVisible2] = useState(false)
    return(
        <div>
        <Top>
            <Banner>
                <BannerItem>
                <span className="iconfont icon-yuzhouxingqiu-12"
                    onClick={() => alert("正在开发中，敬请期待:)")}></span>
                </BannerItem>
                <BannerItem>
                    <NavLink to='/search'>
                    <SearchBar 
                    className="searchbar"
                    placeholder='请输入内容'
                    style={{
                        '--border-radius': '100px',
                        '--background': '#f5f5f5',
                        '--height': '30px',
                        '--placeholder-color':'#afafaf',    
                    }}
                    />
                    </NavLink>
                </BannerItem>
                <BannerItem>
                <span className="iconfont icon-dingdan"
                    onClick={() => alert("正在开发中，敬请期待:)")}></span>
                </BannerItem>
                <BannerItem>
                <span className="iconfont icon-gengduo"
                   onClick={() => { setVisible2(true) }}></span>
                   <Pop>
                        <Popup
                        visible={visible2}
                        onMaskClick={() => { setVisible2(false) }}
                        position='top'
                        bodyStyle={{ height: '215px' }}>
                            <PopWrapper>
                            <div className="more">更多功能</div>
                            <div className="grid">
                            <div className="grid_icon">
                                <i className="iconfont icon-icon01"></i>
                                <span>购物车</span>
                            </div>
                            <div className="grid_icon">
                                <i className="iconfont icon-dingdan"></i>
                                <span>订单</span>
                            </div>
                            <div className="grid_icon">
                                <i className="iconfont icon-wodeqiaquan"></i>
                                <span>卡券</span>
                            </div>
                            <div className="grid_icon">
                                <i className="iconfont icon-tubiaozhizuomoban-"></i>
                                <span>心愿单</span>
                            </div>
                            <div className="grid_icon">
                                <i className="iconfont icon-R_square"></i>
                                <span>小红书会员</span>
                            </div>
                            <div className="grid_icon">
                                <i className="iconfont icon-kefu"></i>
                                <span>客服</span>
                            </div>
                            <div className="grid_icon">
                                <i className="iconfont icon-dizhiguanli"></i>
                                <span>地址管理</span>
                            </div>
                            <div className="grid_icon">
                                <i className="iconfont icon-fenlei"></i>
                                <span>分类</span>
                            </div>
                            </div>
                            </PopWrapper>
                        </Popup>
                    </Pop>
                </BannerItem>
                </Banner>
            </Top>
            <BannerItem>
                <Tabs defaultActiveKey='1' style={
                {'--title-font-size':'15px','--active-line-height':'0px',
                '--active-title-color':'#ed2b43'}}>
                <Tabs.Tab title='推荐' key='1'>
                    <Recommend />
                </Tabs.Tab>
                <Tabs.Tab title='运动' key='2'>
                    <Sport />
                </Tabs.Tab>
                <Tabs.Tab title='家居' key='3'>
                </Tabs.Tab>
                <Tabs.Tab title='母婴' key='4'>
                </Tabs.Tab>
                <Tabs.Tab title='时尚' key='5'>
                </Tabs.Tab>
                <Tabs.Tab title='食品' key='6'>
                </Tabs.Tab>
                <Tabs.Tab title='配饰' key='7'>
                </Tabs.Tab>
                <Tabs.Tab title='家电' key='8'>
                </Tabs.Tab>
                <Tabs.Tab title='美妆' key='9'>
                </Tabs.Tab>
                <Tabs.Tab title='护肤' key='10'>
                </Tabs.Tab>
                </Tabs>
            </BannerItem>      
            <Img>
            <NavLink to='/shopcart'>
            <img src={cart} alt="" />
            </NavLink>
            </Img>      
        </div>
    )
 }

 export default Shop