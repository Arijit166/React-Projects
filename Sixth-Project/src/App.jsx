import FoodItems from "./components/FoodItems";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; 
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container"
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  let [TextToShow,setTextToShow]=useState();
  let [foodItems,setFoodItems]=useState(['Salad','Green vegetables','Brown rice'])
  
  const onKeyDown=(event)=>{
    if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      
      let newItems=[...foodItems, newFoodItem]
      setFoodItems(newItems)
      console.log(`Food value entered is ${newFoodItem}`);
    }
  }

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}/>
      <p>{TextToShow}</p>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>  
    {/* <Container>
      <p>Above is the list of healthy foods that are good for  your health and well-being.</p>
    </Container> */}
    </>   
  );
}

export default App;
