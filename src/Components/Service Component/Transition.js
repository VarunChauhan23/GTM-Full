import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import styles from './Transition.module.css';

// Define an array of texts to transition between
const TEXTS = [
  '√ MERN Stack Web Developer',
  '√ WordPress Web Developer',
  '√ Python Web Developer',
  '√ PHP Web Developer',
  '√ SEO'
];

const Transition = () => {
  const [index, setIndex] = React.useState(0); // State to track the index of the current text

  React.useEffect(() => {
    // Effect to run on component mount and clean-up on unmount
    const intervalId = setInterval(
      () => setIndex((index) => index + 1), // Increment the index every 3 seconds
      3000 // Interval duration: 3 seconds
    );
    return () => clearInterval(intervalId); // Clean-up function to clear the interval
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      {/* Render the TextTransition component */}
      <h1 className={styles["transition-text"]}>
        {/* Provide springConfig for the TextTransition animation */}
        <TextTransition springConfig={presets.wobbly}>
          {/* Render the current text based on the index */}
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h1>
    </>
  );
};

export default Transition;
