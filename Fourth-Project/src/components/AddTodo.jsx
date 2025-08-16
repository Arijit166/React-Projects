import {useRef } from "react";
import { useContext } from "react";
import { TodoItemsContext } from "../store/Todo-items-store";
import { IoMdAddCircleOutline } from "react-icons/io";
function AddTodo() {
  const {addNewItem}=useContext(TodoItemsContext);
  const todoNameElement=useRef(0)
  const dueDateElement=useRef(0)
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoName, dueDate);                                                   
  };
  return (
    <div class="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter TODO here"
          />
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div class="col-2">
          <button
            type="submit"
            className="btn btn-success"
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
