import style from "./style.module.css";
import hero_logo from "./assets/logo.svg";
import interactive from "./assets/desktop/image-interactive.jpg";

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
            <h1 className={style.hero_title}>Immersive experiences that deliver</h1>
          </div>
        </div>
      </header>
      <section className={style.info_container}>
        <div className={style.info_flex_container}>
          <div className={style.info_img_content}>
            <img src={interactive} alt="a man in blue t-shirt using a vr glass" />
          </div>
          <div className={style.info_text_content}>
            <h2>The leader in interactive VR</h2>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
            projects for some of the best companies around the globe. Our award-winning 
            creations have transformed businesses through digital experiences that bind 
            to their brand.</p>
          </div>
        </div>   
      </section>
      <section className={style.creations_container}>
        <div className={style.creations_flex_container}>
          <div>
            <h2>Our creations</h2>
            <button>See all</button>
          </div>
          <div>
          Deep earth
          Night arcade
          Soccer team VR
          The grid
          From up above VR
          Pocket borealis
          The curiosity
          Make it fisheye
          </div>
        </div>
        <footer>
          <div>
            <div>

            </div>
            <div>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
              <div>
                © 2021 Loopstudios. All rights reserved.
              </div>
            </div>
          </div>
          <div class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </div>
        </footer>
      </section>
    </div>
  )
}

export default App