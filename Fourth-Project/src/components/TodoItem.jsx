import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";
function TodoItem({TodoName,TodoDate}) {
  const {deleteItem}=useContext(TodoItemsContext)
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button"
           onClick={()=>deleteItem(TodoName)}>
           <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
