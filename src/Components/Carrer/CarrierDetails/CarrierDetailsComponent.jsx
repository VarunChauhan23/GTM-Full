
import styles from './CarrerDetailsPage.module.css'; 
import ApplyCard from '../ApplyCard/ApplyCard';

const CareerDetailsComponent = ({ title, position, vacancies, experience, location, joining, overview, responsibilities, requirements }) => {
  return (
    <div className={styles.careercontainer}>
      <div className={styles.careerdetails}>
      <h2>{title}</h2>
      <div className={styles.details}>
        <div>
          <p>Position: {position}</p>
          <p>Vacancies: {vacancies}</p>
          <p>Experience Required: {experience}</p>
          <p>Location: {location}</p>
          <p>Joining Date: {joining}</p>
        </div>
      <div className={styles.overview}>
          <h2>Overview</h2>
          <p>{overview}</p>
        </div>
        <div className={styles.responsibilities}>
          <h2>Responsibilities</h2>
          <ul>
            {responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
        <div className={styles.requirements}>
          <h2>Requirements</h2>
          <ul>
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className={styles.apply}>
      <ApplyCard/>
    </div>
    </div>
    
  );
};

export default CareerDetailsComponent;
