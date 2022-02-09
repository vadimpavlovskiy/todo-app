import React from "react";

import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
    constructor(props){
        super(props);
        this.state = {
            isEditing: false,
        }
    }

    handleDoubleClick = () => {
        this.setState({isEditing: true})
    }

    IconChange = (props) => {
        if(this.props.priority ){
           return <StarIcon theme={outerTheme.primary} onClick={this.prioritySubmit} fontSize="small"/>
        } else {
            return <StarBorderIcon theme={outerTheme.primary} onClick={this.prioritySubmit} fontSize="small"/>
        }
    }

    CompleteChange = (props) => {
        if(this.props.completed){
            return <CheckCircleIcon onClick={this.doneSubmit} theme={outerTheme.primary}  fontSize="small" />
        } else{
            return <CheckCircleOutlineIcon onClick={this.doneSubmit} theme={outerTheme.primary}  fontSize="small" />
        }
    }

    deleteSubmit = () => {
        this.props.delete(this.props.id)
    }
    prioritySubmit = () => {
        this.props.prior(this.props.id)
    }
    doneSubmit = () => {
        this.props.done(this.props.id);
    }

    editSubmit = (e) => {
        // this.props.edit(this.props.text)
       this.props.edit(this.props.id, e)
    }
    render()
    {
        return(
                <ThemeProvider theme={outerTheme}>
                    {this.state.isEditing ? (
                        <input className="input_editing" autoFocus value={this.props.text} onChange={e => this.editSubmit(e.target.value)} onKeyPress={(e)=> {if(e.key==="Enter"){this.setState({isEditing: false})}}} type="text"/>
                    ): (
                        <div onDoubleClick={this.handleDoubleClick} className={this.props.completed ? "icon_done" : "text"}>{this.props.text}</div>
                        )}
                    <div className="icons">
                    <this.CompleteChange/>
                    <this.IconChange /> {/* Change icon depends from priority */}
                    <DeleteIcon onClick={this.deleteSubmit} theme={outerTheme.main} fontSize="small"/>
                    </div>
                </ThemeProvider>
        )
    }
}