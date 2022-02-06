import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import './css/todolist.scss'
import { createTheme, ThemeProvider } from "@mui/material";

const outerTheme = createTheme({
    palette:{
        primary:{
            main:'#ffea00',
        },
    }
})


export default class ToDoCard extends React.Component {
    deleteSubmit = () => {
        this.props.delete(this.props.text)
    }
  
    render(){
        return(
            <div>
                <ThemeProvider theme={outerTheme}>
                    <span>{this.props.text}</span>
                    <StarIcon fontSize="small"/>
                    <DeleteIcon onClick={this.deleteSubmit} theme={outerTheme} fontSize="small"/>
                </ThemeProvider>
            </div>
        )
    }
}