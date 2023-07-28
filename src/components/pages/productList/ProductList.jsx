import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
          padding: "0 40px",
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

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        {products.map((product) => {
          return (
            <Card sx={{ width: 385, height: 340 }} key={product.id}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={product.image}
              />
              <CardContent sx={{ height: 140 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ fontWeight: "bold" }}
                  pt={1}
                >
                  Precio: ${product.unit_price}.-
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link to={`/productDetail/${product.id}`}>
                  <Button size="small" variant="outlined">
                    Ver mas
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
