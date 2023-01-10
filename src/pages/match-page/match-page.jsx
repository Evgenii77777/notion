import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Matches } from "../../components/data";
import { LabelMatch } from "../../components/label";
import { addMessage } from "../../redux/message/message-action";

import styles from "./match-page.module.css";

export const MatchPage = () => {
  const id = useSelector((state) => state.idMatch.id);
  const dispatch = useDispatch();
  const [valueBeet, setValue] = useState(null);
  const match = Matches.find((el) => el.id === id);
  const onHandleBeet = (beet) => dispatch(addMessage(beet));

  function chengeValue(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <Link to="/">Вернуться на главную</Link>
      <ul>
        <li>
          <p className={styles.title}>
            {match.team1} - {match.team2}
          </p>
          <p className={styles.date}>{match.time}</p>
        </li>
        <li>
          <ul>
            {match.coefficient.map((el) => (
              <>
                <li>
                  <LabelMatch
                    el={el}
                    valueBeet={valueBeet}
                    chengeValue={chengeValue}
                    value={el.win}
                    id="1"
                    view="П1"
                  />
                  <LabelMatch
                    el={el}
                    valueBeet={valueBeet}
                    chengeValue={chengeValue}
                    value={el.draw}
                    id="2"
                    view="Ничья"
                  />
                  <LabelMatch
                    el={el}
                    valueBeet={valueBeet}
                    chengeValue={chengeValue}
                    value={el.loose}
                    id="3"
                    view="П2"
                  />
                </li>
              </>
            ))}
          </ul>
        </li>
      </ul>
      <button
        disabled={!valueBeet}
        onClick={() =>
          onHandleBeet({
            name: `${match.team1} -  ${match.team2}`,
            point: valueBeet,
          })
        }
      >
        <Link to="/">Сделать ставку</Link>
      </button>
    </>
  );
};
