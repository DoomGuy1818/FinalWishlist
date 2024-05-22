import "./Cardsshops.scss";
import CardsShopsItem from "./CardsShopsItem";
import { shopsIcons } from "@/app/moks/shopsIcons";

const Cardsshops = () => {
  return (
    <div className="cards-shops">
      <ul className="cards-shops__list">
        {shopsIcons.map((shopIcon, index) => {
          return (
            <CardsShopsItem
              key={index}
              width={160}
              height={60}
              shopIcon={shopIcon}
              itemClassName="cards-shops__item"
              imageClassName="cards-shops__image"
            />
          );
        })}
      </ul>
    </div>
  );
};
export default Cardsshops;
