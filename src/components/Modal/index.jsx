import { useEffect, useState } from "react";
import style from "./style.module.css";
import logo from "../../assets/logo.svg";
import close from "../../assets/icon-close.svg";

const Modal = (props) => {

    const {ehOpen, closeModal} = props
    const [onHover, setOnOver] = useState(0)

    return (
        <div hidden={!ehOpen} className={style.modal_container}>
            <div className={style.modal_header}>
                <img src={logo} alt="" />
                <img src={close} alt="" width={'25px'} height={'25px'} onClick={() => closeModal()} className={style.close}/>
            </div>
            <ul className={style.modal_list}>
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

export default Modal