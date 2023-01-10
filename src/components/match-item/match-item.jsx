import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addId } from "../../redux/id/id-actions";

import styles from "./match-item.module.css";

export const MatchItem = ({ el }) => {
  const dispatch = useDispatch();
  const handleId = (id) => dispatch(addId(id));

  return (
    <>
      <li className={styles.item}>
        <Link onClick={() => handleId(el.id)} to={`/match/${el.id}`} match={el}>
          <span>{el.team1}</span>
          <span> - </span>
          <span>{el.team2}</span>
        </Link>
      </li>
    </>
  );
};
