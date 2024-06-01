import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Philosophy.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import StateFadeMenu from "./StateFadeMenu";
import DepartmentFadeMenu from "./DepartmentFadeMenu";

function AllCarrier() {
  const [jobs, setJobs] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  useEffect(() => {
    AOS.init({ duration: "1000" });
    const fetchJobs = async (state, department) => {
      try {
        const response = await fetch("https://gtm-backend.onrender.com/api/getalljobs");
        const data = await response.json();
        if (data.success) {
          let filteredJobs = data.data;
          if (state) {
            filteredJobs = filteredJobs.filter(job => normalizeString(job.joblocation) === normalizeString(state));
            console.log(filteredJobs);
          }
          if (department) {
            filteredJobs = filteredJobs.filter(job => normalizeString(job.department) === normalizeString(department));
            console.log(filteredJobs);
          }
          setJobs(filteredJobs);
        } else {
          console.error("Failed to fetch jobs:", data.message);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs(selectedState, selectedDepartment);
  }, [selectedState, selectedDepartment]);

  const handleStateSelect = (state) => {
    setSelectedState(state);
  };

  const handleDepartmentSelect = (department) => {
    setSelectedDepartment(department);
  };

  const normalizeString = (str) => {
    return str.toLowerCase().replace(/\s/g, "");
  };

  return (
    <div>
      <div className="selectState">
        <h4>Filter By: </h4>
        <StateFadeMenu onSelectState={handleStateSelect} />
        <DepartmentFadeMenu onSelectDepartment={handleDepartmentSelect} />
      </div>
      <div className={styles.cardContainer}>
        {jobs.map((job) => (
          <Link key={job._id} to={`/carrier/${job._id}`} className={styles.card1} data-aos="fade-right">
            <img src={job.avatar} alt={job.title} />
            <div className={styles.centered}>
              <strong>{job.title}</strong>
            </div>
            <div className={styles.detailContainer}>
              More details
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllCarrier;
