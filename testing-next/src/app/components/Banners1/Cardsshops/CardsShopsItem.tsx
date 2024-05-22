import Image from "next/image";
type Props = {
  shopIcon: string;
  itemClassName: string;
  imageClassName: string;
  width: number;
  height: number;
};
const CardsShopsItem = ({
  shopIcon,
  itemClassName,
  imageClassName,
  width,
  height,
}: Props) => {
  return (
    <li className={itemClassName}>
      <Image
        className={imageClassName}
        alt="shop-icon"
        src={shopIcon}
        width={width}
        height={height}
      />
    </li>
  );
};
export default CardsShopsItem;
