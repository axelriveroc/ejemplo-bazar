import { Box, TextField } from "@mui/material";
import { useState } from "react";

const ProductsForm = () => {
  const [producData, setProductData] = useState({
    title: "",
    description: "",
    stock: 0,
    unit_price: 0,
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(producData);
  };
  const handleChange = (e) => {
    setProductData({...producData, [e.target.name]:e.target.value})
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="nombre"
          name="title"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="descripcion"
          name="description"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="stock"
          name="stock"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="precio"
          name="unit_price"
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="categoria"
          name="category"
          onChange={handleChange}
        />
      </form>
    </Box>
  );
};

export default ProductsForm;
