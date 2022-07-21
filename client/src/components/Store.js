import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";

import React from "react";
import "../App.css";

const Store = () => {
  return (
    <>
    <Box>
    <Typography  variant="h2" sx={{fontWeight:"bold" ,color:"#4a138c"}}>
       
            Stores
          </Typography>
      <Card className="Boxinfo" variant="outlined">
        <div style={{ backgroundColor: "#ffff", height: "10px" }}></div>
        <CardContent >
          <Typography className="Box__title" variant="h5">
            {/* {title} */}
            
          </Typography>
          <Typography>Profit</Typography>
          <h2 className="Box__cases" style={{ }}>
           
          </h2>
          <Typography className="Box__total">total</Typography>
        </CardContent>
      </Card>
      </Box>
    </>
  );
};

export default Store;