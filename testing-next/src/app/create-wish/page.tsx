import Header from "../../components/HeaderGift/HeaderGift";
import Creating from "@/components/CreatingWish/index"
import styles from "./createWish.module.scss";


export default function CreatingWish() {
    return (
      <div>
        <div>
          <Header/>
        </div>
        <div>
          <Creating />
        </div>
      </div>
      );
    }