import style from "./style.module.css";
import hero_logo from "./assets/logo.svg";
import interactive from "./assets/desktop/image-interactive.jpg";
import interactive1 from "./assets/mobile/image-interactive.jpg";
import Menu from "./components/Menu";
import SocialMedia from "./components/SocialMedia";
import cardList from './data/card';
import cardListMobile from './data/cardMobile';
import Card from "./components/Card";

const App = () => {

  return(
    <div className={style.app_container}>
      <header className={style.header_container}>
        <div className={style.header_content}>
          <nav className={style.navbar_container}>
            <img className={style.hero_logo} src={hero_logo} alt="logo" />
            <Menu ehFooter={false} />
          </nav>
          <div className={style.h1_container}>
            <h1 className={style.hero_title}>Immersive experiences that deliver</h1>
          </div>  
        </div>
        <div className={style.hero_mask}></div>
      </header>
      <section className={style.info_container}>
        <div className={style.info_flex_container}>
          <div className={style.info_img_content}>
            <img src={interactive} alt="a man in blue t-shirt using a vr glass" className={style.desktop} />
            <img src={interactive1} alt="a man in blue t-shirt using a vr glass" className={style.mobile} />
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
          <div className={style.creations_header_container}>
            <h2 className={style.creation_title}>Our creations</h2>
            <button className={style.button}>See all</button>
          </div>
          <div className={style.cards_container}>
            {cardList.map( card => (
              <Card key={card.id} name={card.name} url={card.url} id={card.id}/>
            ))}
          </div>
          <div className={style.cards_mobile_container}>
            {cardListMobile.map( card => (
              <Card key={card.id} name={card.name} url={card.url} id={card.id}/>
            ))}
          </div>
        </div>
      </section>
      <footer>
          <div className={style.footer_flex_container}>
            <div className={style.social_media_container}>
              <img className={style.footer_logo} src={hero_logo} alt="logo" />
              <SocialMedia />
            </div>
            <div className={style.footer_menu}>
              <Menu ehFooter={true} />
              <div className={style.brand_rights}>
                © 2021 Loopstudios. All rights reserved.
              </div>
            </div>
            <div className={style.attribution}>
              Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
              Coded by <a href="#">Your Name Here</a>.
            </div>
          </div> 
        </footer>
    </div>
  )
}

export default App