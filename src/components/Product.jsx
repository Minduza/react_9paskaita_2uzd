import "./style.css";
import PropTypes from "prop-types";

const Product = ({ image, title, price, deleteHandle }) => {
  return (
    <div className="productCard">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <span>€{price}</span>
      <button onClick={deleteHandle}>Ištrinti</button>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  deleteHandle: PropTypes.func,
};

export default Product;
