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
  doneHandler = async (id) => {
    let doneItem = {tasks: this.state.tasks.map((item)=> {
      if(item.id === id ){
        const changeCompleted = {
          ...item,
          isCompleted: !item.isCompleted
        }
        return changeCompleted
      }
      return  item
    })}
    this.setState({tasks: doneItem.tasks.sort((a,b)=> a.isImported > b.isImported ? -1 : 1)})
  }
  handleChange = async (data) => {
      this.setState({tasks: [...this.state.tasks, ({isImported: false, isCompleted: false, task: data, id: Math.floor(Math.random()*1000)})]}) // Insert new value in state
  }
  delateHandler = async (id) => {
    this.setState(prevState => ({ tasks: prevState.tasks.filter(task => {
        return task.id !== id;
    })}))
  } 
  priorityHandler = async (id) => {
    let priorityItem = {tasks: this.state.tasks.map((item) => {
      if(item.id === id){
       const changePrior = {
         ...item,
         isImported: !item.isImported
       }
       return changePrior
      }
      return item;
    })
    // Change isImported here
  }
    this.setState({tasks: priorityItem.tasks.sort((a,b) => a.isImported > b.isImported ? -1 : 1)})
    // Sort then true is go up
}

doubleHandler = async(id,text) => {
  let editibleItem = {tasks: this.state.tasks.map((item) => {
    if(item.id === id){
      const changeItem = {
        ...item,
        task: text
      }
      return changeItem;
    }
   return item;
  })}
  this.setState({tasks: editibleItem.tasks.sort((a,b) => a.isImported > b.isImported ? -1 : 1)})
}

  render (){
    return(
      <div className='container'>
        <div className='content'>
          <TodoSearch onChange = {this.handleChange} />
          <TodoList edit={this.doubleHandler} done={this.doneHandler} prior={this.priorityHandler} delete={this.delateHandler}  tasks={this.state.tasks}/>
        </div>
      </div>
    )
  }
}

export default App;
