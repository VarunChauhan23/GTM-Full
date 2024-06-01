
import { Link } from 'react-router-dom'
import styles from './card.module.css'
const Card = ({imgUrl,heading,text,price,productId}) => {

  return (
    <div className={styles.card}>
        <img src={imgUrl} alt="Card" className={styles.cardimage}/>
        <div className={styles.cardcontent}>
        <h2 className={styles.cardheading}>{heading}</h2>
        <p className={styles.cardtext}>{text}</p>
        <p className={styles.cardprice}>Price: ₹{price}</p>
        <div className={styles.btncontainer}>
        <Link to={`/product/${productId}`} className={styles.readmorebtn}>READ MORE</Link>
        </div>
        
        </div>
    </div>
  )
}

export default Card