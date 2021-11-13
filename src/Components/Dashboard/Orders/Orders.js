import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/UseAuth";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Orders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  //load data from db
  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  //handle delete
  const handleDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted service");
          const remainingOrders = orders.filter((order) => order._id !== id);
          setOrders(remainingOrders);
        }
      });
    console.log(id);
  };
  return (
    <div>
      <h2>You Have {orders.length} Orders </h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Consumer Name</TableCell>
              <TableCell align="right">Car Name</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Cancel Order</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.consumerName}
                </TableCell>
                <TableCell align="right">{row.carName}</TableCell>
                <TableCell align="right">{row.model}</TableCell>
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleDelete(row._id)} variant="text">
                    DELETE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
