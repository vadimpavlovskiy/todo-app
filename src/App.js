import React from 'react';
import './App.scss';

import TodoSearch from './components/todo-search.component';
import TodoList from './components/todo-list.component';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tasks:[]
    }
  }
   
  handleChange = (data) => {
      this.setState({tasks: [...this.state.tasks, ({isImported: false, task: data})]}) // Insert new value in state
  }
  delateHandler = (text) => {
    this.setState(prevState => ({ tasks: prevState.tasks.filter(task => {
        return task.task !== text;
    })}))
  } 
      

  render (){
    return(
      <div className='container'>
        <div className='content'>
          <TodoSearch onChange = {this.handleChange} />
          <TodoList delete={this.delateHandler}  tasks={this.state.tasks}/>
        </div>
      </div>
    )
  }
}

export default App;
