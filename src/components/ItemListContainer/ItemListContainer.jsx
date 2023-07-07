import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        let productsQuery = query(productsCollection);
        
        if (categoryId) {
          productsQuery = query(productsCollection, where("category", "==", categoryId));
        }
        
        const productsSnapshot = await getDocs(productsQuery);
        const productsData = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProducts(productsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
