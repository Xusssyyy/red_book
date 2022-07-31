import React,{useState,useEffect} from 'react'
import {Tab,TabItem} from './style'
import { useNavigate } from 'react-router-dom'
import { Tabs } from 'antd-mobile'
import Like from './Like'
import Food from './Food'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Tab>
        <TabItem>
        <span className="iconfont icon-yuzhouxingqiu-12"
        onClick={() => alert("正在开发中，敬请期待:)")}></span>
        </TabItem>
        <TabItem>
          <span onClick={() => alert("正在开发中，敬请期待:)")}>关注</span>
        </TabItem>
        <TabItem>
          <span>发现</span>
        </TabItem>
        <TabItem>
          <span onClick={() => alert("正在开发中，敬请期待:)")}>城市</span>
        </TabItem>
        <TabItem>
        <span className="iconfont icon-sousuo" 
        onClick={() => navigate("/search")}></span>
        </TabItem>
      </Tab>

        <TabItem>
        <Tabs defaultActiveKey='1' style={
          {'--title-font-size':'15px','--active-line-height':'0px',
          '--active-title-color':'#ed2b43'}}>
          <Tabs.Tab title='推荐' key='1'>
              <Like/>
          </Tabs.Tab>
          <Tabs.Tab title='美食' key='2'>
              <Food/>
          </Tabs.Tab>
          <Tabs.Tab title='直播' key='3'>
          </Tabs.Tab>
          <Tabs.Tab title='视频' key='4'>
          </Tabs.Tab>
          <Tabs.Tab title='知识科普' key='5'>
          </Tabs.Tab>
          <Tabs.Tab title='旅行' key='6'>
          </Tabs.Tab>
          <Tabs.Tab title='护肤' key='7'>
          </Tabs.Tab>
          <Tabs.Tab title='职场' key='8'>
          </Tabs.Tab>
        </Tabs>
        </TabItem>
    </div>
  )
}

export default Home
