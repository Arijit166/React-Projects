import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import Items from "./components/Items.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { useState } from "react";
import { TodoItemsContext } from "./store/Todo-items-store.jsx";
import "./App.css";
function App() {
  const initialTodoItems = [];
  const [todoItems, settodoItems] = useState(initialTodoItems);
  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    settodoItems(newTodoItems);
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <Items />
      </center>
    </TodoItemsContext.Provider>
  );
}
export default App;
