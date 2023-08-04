import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { db, uploadFile } from "../../../firebaseConfig";
import { collection, updateDoc, addDoc, doc } from "firebase/firestore";

const ProductsForm = ({ productSelected, setProductSelected, handleClose }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    unit_price: 0,
    stock: 0,
    category: "",
    image: "",
  });

  const [file, setFile] = useState(null);
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);

  const handleImage = async () => {
    try {
      setLoadingImage(true);
      let url = await uploadFile(file);
      setIsImageUpload(true);
      if (productSelected.title) {
        setProductSelected({ ...productSelected, image: url });
      } else {
        setNewProduct({ ...newProduct, image: url });
      }
      setLoadingImage(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let productsCollection = collection(db, "products");

    if (productSelected.title) {
      let data = {
        ...productSelected,
        unit_price: +productSelected.unit_price,
        stock: +productSelected.stock,
      };
      updateDoc(doc(productsCollection, productSelected.id), data).then(() => {
        handleClose();
      });
    } else {
      let data = {
        ...newProduct,
        unit_price: +newProduct.unit_price,
        stock: +newProduct.stock,
      };
      addDoc(productsCollection, data).then(() => {
        handleClose();
      });
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
        {file && (
          <Button onClick={handleImage} variant="contained" type="button">
            Cargar imagen
          </Button>
        )}
        {loadingImage && <h5>Cargando...</h5>}
        <Button
          type="submit"
          variant="contained"
          disabled={!isImageUpload && !productSelected.title}
        >
          {productSelected.title ? "Modificar" : "Crear"}
        </Button>
      </form>
    </Box>
  );
};

export default ProductsForm;
