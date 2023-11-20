import style from "./style.module.css";

const Menu = () => {
    return (<ul className={style.hero_nav_list}>
        <li className={style.hero_nav_item}>About</li>
        <li className={style.hero_nav_item}>Careers</li>
        <li className={style.hero_nav_item}>Events</li>
        <li className={style.hero_nav_item}>Products</li>
        <li className={style.hero_nav_item}>Support</li>
    </ul>)
}

export default Menu
