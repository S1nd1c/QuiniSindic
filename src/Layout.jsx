import React from 'react'
import Header from './components/Header'
import Routes from './AppRoutes'

function Layout() {
  return (
    <div className='h-screen'>
        <Header />
        <Routes />
    </div>
  )
}

export default Layout