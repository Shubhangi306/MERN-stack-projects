import React from 'react';
import Display from './components/Display';
import AddItem from './components/AddItem';
import Navbar from './components/Navbar';

class App extends React.Component {

  state = {
    todoItems: [
    {id:1,Item:'Send Invitations',crossed:false},
    {id:2,Item:'Plan a test drive',crossed:false},
    {id:3,Item:'Order a cake',crossed:false}
  ]
}

addItem = (todoItem) => {
    todoItem.id = this.state.todoItems.length +1; 
    todoItem.crossed=false;
    let todoItems=[...this.state.todoItems,todoItem];
    this.setState({
      todoItems:todoItems
    })

}

deleteItem =(id) => {
   let newList = this.state.todoItems.filter(item =>{
     return item.id!==id
   });
   this.setState({
     todoItems:newList
   })
}

crossItem =(id) => {
   this.setState({
     Item: this.state.todoItems.map(item => {
       if(item.id===id){
         item.crossed=true;
       }
       return item;
     })
    })
}

  render(){
    return (
      <div className="App">
        <Navbar heading='ToDo List'></Navbar>
        <Display todoItems={this.state.todoItems} deleteItem={this.deleteItem} crossItem={this.crossItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
  
}

export default App;
