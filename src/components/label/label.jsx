import styles from "./label.module.css";

export const LabelMatch = ({ el, chengeValue, value, id, view, valueBeet }) => {
  return (
    <>
      <label className={styles.label}>
        {`${view}  ${value}`}
        <input
          type="radio"
          name="match"
          id={id}
          value={value}
          checked={valueBeet === `${value}` ? true : false}
          onChange={chengeValue}
        />
      </label>
    </>
  );
};
