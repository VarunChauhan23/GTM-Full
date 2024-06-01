import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import iphone from "../../assets/iphone.jpg";
import style from "./IndividualProductPage.module.css";

const IndividualProductPage = () => {
  const { id } = useParams(); // Extract the 'id' parameter from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const images = [
    iphone,
    "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN.jpg?v=1694605258",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15prohero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369818",
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://gtm-backend.onrender.com/api/product/${id}`
        );
        setProduct(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={style.productContainer}>
          <div className={style.sideImg}>
            <div>
              <ul className={style.piclist}>
                {images.map((image, index) => (
                  <li key={index} onClick={() => handleImageClick(image)}>
                    <img src={image} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={style.imgBtn}>
            <div className={style.currImg}>
              <img src={currentImage} alt="" />
            </div>
            <div>
              <button className={style.addCart}>ADD TO CART</button>
              <button className={style.buyBtn}>BUY NOW</button>
            </div>
          </div>
          <div className={style.productDetails}>
            <div>
              <p className={style.prodName}>{product.name}</p>
              <div>
                <div>
                  <span className={style.prodPrice}>₹{product.price}</span>
                  <span className={style.prodDiscount}><del>₹{product.price}</del></span>
                </div>
                <p className={style.prodCat}>Category: {product.category.name}</p>
                <p className={style.prodCat}>Sub-Category: {product.subcategory.name}</p>
                <div className={style.prodDes}>
                  <span>Description:-</span>
                  {product.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndividualProductPage;
