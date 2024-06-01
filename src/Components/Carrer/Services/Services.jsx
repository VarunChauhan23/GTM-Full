
import styles from './Services.module.css'; 
import img1 from '../../../assets/img1.png';
const servicesData = [
  {
    id: 1,
    image: img1,
    name: 'Service 1',
    category: 'Category 1',
    subcategory: 'Subcategory 1',
    desc: 'Description of Service 1',
  },
  {
    id: 2,
    image: img1,
    name: 'Service 2',
    category: 'Category 2',
    subcategory: 'Subcategory 2',
    desc: 'Description of Service 2',
  },
  
];

const Services = () => {
  return (
    <>
    <div className={styles.servicesheading}>
        <h2 className={styles.headingtext}>Services</h2>
      </div>
    
    <div className={styles.servicescontainer}>
      {servicesData.map(service => (
        <div key={service.id} className={styles.servicecard}>
          <div className={styles.serviceimage}>
            <img src={service.image} alt={service.name} />
          </div>
          <div className={styles.servicedetails}>
            <h3>{service.name}</h3>
            <p><strong>Category:</strong> {service.category}</p>
            <p><strong>Subcategory:</strong> {service.subcategory}</p>
            <p>{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Services;
