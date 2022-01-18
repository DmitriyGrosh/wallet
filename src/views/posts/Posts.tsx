import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { deletePost } from "../../redux/actions/posts";
import { IRootStore } from "../../redux";

import "./style.scss";

const Posts: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  console.log("==========>isOpen", isOpen);

  const dispatch = useDispatch();
  const { posts } = useSelector((state: IRootStore) => state.posts);
  return (
    <div>
      <div className="create-post">
        <Button onClick={handleOpen} variant="outlined">
          create post
        </Button>
      </div>
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
            {posts.map((el, index) => {
              return (
                <TableRow key={index.toString(36)}>
                  <TableCell>
                    {el.userId}/{el.id}
                  </TableCell>
                  <TableCell>{el.title}</TableCell>
                  <TableCell>{el.body}</TableCell>
                  <TableCell>
                    <Button onClick={() => dispatch(deletePost(index))} endIcon={<DeleteIcon />}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Create Post</DialogTitle>
        <DialogContent>
          <div>text</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Posts;
