import React,{ lazy,Suspense }from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
const Mine = lazy(() => import('../pages/Mine'))
const Message = lazy(() => import('../pages/Message'))
const Shop = lazy(() => import('../pages/Shop'))
const Choose = lazy(() => import('../pages/Choose'))
const Search = lazy(() => import('../pages/Search'))
const RouteConfigs = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/mine" element={<Mine/>}></Route>
        <Route path="/message" element={<Message/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path='/choose' element={<Choose />}></Route>
        <Route path='/search' element={<Search />}></Route>
      </Routes>
      </Suspense>
    </div>
  )
}
export default RouteConfigs
