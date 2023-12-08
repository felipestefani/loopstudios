import style from "./style.module.css";
import facebook from "../../assets/icon-facebook.svg";
import twitter from "../../assets/icon-twitter.svg";
import pinterest from "../../assets/icon-pinterest.svg";
import instagram from "../../assets/icon-instagram.svg";

const SocialMedia = (props) => {

    const {ehMobile} = props

    return (
        <ul className={`${style.social_media_list} ${ehMobile ? style.eh_mobile : style.eh_desktop}`}>
            <li className={style.social_img}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank"><img src={facebook} alt="facebook icon" /></a></li>
            <li className={style.social_img}><a href="https://www.instagram.com/felipestefani/" target="_blank"><img src={twitter} alt="twitter icon" /></a></li>
            <li className={style.social_img}><a href="https://www.linkedin.com/in/felipe-stefani-a35185116/" target="_blank"><img src={pinterest} alt="pinterest icon" /></a></li>
            <li className={style.social_img}><a href="https://www.instagram.com/felipestefani/" target="_blank"><img src={instagram} alt="instagran icon" /></a></li>
        </ul>
    )
}

export default SocialMedia