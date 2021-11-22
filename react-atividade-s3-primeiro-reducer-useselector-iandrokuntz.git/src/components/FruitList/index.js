import { useSelector } from "react-redux";
import "./style.css"

const FruitList = () => {

  const fruits = useSelector((state) => state.fruits);

  return (
    <div>
      {fruits.map((fruit) => (
        <ul key={fruit}>
          <li> {fruit.name} </li>
          <img src={fruit.image} alt={fruit.name}></img>
        </ul>
      ))}
    </div>
  );
};

export default FruitList;