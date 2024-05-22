import Image from "next/image";
import "./TaskBanner.scss";
import TitleItem from "../TitleItem";
type Props = {
  isTaskBannerOpen: boolean;
  setState: Function;
  logoSrc: string;
  taskTitle: string;
  taskText: string;
  taskImage: string;
  coins: number;
};

const TaskBanner = ({
  isTaskBannerOpen,
  setState,
  logoSrc,
  taskTitle,
  taskText,
  taskImage,
  coins,
}: Props) => {
  if (!isTaskBannerOpen) {
    return null;
  }
  const clickOnTheButton = () => {
    setState(false);
  };
  return (
    <div
      className="task-banner__background"
      onClick={() => {
        setState(false);
      }}
    >
      <div className="task-banner__content">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="task-banner__main"
        >
          <Image
            className="task-banner__logo"
            src={logoSrc}
            height={40}
            width={170}
            alt="logo"
          />
          <h3 className="task-banner__title">{taskTitle}</h3>
          <div className="task-banner__task">
            {taskImage ? (
              <Image
                width={121}
                height={121}
                className="task-banner__task-image"
                src={taskImage}
                alt="task-image"
              />
            ) : (
              <div className="gray-square"></div>
            )}
            <p className="task-banner__task-name">{taskText}</p>
          </div>
          <div className="task-banner__coins">
            <p className="task-banner__gray-text">Награда за выполнение:</p>
            <div className="task-banner__coins-section">
              <p className="task-banner__coins-counter">{coins}</p>
              <Image
                className="task-banner__coin-image"
                src="/coin.png"
                width={50}
                height={50}
                alt="coin"
              />
            </div>
          </div>
        </div>
        <div className="dashed-border"></div>
        <div className="task-banner__bottom">
          <TitleItem
            text="Забрать награду"
            className="title-item task-banner__button"
            funct={clickOnTheButton}
          />
        </div>
      </div>
    </div>
  );
};
export default TaskBanner;
