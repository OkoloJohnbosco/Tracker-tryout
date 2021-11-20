import React, { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

function Modal(props) {
  let style = {};
  if (props.show) {
    style = {
      transform: "scale(0)",
      opacity: "0",
    };
  }
  return (
    <Fragment>
      <div className={styles.Modal} style={style}>
        {props.chlidren}
      </div>
      <Backdrop clicked={props.closeModal} />
    </Fragment>
  );
}

export default Modal;
