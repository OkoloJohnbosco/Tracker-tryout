import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = (props) =>
  props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;

const nthValue = (num, nth) => {
  let editedNum = String(num);
  editedNum = editedNum.includes("-") ? editedNum.slice(1) : editedNum;

  let result = editedNum
    .split("")
    .reverse()
    .filter((value, index) => index + 1 === +nth);

  return result.length ? result.toString() : -1;
};
nthValue(-12345, 3);
