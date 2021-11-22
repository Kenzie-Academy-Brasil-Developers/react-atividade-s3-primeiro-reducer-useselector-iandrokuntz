import { useSelector } from "react-redux";
import "./style.css"

const FruitList = () => {

  const fruits = useSelector((state) => state.fruits);

  return (
    <div className="Card">
      {fruits.map((fruit) => (
        <ul key={fruit} className="Fruit">
          <li> {fruit.name} </li>
          <img src={fruit.image} alt={fruit.name}></img>
        </ul>
      ))}
    </div>
  );
};

export default FruitList;