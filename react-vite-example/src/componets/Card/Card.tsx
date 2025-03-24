// import "./styles.css";
import styles from "./Card.module.scss"

const Card = ({ title, description }) => {
  return <div className={styles.card}>I am a card</div>;
};

export { Card };
