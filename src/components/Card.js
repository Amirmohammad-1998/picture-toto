import  React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../App.css';
import CloseIcon from '@mui/icons-material/Close';


export default function MyCard({title, url}) {

  const [deleteStyle,setDeleteStyle] =  useState({
    display:"",
    
  });

  const deleteHandler = ()=>{
    setDeleteStyle({display:"none"})
    
  }
  return (
    <Card  className="card" style={deleteStyle}>  
      <CardActionArea>
        
        <CardMedia className="image"
          component="img"
          height="300"
          width="345"
          image={url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className="title">
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteHandler}>
          <i className="closeIcon"><CloseIcon></CloseIcon></i>
        </Button>
      </CardActions>
    </Card>
  );
}
