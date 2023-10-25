import style from "./style.module.css";
import hero_logo from "./assets/logo.svg";

const App = () => {
  return(
    <div className={style.app_container}>
      <header className={style.header_container}>
        <div className={style.header_content}>
          <nav className={style.navbar_container}>
            <img className={style.hero_logo} src={hero_logo} alt="logo" />
            <ul className={style.hero_nav_list}>
              <li className={style.hero_nav_item}>About</li>
              <li className={style.hero_nav_item}>Careers</li>
              <li className={style.hero_nav_item}>Events</li>
              <li className={style.hero_nav_item}>Products</li>
              <li className={style.hero_nav_item}>Support</li>
            </ul>
          </nav>
          <div className={style.h1_container}>
            <div className={style.h1_board}>
              <h1 className={style.hero_title}>Immersive experiences that deliver</h1>
            </div>

          </div>
        </div>

      </header>




  The leader in interactive VR

  Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.

  Our creations

  See all

  Deep earth
  Night arcade
  Soccer team VR
  The grid
  From up above VR
  Pocket borealis
  The curiosity
  Make it fisheye

  About
  Careers
  Events
  Products
  Support

  © 2021 Loopstudios. All rights reserved.

  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </div>
  )
}

export default App