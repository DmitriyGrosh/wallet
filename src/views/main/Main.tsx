import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

import { IRootStore } from "../../redux";
import { fetchUsers, deleteUser } from "../../redux/actions/users";

import "./style.scss";
import { sendPost } from "../../redux/actions/posts";

const Main: FC = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: IRootStore) => state.users);
  return (
    <div className="main">
      {users.length <= 0 ? (
        <div className="get-user">
          <Button variant="outlined" onClick={() => dispatch(fetchUsers())}>
            get users
          </Button>
        </div>
      ) : (
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User Number</TableCell>
                  <TableCell>Title</TableCell>
                  <TableCell>Body</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((el, index) => {
                  return (
                    <TableRow key={index.toString(36)}>
                      <TableCell>
                        {el.userId}/{el.id}
                      </TableCell>
                      <TableCell>{el.title}</TableCell>
                      <TableCell>{el.body}</TableCell>
                      <TableCell>
                        <Button
                          onClick={() => dispatch(deleteUser(index))}
                          endIcon={<DeleteIcon />}
                        >
                          Delete
                        </Button>
                        <Button onClick={() => dispatch(sendPost(el))} endIcon={<SendIcon />}>
                          Send to Posts
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default Main;
