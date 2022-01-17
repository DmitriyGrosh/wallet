import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

import { decrement, asyncIncrementCreator } from "../../redux/actions/counter";
import { IRootStore } from "../../redux";
import { fetchUsers } from "../../redux/actions/users";

import "./style.scss";

const Main = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: IRootStore) => state.counter);
  const { users } = useSelector((state: IRootStore) => state.users);
  return (
    <div className="main">
      <div>
        <Button variant="outlined" onClick={() => dispatch(asyncIncrementCreator())}>
          increment
        </Button>
        <Button variant="outlined" onClick={() => dispatch(decrement())}>
          decrement
        </Button>
        <Button variant="outlined" onClick={() => dispatch(fetchUsers())}>
          get users
        </Button>
        <span>{counter}</span>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Number</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((el, index) => {
                return (
                  <TableRow key={index.toString(36)}>
                    <TableCell>{el.userId}</TableCell>
                    <TableCell>{el.title}</TableCell>
                    <TableCell>{el.body}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Main;
