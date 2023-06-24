import { useState, useEffect } from "react";
import { getProducts, getProductByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId){
      getProductByCategory(categoryId)
      .then((response) => {
        setProducts(response);
      });
    } else {
      getProducts()
    .then((response) => {
      setProducts(response);
    });
    }
  }, [categoryId])

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;