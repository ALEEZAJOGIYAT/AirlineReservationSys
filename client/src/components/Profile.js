import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Profile = () => {
  const signAuth = useSelector((state) => state.addUser);
  return (
    <>
      <Box>
        <Paper
          sx={{
            // textAlign: "center",
            boxShadow: 5,
            p: 4,
            margin: "30px auto",
            maxWidth: 450,
            // flexGrow: 2,
            // display: "flex",
            // backgroundColor: "#4a138c",
            // backgroundColor: (theme)
            //   theme.palette.mode === "dark" ? "red" : "#fff",
          }}
          elevation={3}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "Bold",
              fontFamily: "Righteous",
              color: "#4a138c",
              marginBottom: "1em",
            }}
          >
            {signAuth?.state?.data?.user?.Name.toUpperCase()}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "Bold",
              fontFamily: "Righteous",
              color: "#4a138c",
              marginBottom: "1em",
            }}
          >
            UserId: {signAuth?.state?.data?.user?._id}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "Bold",
              fontFamily: "Righteous",
              color: "#4a138c",
              marginBottom: "1em",
            }}
          >
            Email: {signAuth?.state?.data?.user?.Email}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "Bold",
              fontFamily: "Righteous",
              color: "#4a138c",
              marginBottom: "1em",
            }}
          >
            CNIC: {signAuth?.state?.data?.user?.CNIC}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "Bold",
              fontFamily: "Righteous",
              color: "#4a138c",
              marginBottom: "1em",
            }}
          >
            Mode: {signAuth?.state?.data?.user?.Role}
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default Profile;
