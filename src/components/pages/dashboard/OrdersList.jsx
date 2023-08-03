import { Visibility } from "@mui/icons-material";
import {
  Box,
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
import { useState } from "react";

const OrdersList = ({ orders }) => {
  const [open, setOpen] = useState(false);
  const [orderSelected, setOrderSelected] = useState({});

  const handleOpen = (product) => {
    setOrderSelected(product);
    setOpen(true);
  };
  const handleClose = () => {
    setOrderSelected({});
    setOpen(false);
  };
  return (
    <div>
      <Typography variant="h4" color={"primary"}>
        Compras
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Numero</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Fecha</TableCell>
              <TableCell align="left">Detalle</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{order.id}</TableCell>
                <TableCell align="left">{order.email}</TableCell>
                <TableCell align="left">
                  {order.date.toDate().toLocaleString()}
                </TableCell>
                <TableCell align="left">
                  <IconButton onClick={()=>handleOpen(order)}>
                    <Visibility color="primary" />
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
         <Typography>Productos:</Typography>
         {
          orderSelected?.items?.map(product => {
            return <Box key={product.id} sx={{border: "2px solid steelblue"}}>
                <h4>{product.title}</h4>
                <h5>Precio: {product.unit_price}</h5>
                <h5>Cantidad: {product.quantity}</h5>
            </Box>
          })
         }
        </Box>
      </Modal>
    </div>
  );
};

export default OrdersList;
