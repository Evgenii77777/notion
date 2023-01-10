import { useSelector } from "react-redux";
import { getMessage } from "../../redux/message/message-selectors";
import { MatchItem } from "../match-item";
import { Modal } from "../modal";
import { Matches } from "../../components/data";

import styles from "./main.module.css";

export const Main = () => {
  const beet = useSelector(getMessage);

  return (
    <main className={styles.container}>
      {beet && <Modal beet={beet} />}
      <h2 className={styles.title}>Сегодняшние матчи</h2>
      <ul>
        {Matches.map((el) => {
          if (el.date) {
            return <MatchItem el={el} id={el.id} />;
          }
        })}
      </ul>
      <h2 className={styles.title}>Ближайшие матчи </h2>
      <ul>
        {Matches.map((el) => {
          if (!el.date) {
            return <MatchItem el={el} id={el.id} />;
          }
        })}
      </ul>
    </main>
  );
};
