import FoodItems from "./components/FoodItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems=['Dal','Green vegetables','Brown rice','Quinoa','Fruits','Ghee']
  //let foodItems=[]

  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </>     
  );
}

export default App;
