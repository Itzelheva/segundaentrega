import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(db, "products", itemId);
        const productSnapshot = await getDoc(productRef);
        
        if (productSnapshot.exists()) {
          setProduct({ id: productSnapshot.id, ...productSnapshot.data() });
        } else {
          console.error("Product not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      {product ? <ItemDetail {...product} /> : null}
    </div>
  );
};

export default ItemDetailContainer;

