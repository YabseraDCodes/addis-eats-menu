import React from 'react'
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { Outlet, Link } from 'react-router-dom';
import ErrorBoundary from "./ErrorBoundary";


function Layout() {
  return (

    <div>
      <div className="j">
        <Header />
        <div className="Main">
          <div className="Main-overlay">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </div>
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default Layout