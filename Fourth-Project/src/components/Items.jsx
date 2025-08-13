import TodoItem from "./TodoItem"
import styles from "./Items.module.css"
const TodoItems=({todoItems})=>{
    return(
      <div className={styles["itemsContainer"]}>
        {todoItems.map(item=><TodoItem TodoName={item.name} TodoDate={item.dueDate} />)}
      </div>
)}
export default TodoItems