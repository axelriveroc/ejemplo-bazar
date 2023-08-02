import { Visibility } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const OrdersList = ({ orders }) => {
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
                  <IconButton>
                    <Visibility color="primary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersList;
