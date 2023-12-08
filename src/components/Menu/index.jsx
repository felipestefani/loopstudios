import { useState } from "react";
import style from "./style.module.css";
import hamburger from "../../assets/icon-hamburger.svg";

const Menu = (props) => {

    const { ehFooter } = props
    const [onHover, setOnOver] = useState(0)

    return (
        <div>
            <img src={hamburger} alt="menu hamburguer" className={`${style.hamburger} ${ehFooter ? style.Eh : ''}`} />
            <ul className={`${style.hero_nav_list} ${!ehFooter ? '' : style.mostra }`}>
                <div className={`${style.menu_box} `} onMouseEnter={() => setOnOver(1)} onMouseLeave={() => setOnOver(0)}>
                    <li className={style.hero_nav_item} >About</li>
                    <div className={`${onHover == 1 ? style.underline : ''}`}></div>
                </div>
                <div className={style.menu_box} onMouseEnter={() => setOnOver(2)} onMouseLeave={() => setOnOver(0)}>
                    <li className={style.hero_nav_item}>Careers</li>    
                    <div className={`${onHover == 2 ? style.underline : ''}`}></div>
                </div>
                <div className={style.menu_box} onMouseEnter={() => setOnOver(3)} onMouseLeave={() => setOnOver(0)}>
                    <li className={style.hero_nav_item}>Events</li>    
                    <div className={`${onHover == 3 ? style.underline : ''}`}></div>
                </div>
                <div className={style.menu_box} onMouseEnter={() => setOnOver(4)} onMouseLeave={() => setOnOver(0)}>
                    <li className={style.hero_nav_item}>Products</li>    
                    <div className={`${onHover == 4 ? style.underline : ''}`}></div>
                </div>
                <div className={style.menu_box} onMouseEnter={() => setOnOver(5)} onMouseLeave={() => setOnOver(0)}>
                    <li className={style.hero_nav_item}>Support</li>    
                    <div className={`${onHover == 5 ? style.underline : ''}`}></div>
                </div>
            </ul>
        </div>
    )
}

export default Menu
