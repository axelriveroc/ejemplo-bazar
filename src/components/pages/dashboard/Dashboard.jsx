import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ProductsForm from "./ProductsForm";

const Dashboard = ({
  products,
  open,
  handleClose,
  handleOpen,
  productSelected,
  setProductSelected
}) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h4" color={"primary"}>
          Productos
        </Typography>
        <Button variant="contained" onClick={()=>handleOpen({})}>Agregar nuevo producto</Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Nombre</TableCell>
              <TableCell align="left">Descripcion</TableCell>
              <TableCell align="left">Precio</TableCell>
              <TableCell align="left">Stock</TableCell>
              <TableCell align="left">Categoria</TableCell>
              <TableCell align="left">Imagen</TableCell>
              <TableCell align="center">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow
                key={product.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{product.title}</TableCell>
                <TableCell align="left">{product.description}</TableCell>
                <TableCell align="left">{product.unit_price}</TableCell>
                <TableCell align="left">{product.stock}</TableCell>
                <TableCell align="left">{product.category}</TableCell>
                <TableCell align="left">
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src={product.image}
                    alt=""
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={() => {
                      handleOpen(product);
                    }}
                  >
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton>
                    <DeleteForeverIcon color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <ProductsForm productSelected={productSelected} setProductSelected={setProductSelected} />
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;
