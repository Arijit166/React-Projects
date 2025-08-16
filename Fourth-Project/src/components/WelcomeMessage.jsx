import { TodoItemsContext } from "../store/Todo-items-store";
import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
const WelcomeMessage =()=>{
    const {todoItems}=useContext(TodoItemsContext);
    return todoItems.length===0 && <p className={styles.welcome}>Enjoy your day</p>
}
export default WelcomeMessage