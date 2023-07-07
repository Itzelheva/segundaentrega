import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import AlertPurchase from "./AlertPurchase";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    email: "",
    phoneNumber: ""
  });
  const [transactionId, setTransactionId] = useState(""); // Estado para guardar el ID de la transacción

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "comprasdeusuarios"), formData);
      console.log("Document written with ID: ", docRef.id);

      setTransactionId(docRef.id); // Guardar el ID de la transacción en el estado
      setFormData({
        fullName: "",
        address: "",
        email: "",
        phoneNumber: ""
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Nombre completo"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Dirección"
        name="address"
        value={formData.address}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Número telefónico"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Generar compra
      </Button>
      {transactionId && <AlertPurchase transactionId={transactionId} />} 
    </form>
  );
};

export default CheckoutForm;


