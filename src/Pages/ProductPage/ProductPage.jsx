import  { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../Components/Carrer/Products/Card';
import style from './productpage.module.css';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ['Electronics', 'Clothing', 'Books', 'Home Goods'];
  const filters = ['New Arrivals', 'Best Sellers', 'Sale Items', 'Featured'];

  useEffect(() => {
    axios.get('https://gtm-backend.onrender.com/api/product/get')
      .then(response => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const toggleDropdown = (id) => {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('show');
  };

  return (
    <div className={style.productpage}>
      <div className={style.heading}>
        <h1>Our Products</h1>
      </div>
      <div className={style.catContainer}>
        <div className={style.dropdown}>
          <p onClick={() => toggleDropdown('categoryDropdown')}>Category</p>
          <ul id="categoryDropdown" className={style.dropdowncontent}>
            {categories.map(category => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </div>
        <div className={style.dropdown}>
          <p onClick={() => toggleDropdown('filterDropdown')}>Filters</p>
          <ul id="filterDropdown" className={style.dropdowncontent}>
            {filters.map(filter => (
              <li key={filter}>{filter}</li>
            ))}
          </ul>
        </div>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.productlist}>
          {products.map(product => (
            <Card
              key={product._id}
              imgUrl={product.avatar}
              heading={product.name}
              text={product.description}
              price={product.price}
              productId={product._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
