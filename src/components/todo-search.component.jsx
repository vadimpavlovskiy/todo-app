import React from "react"
import './css/todosearch.scss'

class TodoSearch extends React.Component{
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onChange(event.target.myname.value);
    }
    render() {
        return (
            <div className="todo_header">
                <h1>My first todo-app</h1>
            <div>
                <form className="todo_search" onSubmit={this.handleSubmit} >
                    <input className="search" type='search' name="myname"></input>
                    <input className="search_button" value='Add task' type='submit'></input>
                </form>
            </div>
          </div>
        )
    }
}

export default TodoSearch;
