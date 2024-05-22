import Image from "next/image";
import "./CardQuestItem.scss";
type Props = {
  text: string;
  coins: number;
  src: string;
  taskText: string;
  setState: Function;
  setInfo: Function;
};
const CardQuestItem = ({
  text,
  coins,
  src,
  setState,
  setInfo,
  taskText,
}: Props) => {
  return (
    <li
      onClick={() => {
        setState(true);
        setInfo({ taskTitle: text, coins, logoSrc: src, taskText });
      }}
      className="card-quest__item"
    >
      <div className="card-quest__main">
        <p className="card-quest__text">{text}</p>
      </div>
      <div className="card-quest__bottom">
        <div className="card-quest__coins-section">
          <p className="card-quest__coins">{coins}</p>
          <Image
            src="/coin.png"
            width={26}
            height={26}
            alt="coin"
            className="card-quest__coin-image"
          />
        </div>
        <Image
          src={src}
          className="card-quest__image"
          width={120}
          height={40}
          alt="image"
        />
      </div>
    </li>
  );
};

export default CardQuestItem;
