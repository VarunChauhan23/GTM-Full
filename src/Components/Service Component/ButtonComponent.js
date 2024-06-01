import React from "react";
import Button from "@mui/material/Button"; 
import styles from './ButtonComponent.module.css';

// ButtonComponent functional component
const ButtonComponent = () => {
  return (
    // Container for the button, centered using flexbox
    <div className={styles["button-container"]}>
      {/* Button component with customized styles */}
      <Button className={styles["button"]} variant="outlined" color="error" size="large">
        View All
      </Button>
    </div>
  );
};

export default ButtonComponent; // Export the ButtonComponent
