import React from "react";
import styles from "./RecoveryRate.module.css";
import CountUp from "react-countup";
import { getPercentage } from "../../api/functions";

function RecoveryRate({ data: { confirmed, deaths, recovered }, country }) {
  let rate = getPercentage(confirmed, recovered);

  let givenClasses = [styles.Rate];
  if (rate > 50) {
    givenClasses = [styles.Rate, styles.Blue];
  }
  return confirmed || confirmed === 0 ? (
    <div className={styles.RecoveryRate}>
      <h1 className="h5">{country ? country : "Global"} Rate of Recovery</h1>
      <div className={givenClasses.join(" ")}>
        <p className="h5">
          <CountUp start={0} end={rate} duration={2} separator="," />%
        </p>
      </div>
    </div>
  ) : null;
}
export default RecoveryRate;
