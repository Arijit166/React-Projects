import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/Todo-items-store";
import { useContext } from "react";
import styles from "./Items.module.css";
const TodoItems = () => {
  const {todoItems}=useContext(TodoItemsContext);
  return (
    <div className={styles["itemsContainer"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          TodoName={item.name}
          TodoDate={item.dueDate}
        />
      ))}
    </div>
  );
};
export default TodoItems;
