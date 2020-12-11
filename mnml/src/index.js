import { lazy, mount, route } from 'navi'
import { Router, View } from 'react-navi'
import React from 'react'
import Home from './pages/home'
import ReactDOM from 'react-dom'


const routes = 
    mount({
        '/': route({
            title: 'Home',
            view:<Home />,
        })
    })


ReactDOM.render(
  <Router routes={routes}>
    <View />
  </Router>,
  document.getElementById('root')
);