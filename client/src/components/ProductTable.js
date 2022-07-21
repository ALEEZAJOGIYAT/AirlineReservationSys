import React, {useEffect,useState} from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const ProductTable = () => {
  const { id } = useParams();
  const [Sproduct, setSproduct] = useState([])
  useEffect(() => {
    
    axios.get(`http://localhost:4000/storeproduct/${id}`).then((response)=>{

      setSproduct(response.data);
      console.log(response.data)
      
    })
    .catch((err)=>{
     console.log(err)
    })
 
  
  

  
  }, [])
  const deleteData=(i)=>{
    axios.delete(`http://localhost:4000/delete/${i}`)
  }
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Product IMG</TableCell>
          <TableCell>Product Name</TableCell>
          <TableCell align="center">Product Description</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">Product Category</TableCell>
          <TableCell align="right">Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
    
          <TableRow
            key={Sproduct.productName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center"><img src= {Sproduct.productImg} height="50px" width={"50px"} alt="" srcset="" />
               </TableCell>
            <TableCell component="th" scope="row">
              {Sproduct.productName}
            </TableCell>
            <TableCell align="right">{Sproduct.productDesc}</TableCell>
            <TableCell align="right">{Sproduct.productPrice}</TableCell>
            <TableCell align="right" sx={{marginTop:"1em"}}>{Sproduct.productcategory}</TableCell>
            <TableCell>
            <Button onClick={()=>{deleteData(Sproduct._id)}}><DeleteIcon /></Button>
            </TableCell>
          </TableRow>
  
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ProductTable