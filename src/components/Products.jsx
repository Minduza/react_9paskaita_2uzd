import { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://golden-whispering-show.glitch.me/")
      .then((resp) => resp.json())
      .then((response) => {
        setProducts(response);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const deleteItem = (index) => {
    setProducts((prevState) => {
      const newList = prevState.filter((product) => product.id !== index);
      return newList;
    });
  };

  return (
    <div className="wrapper">
      {loading ? (
        <span className="loading">Loading...</span>
      ) : (
        products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            deleteHandle={() => deleteItem(product.id)}
          />
        ))
      )}
    </div>
  );
};

export default Products;
