import Item from './Item';
const FoodItems = ({items}) => {
  return (
    <ul className="list-group">
      {items.map((item) => {
        return <Item key={item} foodItem={item} />;
      })}
    </ul>
  );
};
export default FoodItems;
