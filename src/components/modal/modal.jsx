import { useDispatch } from "react-redux";
import { addMessage } from "../../redux/message/message-action";
import cross from "../../assets/cross.svg";

import styles from "./modal.module.css";

export const Modal = ({ beet }) => {
  const dispatch = useDispatch();
  const onHandleClose = () => dispatch(addMessage(null));

  return (
    <div className={styles.container}>
      <button
        className={styles.cross}
        type="button"
        onClick={() => onHandleClose()}
      >
        <img src={cross} alt="cross" />
      </button>
      <p
        className={styles.text}
      >{`Спасибо, ваша ставка ${beet.name} , с коэффициентом ${beet.point} принята`}</p>
    </div>
  );
};
