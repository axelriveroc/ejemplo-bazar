import { Box, Button } from "@mui/material";

const ProductList = ({ products, filterByCategory, category }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          columnGap: "30px",
          rowGap: "10px",
          padding: "0 40px"
        }}
      >
        <Button
          variant={category === "all" ? "contained" : "outlined"}
          onClick={() => filterByCategory("all")}
        >
          Todas
        </Button>
        <Button
          variant={category === "tazas" ? "contained" : "outlined"}
          onClick={() => filterByCategory("tazas")}
        >
          Tazas
        </Button>
        <Button
          variant={category === "cuadros" ? "contained" : "outlined"}
          onClick={() => filterByCategory("cuadros")}
        >
          Cuadros
        </Button>
        <Button
          variant={category === "plantas" ? "contained" : "outlined"}
          onClick={() => filterByCategory("plantas")}
        >
          Plantas
        </Button>
        <Button
          variant={category === "almohadas" ? "contained" : "outlined"}
          onClick={() => filterByCategory("almohadas")}
        >
          Almohadas
        </Button>
      </Box>

      <div style={{width: "100%"}}>
        {products.map((product) => {
          return (
            <div key={product.id} style={{ width: "100%" }}>
              <h2>{product.title}</h2>
              <img
                src={product.image}
                alt=""
                style={{
                  width: 300,
                  height: 300,
                 
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
