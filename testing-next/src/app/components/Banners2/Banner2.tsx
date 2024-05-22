import Titlequest from "./Titlequests";
import "./Banner2.scss";
import CardQuests from "./Cardsquests";
import { useGetQuestsQuery } from "@/app/service/api";

type Props = {
  setState: Function;
  setInfo: Function;
};

const Banner2 = ({ setState, setInfo }: Props) => {
  const data = useGetQuestsQuery();
  console.log(data);
  return (
    <div className="banner-two">
      <Titlequest />
      <CardQuests setState={setState} setInfo={setInfo} />
    </div>
  );
};
export default Banner2;
