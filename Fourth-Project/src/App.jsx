import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import Items from "./components/Items.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx"; 
import { useState } from "react";
import './App.css';
function App() {
   const initialTodoItems=[];
  const [todoItems,settodoItems]=useState(initialTodoItems)
  const handleNewItem = (itemName,itemDueDate)=>{
      const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
      settodoItems(newTodoItems)
  }
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)
    settodoItems(newTodoItems);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length===0 && <WelcomeMessage />}
      <Items todoItems={todoItems}  onDeleteClick={handleDeleteItem}/>
    </center>
  );
}
export default App;
