import React, { useEffect, useState } from 'react';
import styles from './App.module.css';
import Cards from "./Components/Blog Page/Cards";
import LargeCard from "./Components/Blog Page/LargeCard";
import axios from 'axios';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ParticularBlog from './Components/Blog Page/ParticularBlog';
import NavbarComponent from './Components/Navbar/NavbarComponent';
import TextComponent from './Components/Service Component/TextComponent';
import MainHeading from './Components/Service Component/MainHeading';
import ButtonComponent from './Components/Service Component/ButtonComponent';
import Slider from './Components/Service Component/Slider';
import AllComponets from "./Pages/AllPage/AllComponets";
import IndividualProductPage from "./Pages/ProductPage/IndividualProductPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import CarrierDetailsPage from "./Components/Carrer/CarrierDetails/CarrierDetailsPage";
import Team from './Components/Team Page/Team';

function App() {

  const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === "initial-card-container") {
            if (window.innerWidth < 700) {
              entry.target.classList.add(styles['slideFromRight']);
            } else {
              entry.target.classList.add(styles['slideFromBottom']);
            }
          } else if (entry.target.id === "large-card-container") {
            if (window.innerWidth < 700) {
              entry.target.classList.add(styles['slideFromLeft']);
            } else {
              entry.target.classList.add(styles['slideFromRight']);
            }
          } else {
            const sectionIndex = Array.from(document.querySelectorAll('section')).indexOf(entry.target);
            const isMobile = window.innerWidth < 700;
            if (isMobile) {
              if (sectionIndex % 2 === 0) {
                entry.target.classList.add(styles['slideFromLeft']);
              } else {
                entry.target.classList.add(styles['slideFromRight']);
              }
            } else {
              if (sectionIndex % 3 === 0) {
                entry.target.classList.add(styles['slideFromLeft']);
              } else if (sectionIndex % 3 === 1) {
                entry.target.classList.add(styles['slideFromBottom']);
              } else {
                entry.target.classList.add(styles['slideFromRight']);
              }
            }
            observer.unobserve(entry.target);
          }
        }
      });
    });

    document.querySelectorAll('section').forEach(e => {
      observer.observe(e);
    });

    const initialCardContainer = document.getElementById("initial-card-container");
    if (initialCardContainer) {
      observer.observe(initialCardContainer);
    }

    const largeCardContainer = document.getElementById("large-card-container");
    if (largeCardContainer) {
      observer.observe(largeCardContainer);
    }

    const fetchBlogs = () => {
      try {

        const Api_Uri = "https://gtm-backend.onrender.com/api/blog/getall";

        axios.get(Api_Uri).then((res) => {
          setPostArray(res.data);
        });
      } catch (error) {
        console.log("error: ", error);
      }
    }

    fetchBlogs();
  }, [postArray]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<NavbarComponent />}></Route>
        <Route path="/service" element={<><MainHeading />
          <div className={styles['main-container']}>
            <TextComponent />
            <Slider />
          </div>
          <ButtonComponent /></>}>
        </Route>
        <Route path="/products" element={<AllComponets/>}/>
        <Route path="/products/product" element={<ProductPage/>} />
        <Route path="/products/product/:id" element={<IndividualProductPage/>} />
        <Route path="/products/carrier/:id" element={<CarrierDetailsPage/>}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/blogs" element={<>
          <p className={styles['main-heading']}>Latest Blogs</p>
          <div className={styles['top-container']}>
            <div id='initial-card-container' className={styles["cards"]}>
              {postArray.slice(-2).reverse().map((post, index) => {
                return (
                  <Cards key={index} image_url={post.avatar} desc={post.desc} card_title={post.title} _id={post._id} />
                );
              })}
            </div>
            <div id='large-card-container' className={styles["large-card-div"]}>
              <LargeCard postArray={postArray} />
            </div>
          </div>
          <div className={styles['bottom-container']}>
            <p className={styles['main-heading']}>Blogs</p>
            <div className={styles['blog-cards']}>
              {postArray.map((post, index) => {
                return (
                  <section key={index} className={styles["animated-cards"]}>
                    <Cards image_url={post.avatar} desc={post.desc} card_title={post.title} _id={post._id} />
                  </section>
                );
              })}
            </div>
          </div>
        </>}>
        </Route>
        <Route path="/particularBlog/:_id" element={<ParticularBlog />}>
        </Route>
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
