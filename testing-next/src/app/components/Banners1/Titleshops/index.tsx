import Image from "next/image";

import "./Titleshops.scss";
import TitleItem from "../../TitleItem";

const Titleshops = () => {
  return (
    <div className="shops-title">
      <TitleItem
        text="Оффлайн магазины"
        className="title-item offline-shops"
        funct={() => {}}
      />
      <div className="slider-buttons">
        <button className="slider-button">
          <Image
            src="/slider-left.svg"
            alt="arrow-left"
            width={20}
            height={20}
          />
        </button>
        <button className="slider-button">
          <Image
            src="/slider-right.svg"
            alt="arrow-right"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};
export default Titleshops;
