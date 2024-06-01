
import chair from '../../../assets/chair.jpg';
import people from '../../../assets/people.jpg';
import director from '../../../assets/profile-pic.png';
import styles from './PeopleCard.module.css';

const PeopleCard = () => {
  return (
    <>
    <div className={styles.topcontainer}>
      
      <img
        src={chair}
        alt="Background"
        className={styles.bgimg}
      />
      
      <img
        src={director}
        alt="Small Pic"
        className={styles.directorimg}
      />
      <div className={styles.cardname}>
      <h2 >Gokulnanda Ghorai</h2>
      <p >Managing Director</p>
      </div>
      
    </div>
    <div className={styles.peoplecontainer}>
        <div className={styles.peoplecard}>
        <div className={styles.peoplecardbg}>
        <img src={people} className={styles.peopleimage} alt='people'></img>
        </div>
        <h2 className={styles.peoplename}>Akhila Bai</h2>
        <p className={styles.peopledesignation}>Managing Director</p>
        </div>
        
        <div className={styles.peoplecard}>
        <div className={styles.peoplecardbg}>
        <img src={people} className={styles.peopleimage} alt='people'></img>
        </div>
        <h2 className={styles.peoplename}>Akhila Bai</h2>
        <p className={styles.peopledesignation}>Managing Director</p>
        </div>
        <div className={styles.peoplecard}>
        <div className={styles.peoplecardbg}>
        <img src={people} className={styles.peopleimage} alt='people'></img>
        </div>
        <h2 className={styles.peoplename}>Akhila Bai</h2>
        <p className={styles.peopledesignation}>Managing Director</p>
        </div>
    </div>
    </>
  )
}

export default PeopleCard;