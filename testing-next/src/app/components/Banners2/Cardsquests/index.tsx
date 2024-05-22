import CardQuestItem from "./CardQuestItem/CardQuestItem";
import "./Cardsquests.scss";
import { quests } from "@/app/moks/quests";
type Props = {
  setState: Function;
  setInfo: Function;
};
const CardQuests = ({ setState, setInfo }: Props) => {
  return (
    <ul className="card-quests__list">
      {quests.map((quest, index) => {
        return (
          <CardQuestItem
            setInfo={setInfo}
            setState={setState}
            key={index}
            text={quest.text}
            coins={quest.coins}
            src={quest.src}
            taskText={quest.taskText}
          />
        );
      })}
    </ul>
  );
};

export default CardQuests;
