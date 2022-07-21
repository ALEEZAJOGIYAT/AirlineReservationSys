import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Mybasket = () => {
    const { id } = useParams();
    const [addProduct, setaddProduct] = useState([]);
    useEffect(() => {
        console.log(id)
        const getProduct = async () => {
        //   setloading(true);
    
           axios.get(`http://localhost:4000/mybasket/${id}`).then((response)=>{
    
             setaddProduct(response.data);
             console.log(response)
            //  setloading(false);
           })
           .catch((err)=>{
            console.log(err)
            // setSproduct(err)
           })
        };
        getProduct();
      }, []);
      const deleteData=(i)=>{

      }
  return (
<>
<TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Product IMG</TableCell>
          <TableCell>Product Name</TableCell>
          <TableCell align="center">Product Description</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Product Category</TableCell>
          <TableCell align="center">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        
          <TableRow
            key={addProduct.productName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center"><img src= {addProduct.productImg} height="50px" width={"50px"} alt="" srcset="" />
               </TableCell>
            <TableCell component="th" scope="row">
              {addProduct.productName}
            </TableCell>
            <TableCell align="center">{addProduct.productDesc}</TableCell>
            <TableCell align="center">{addProduct.productPrice}</TableCell>
            <TableCell  sx={{display:"flex",justifyContent:"center",align:"center"}}>{addProduct.productcategory}</TableCell>
            <Button onClick={()=>{deleteData(addProduct._id)}}><DeleteIcon /></Button>
          </TableRow>
      
      </TableBody>
    </Table>
  </TableContainer>
</>
  )
}

export default Mybasket