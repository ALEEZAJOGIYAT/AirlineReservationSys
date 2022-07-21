import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import headphone from '../images/headphones_PNG101930.png'
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { NavLink } from "react-router-dom";

import axios from 'axios';

const AddToCart = () => {
  const { id } = useParams();
  const [Sproduct, setSproduct] = useState([]);
  const [loading, setloading] = useState(false);
  const [quantity, setquantity] = useState(0);


  useEffect(() => {
    console.log(id)
    const getProduct = async () => {
      setloading(true);

       axios.get(`http://localhost:4000/addtocart/${id}`).then((response)=>{

         setSproduct(response.data);
         console.log(response.data)
         setloading(false);
       })
       .catch((err)=>{
        console.log(err)
       })
    };
    getProduct();
  }, []);
  const Loading = () => {
    return (
      <>
        <h4 className="">Loading...</h4>
      </>
    );
  };
  const DeleteItems = () => {
    setquantity(quantity - 1);
  };
  const AddItems = () => {
    setquantity(quantity + 1);
  };
  const PostProductData =async (e) =>{
  //   e.preventDefault();
  //   const pdata={
  //     name: Sproduct.title,
  //     quantity: quantity ,
  //     price:Sproduct.price,
  //     totalprice:Sproduct.price*quantity
  //   };

  //   await axios.post('http://localhost/react%20ecommerce/productinsert.php',pdata)
  //   .then(res => console.log(res.data))

  }
  // ProductDetails

  const ShowSproduct = () => {
    return (
      <>
        <div className="Container">
          <div className="row productdetails" style={{marginTop:"50px"}}>
            <div className="col-md-5">
              <img src={Sproduct.productImg} width="350px" height="350px" />
            </div>
            <div className="col-md-7 square border" >
              <h4 >{Sproduct.productcategory}</h4>
              <h1 >{Sproduct.productName}</h1>
              <hr />
              <Stack spacing={1}>
                <Rating name="size-large" defaultValue={2} size="large" />
              </Stack>
              <div className=" mb-3 mt-3">
                {Sproduct.productDesc}
               
              </div>
              <div className="addtocardimg d-flex ">
                  <RemoveOutlinedIcon  onClick={DeleteItems} />
                <p className="mx-3 fw-bold">{quantity}</p>
                  <AddOutlinedIcon onClick={AddItems}/>
              </div>
              <div className="cardbtn my-2">
                <NavLink  to={`/mybasket/${Sproduct._id}`}>
                <Button style={{backgroundColor:"#4a138c"}} className="me-2" onClick={PostProductData}>
                  Add to card
                </Button></NavLink >
                <Button  style={{backgroundColor:"#4a138c"}} classname="me-2">
                  Checkout card
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row justify-content-center ">
          <ShowSproduct />
        </div>
      </div>
    </>
  );
};

export default AddToCart;