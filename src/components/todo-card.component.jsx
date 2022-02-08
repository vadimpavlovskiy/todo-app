import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

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
    IconChange = (props) => {
        if(this.props.priority ){
           return <StarIcon onClick={this.prioritySubmit} fontSize="small"/>
        } else {
            return <StarBorderIcon  onClick={this.prioritySubmit} fontSize="small"/>
        }
    }

    deleteSubmit = () => {
        this.props.delete(this.props.id)
    }
    prioritySubmit = () => {
        this.props.prior(this.props.id)
    }
    render()
    
    {
        return(
            <div>
                <ThemeProvider theme={outerTheme}>
                    <span>{this.props.text}</span>
                    <this.IconChange /> {/* Change icon depends from priority */}
                    <DeleteIcon onClick={this.deleteSubmit} theme={outerTheme} fontSize="small"/>
                </ThemeProvider>
            </div>
        )
    }
}