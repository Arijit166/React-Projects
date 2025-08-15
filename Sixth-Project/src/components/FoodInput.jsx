import styles from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
    
    return (
        <input className={styles.foodInput} type="text" placeholder="Add food item" 
        onKeyDown={handleKeyDown}/>
    );
};

export default FoodInput;
