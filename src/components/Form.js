import React , { useContext} from 'react';
import Button from '@mui/material/Button';
import { CardContext } from "./CardContext";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import '../App.css';



export default function Form() {
    
    const info ={
        text:"",
        url:""
    };
    const [cards , setCards] = useContext(CardContext);

    const updateText = (e)=>{
       info.text = e.target.value;
        
    }
    const updateImg = (e) =>{
        const reader = new FileReader();
        reader.onload = (e) =>{
            info.url = reader.result;
            
        }
        reader.readAsDataURL(e.target.files[0])
    }
     
    const submit = (e)=>{
        e.preventDefault();
        setCards([...cards , info]);
    }

    return (
        <div className="form">
            
            <form onSubmit={submit}>
                <input type='file' onChange={updateImg} accept="image/png, image/jpeg" id="img" className="input" />
                <Button className="label">
                     <label  htmlFor="img"><i><AddPhotoAlternateIcon></AddPhotoAlternateIcon>Add Photo</i></label>
                </Button>
                <input type='text' onChange={updateText} className="text" />
                <Button variant="contained" type="submit">Add</Button>
            </form>
            
            
        </div>
       
    )
}
