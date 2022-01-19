import React from "react";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Router from "./Router";

const AuthorizedRouter = () => {
  return (
    <Box display="flex" flexDirection="row">
      <Box className="toolbar" display="flex" flexDirection="column" justifyContent="space-between">
        <Box>
          <NavLink to="/">
            <Typography>Home</Typography>
          </NavLink>
          <NavLink to="posts">
            <Typography>Posts</Typography>
          </NavLink>
          <NavLink to="users">
            <Typography>Users</Typography>
          </NavLink>
        </Box>
        <Box>
          <NavLink to="logout">
            <Typography>Logout</Typography>
          </NavLink>
        </Box>
      </Box>
      <Box className="container">
        <Router />
      </Box>
    </Box>
  );
};

export default AuthorizedRouter;
