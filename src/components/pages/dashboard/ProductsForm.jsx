import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { db, uploadFile } from "../../../firebaseConfig";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";

const ProductsForm = ({ productSelected, setProductSelected }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    unit_price: 0,
    stock: 0,
    category: "",
    image: "",
  });

  const [file, setFile] = useState(null);

  const handleImage = async () => {
    let url = await uploadFile(file);
    if (productSelected.title) {
      setProductSelected({ ...productSelected, image: url });
    } else {
      setNewProduct({ ...newProduct, image: url });
    }
  };
  console.log(productSelected);

  const handleSubmit = (e) => {
    e.preventDefault();
    let productsCollection = collection(db, "products");

    if (productSelected.title) {
      let data = {
        ...productSelected,
        unit_price: +productSelected.unit_price,
        stock: +productSelected.stock,
      };
      updateDoc(doc(productsCollection, productSelected.id), data);
    } else {
      let data = {
        ...newProduct,
        unit_price: +newProduct.unit_price,
        stock: +newProduct.stock,
      };
      addDoc(productsCollection, data);
    }
  };
  const handleChange = (e) => {
    if (productSelected.title) {
      setProductSelected({
        ...productSelected,
        [e.target.name]: e.target.value,
      });
    } else {
      setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
    }
  };

  return (
    <Box>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          variant="outlined"
          defaultValue={productSelected?.title}
          label="nombre"
          name="title"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          defaultValue={productSelected?.description}
          label="descripcion"
          name="description"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          defaultValue={productSelected?.unit_price}
          label="precio"
          name="unit_price"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          defaultValue={productSelected?.stock}
          label="stock"
          name="stock"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          defaultValue={productSelected?.category}
          label="categoria"
          name="category"
          onChange={handleChange}
        />
        {/* ACA INPUT FILE  */}
        <TextField type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button onClick={handleImage}>Cargar imagen</Button>
        <Button type="submit" variant="contained">
          {productSelected.title ? "Modificar" : "Crear"}
        </Button>
      </form>
    </Box>
  );
};

export default ProductsForm;
