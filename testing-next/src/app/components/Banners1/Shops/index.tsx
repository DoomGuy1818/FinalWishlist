import Cardsshops from "../Cardsshops";
import Titleshops from "../Titleshops";
import "./Shops.scss";
const Shops = () => {
  return (
    <div className="shops">
      <Titleshops />
      <Cardsshops />
    </div>
  );
};

export default Shops;
