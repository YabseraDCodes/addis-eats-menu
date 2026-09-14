import React from 'react'
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
        <div className="j">
        <Header />
        <div className="Main">
          <div className="Main-overlay">
            <Link to="/sec">sec</Link>
            <Outlet/>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout