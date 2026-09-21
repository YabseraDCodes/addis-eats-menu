import React from 'react'
import { Suspense } from 'react';
import { Header } from "./Header";
import Menu from "../menu/Menu";
import { Footer } from "./Footer";
import { Outlet, Link } from 'react-router-dom';
import ErrorBoundary from "../errors/ErrorBoundary";


function Layout() {
  return (

    <div>
      <div className="j">
        <Header />
        <div className="Main">
          <div className="Main-overlay">
            <ErrorBoundary>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </ErrorBoundary>
          </div>
          <Footer />
        </div>
      </div>
    </div>

  )
}

export default Layout