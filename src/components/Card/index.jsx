import style from './style.module.css'

const Card = (props) => {

   const { url, name } = props

    return (
        <div className={style.card_container}>
            <img src={url} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default Card