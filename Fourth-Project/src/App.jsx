import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import Items from "./components/Items.jsx";
import './App.css';
function App() {
   const todoItems=[{
    name : "Buy milk",
    dueDate : "4/10/23"
  },
  {
    name : "Go to College",
    dueDate : "4/10/23"
  },
  {
    name : "Sleep",
    dueDate : "Right now"
  }]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <Items todoItems={todoItems}/>
    </center>
  );
}
export default App;
