import React, { useState,useEffect } from "react";
import Paper from "@mui/material/Paper";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import SendSharpIcon from "@mui/icons-material/SendSharp";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useSelector } from "react-redux";

const AddProduct = () => {
  // const [data, setData] = useState([])
  const [Img, setImg] = useState();
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    desc: "",
    Date: "",
    price: "",
    image: "",
  });
  useEffect(() => {
    

    // setcheck(signAuth.state.data.user)
  }, []);
  const signAuth = useSelector((state) => state.addUser);
  const cnic=signAuth.state.data.user.CNIC
  const onFileChange = (e)=>{
    setFile(e?.target?.files[0])
    console.log(file,"FILE")
  }
  
  const handleChange = (event) => {
    console.log({ [event.target.name]: event.target.value });
    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleImgChange = (event) => {
    setImg(event?.target?.file);
    console.log(Img);
    // setImg({ [event.target.name]: [event.target.value] });
    // setImg({...img,[event.target.name]:[ event.target.file]})
    // console.log({ [event.target.name]: [event.target.file] });
    // console.log(Img)
  };
  // const dispatch=useDispatch();
  const obj={
    "file": file,
    "upload_preset": "fdp4mw2g"
  }
  const handleSubmit = (e) => {
    // let formData=new FormData();
    // formData.append("upload_preset", "fdp4mw2g");
    // formData.append('file', file);
    // var data=formData.get("file")
    // var options = { content: formData };
    // console.log(data,"----");
    // e.preventDefault();
    // const allData = { ...Input, value, id: new Date().getTime().toString() }
    // console.log(allData)

    // data.push(allData)

    // setData([...data])
    // dispatch(User(Input,value))

    alert("Product added  Successfully");
    // console.log(product.image);
    console.log(file,"LINE 54");
    let formData = new FormData();
    console.log(Img)
    formData.append("file", file);
    formData.append("upload_preset", "fdp4mw2g");
    console.log(formData);
    axios
    .post("https://api.cloudinary.com/v1_1/dl2xnil88/image/upload", formData)
    .then((res) => {
      console.log(res);
      axios.post("http://localhost:4000/addproduct", {
        name: product.name,
        date: product.date,
        desc: product.desc,
        category: product.category,
        image: res.data.url,
        price: product.price,
        cnic:cnic
      });
    })
    .catch((err) => {
      console.log(err);
    });
    // setProduct({
      //   name: "",
      //   desc: "",
      //   Date: "",
    //   price: "",
    //   image: "",
    // });
  };
  return (
    <>
      <Box>
        <Paper
          sx={{
            textAlign: "center",
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
          {/* import React from 'react'; */}

          <h3 style={{ color: "#4a138c", fontFamily: "Righteous" }}>
            ADD PRODUCT
          </h3>
          <form  encType="multipart/form-data">
            <FormControl fullWidth>
              <TextField
                required
                id="standard-password-input"
                label="Product Name"
                type="text"
                autoComplete="current-email"
                variant="standard"
                margin="normal"
                value={product.name}
                name="name"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Product Description"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={product.desc}
                name="desc"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Product category"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={product.Category}
                name="category"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Product Price"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={product.price}
                name="price"
                onChange={handleChange}
              />
              
              <TextField
                required
                id="standard-password-input"
                type="date"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={product.Date}
                name="Date"
                onChange={handleChange}
              />

              {/* <TextField
                required
                id="standard-password-input"
                accept="image/*"
                type="file"
                // value={Img}
                margin="normal"
                name="file"
                onChange={onFileChange}
                 onChange={(event) => {
                   setImg(event.target.files[0]);
                   console.log(event.target.files[0]);
                 }}
             / > */}
  </FormControl>
              <label htmlFor="contained-button-file">
  <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onFileChange} />
  {/* <Button variant="contained" component="span">
    Upload
  </Button> */}
</label>
            <br />
            <br />

            <Button
              variant="contained"
              // type="submit"
              onClick={handleSubmit}
              endIcon={<SendSharpIcon />}
            >
              Add
            </Button>
          </form>
          
        </Paper>
      </Box>
    </>
  );
};

export default AddProduct;
