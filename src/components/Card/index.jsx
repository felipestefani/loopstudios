import style from './style.module.css'

const Card = (props) => {

   const { url, name, id } = props

    return (
        <div className={style.card_container}>
            <img className={style.card_image} src={url} alt={name}/>
            <div className={style.mask}></div>
            <h3 className={`${style.card_title} ${id == 'meu4' ? style.meu4 : ''} ${id == 'meu5' ? style.meu5 : ''}`}>{name}</h3>       
        </div>
    )
}

export default Card