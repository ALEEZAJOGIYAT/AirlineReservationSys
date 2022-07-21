import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import '../App.css'
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Outlet = () => {
    // const Item = styled(Paper)(({ theme }) => ({
    //     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     // ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     // color: theme.palette.text.secondary,
    //   }));
// interface ExpandMoreProps extends IconButtonProps {
//     expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

//  function RecipeReviewCard() {
//   const [expanded, setExpanded] = useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };


  return (
    <><br/><br/>
<hr/>
   
    <Grid container spacing={2}>
    <Grid item xs={12}>
    <Typography variant="h1" component="h1" sx={{fontFamily:'Righteous',textAlign:"center" ,color:"#4a138c"}}>
    OUTLETS
</Typography><br /><br/>
    <div className="d-flex align-item-center justify-content-center mb-5 pb-5">
    {/* <h3>Categories</h3><br/> */}
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => {
                //   setfilter(productdata);
            // }}
          >
            All
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("men's clothing")}
          >
            Men's Collection
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("women's clothing")}
          >
            Women's Collection
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("jewelery")}
          >
            Jwelllery
          </div>
          <div
            className="btn  me-2" style={{backgroundColor:"#4a138c", color:"#fff"}}
            // onClick={() => Filterproduct("electronics")}
          >
            Electronics
          </div>
        </div>
        <br/><br/>
        
    <Container >
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
   
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="oultlet Name"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      
    </Card>
    

</Container>
  </Grid>
  
</Grid>
    </>
  )
}

export default Outlet