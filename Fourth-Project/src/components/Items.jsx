import TodoItem from "./TodoItem";
import styles from "./Items.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles["itemsContainer"]}>
      {todoItems.map((item) => (
        <TodoItem
          TodoName={item.name}
          TodoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
