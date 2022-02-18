import Card from "./UI/Card";
import styles from "../styles/InfoCard.module.css";
const InfoCard = () => {
  return (
    <Card className={styles.info_card_main}>
      <div className={styles.info_card}>
        <h4>FOR YOUR INFO</h4>
        <h2 className={styles.heading}>Step by step on How to do things</h2>
        <span style={{ fontWeight: "600" }}>Scroll and know</span>
        <span style={{ float: "right", color: "#38C773" }}>1/3</span>
      </div>
    </Card>
  );
};

export default InfoCard;
