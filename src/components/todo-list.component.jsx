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
                                   <ToDoCard done={this.props.done} edit={this.props.edit} prior={this.props.prior} delete={this.props.delete} text={item.task} id={item.id} completed={item.isCompleted} priority={item.isImported}/>
                                </div>
                    )
            })} 
          </div>
        )
    }
}

export default TodoList;