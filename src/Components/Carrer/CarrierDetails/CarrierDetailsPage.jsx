import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CareerDetailsComponent from './CarrierDetailsComponent';

const CarrierDetailsPage = () => {
  const { id } = useParams();
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    // Fetch job details from the API
    fetch(`https://gtm-backend.onrender.com/api/getjobbyid/${id}`)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setJobDetails(data.data);
        } else {
          // Handle error
          console.error('Failed to fetch job details:', data.message);
        }
      })
      .catch(error => {
        console.error('Error fetching job details:', error);
      });
  }, [id]);

  return (
    <div>
      {jobDetails ? (
        <CareerDetailsComponent
          title={jobDetails.title}
          position={jobDetails.position}
          vacancies={jobDetails.vacancies}
          experience={jobDetails.experience + ' years'}
          location={jobDetails.joblocation}
          joining={jobDetails.joining}
          overview={jobDetails.overview}
          responsibilities={jobDetails.responsibilities}
          requirements={jobDetails.requirements}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CarrierDetailsPage;
