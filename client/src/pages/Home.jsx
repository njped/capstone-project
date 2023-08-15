import React from "react"
import { NavBar } from './components/NavBar.jsx'
import './Home.css';
import { AppHeader } from "./components/AppHeader.jsx";

export function Home() {

  return (
    <> 
      <div id="homePageContainer">
        <div id="homePageNav">
          <NavBar/>
        </div>
        <div id="homeMainContentContainer">
          <div id="homePageHeaderBar">
            <AppHeader/>
          </div>
          <div id="homePageManage">
            <h1>Home Page</h1>
          </div> 
        </div>
      </div>
    </>
  )
}
