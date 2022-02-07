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
      this.setState({tasks: [...this.state.tasks, ({isImported: false, task: data, id: Math.floor(Math.random()*1000)})]}) // Insert new value in state
  }
  delateHandler = (id) => {
    this.setState(prevState => ({ tasks: prevState.tasks.filter(task => {
        return task.id !== id;
    })}))
  } 
  priorityHandler = (id) => { // Success work!
    this.setState ({tasks: this.state.tasks.map((item) => {
      if(item.id === id){
       const sortedItem = {
         ...item,
         isImported: !item.isImported
       }
       return sortedItem;
      }
      return item;
    })})
  }

  render (){
    return(
      <div className='container'>
        <div className='content'>
          <TodoSearch onChange = {this.handleChange} />
          <TodoList prior={this.priorityHandler} delete={this.delateHandler}  tasks={this.state.tasks}/>
        </div>
      </div>
    )
  }
}

export default App;
