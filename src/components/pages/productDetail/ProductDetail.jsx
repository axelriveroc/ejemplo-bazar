import { Box, Button, Card, Typography } from "@mui/material";

const ProductDetail = ({ product }) => {
  return (
    <>
      <Card
        key={product.id}
        sx={{
          width: "100%",
          display: "flex",
          paddingLeft: { lg: "10rem", md: "7.5rem", xs: "1.5rem" },
          paddingRight: { lg: "10rem", md: "7.5rem", xs: "1.5rem" },
          paddingTop: { lg: "10rem", xs: "7.5rem" },
          flexDirection: { md: "row", xs: "column" },
          boxShadow: "none",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            height: { lg: "560px", md: "530px", xs: "352px" },
            width: { lg: "47.5%", md: "42.5%", xs: "100%" },
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            borderRadius: "8px",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box
          sx={{
            height: { md: "343px", sm: "302px", xs: "300px" },
            width: { lg: "445px", md: "343px", sm: "572px", xs: "100%" },
            display: "flex",
            marginTop: { md: "0px", xs: "52px" },
            flexDirection: "column",
            alignItems: { md: "start", xs: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { sm: "30px", xs: "28px" },
              lineHeight: "44px",
              letterSpacing: "1.42857px",
              textTransform: "uppercase",
              textAlign: { md: "start", xs: "center" },
            }}
          >
            {product.title}
          </Typography>
          <Typography
            sx={{
              textAlign: { md: "start", xs: "center" },
              fontWeight: "500",
              fontSize: "15px",
              lineHeight: "25px",
              opacity: "0.5",
            }}
          >
            {product.description}
          </Typography>

          <>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "25px",
                textTransform: "uppercase",
                width: "100%",
                textAlign: { xs: "start" },
              }}
            >
              $ {product.unit_price}
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "18px",
                lineHeight: "25px",
                width: "100%",
                textAlign: { xs: "start" },
                textTransform: "none"
              }}
            >
             Unidades en stock: {product.stock}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "300px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  height: "48px",
                  gap: "20px"
                }}
              >
                <Button
                  //   onClick={restar}

                  variant="contained"
                >
                  -
                </Button>
                <Typography variant="h5">
                  2
                </Typography>
                <Button
                  //   onClick={sumar}

                  variant="contained"
                >
                  +
                </Button>
              </Box>

              <Box>
                <Button
                  // onClick={() => onAdd(contador)}
                  
                  variant="contained"
                >
                 Agregar
                </Button>
              </Box>
            </Box>
          </>
        </Box>
      </Card>
    </>
  );
};

export default ProductDetail;
