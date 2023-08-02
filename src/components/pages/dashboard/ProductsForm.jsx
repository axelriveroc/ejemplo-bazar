import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const ProductsForm = ({ productSelected, setProductSelected }) => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    unit_price: 0,
    stock: 0,
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (productSelected.title) {
      let data = {
        ...productSelected,
        unit_price: +productSelected.unit_price,
        stock: +productSelected.stock,
      };
      console.log("se actualiza: ", data);
    } else {
      let data = {
        ...newProduct,
        unit_price: +newProduct.unit_price,
        stock: +newProduct.stock,
      };
      console.log("se crea: ", data);
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
      <form onSubmit={handleSubmit}>
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
        <Button type="submit" variant="contained">
          Crear / modificar
        </Button>
      </form>
    </Box>
  );
};

export default ProductsForm;
