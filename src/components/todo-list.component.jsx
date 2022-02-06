import React from "react";

import './css/todolist.scss'
import ToDoCard from "./todo-card.component";



class TodoList extends React.Component{

    render(){
        return(
            <div className="todo_block">
                {this.props.tasks.map((item,index)=> {
                    return(
                                <div className="todo_comp" key={index}>
                                   <ToDoCard delete={this.props.delete} text={item.task} priority={item.isImported}/>
                                </div>
                    )
            })} 
          </div>
        )
    }
}

export default TodoList;