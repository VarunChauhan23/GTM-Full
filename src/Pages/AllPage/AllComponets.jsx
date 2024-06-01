
import Products from '../../Components/Carrer/Products/Products';
import Carrier from '../../Components/Carrer/CarrierHomepage/Carrier';
import PeopleCard from '../../Components/Carrer/PeopleCard/PeopleCard';
import Services from '../../Components/Carrer/Services/Services';
import ProductPage from '../ProductPage/ProductPage';
import AllCarrier from '../../Components/Carrer/AllCarrier/AllCarrier';

const AllComponets = () => {
  return (
    <div>
      <Products />
      <Carrier />
      <PeopleCard />
      <Services />
      <ProductPage />
      <AllCarrier />
    </div>
  )
}

export default AllComponets