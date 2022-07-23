import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header, { TForm } from '../../components/Header'

type Props = {
  // onSignin: (user:TForm) => void
}

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <Header   />
      <Outlet />
      <Footer />
    </div>
  )
}

export default WebsiteLayout