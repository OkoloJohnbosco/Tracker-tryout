import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLink, faHome } from "@fortawesome/free-solid-svg-icons";
import classes from "./FloatingButton.module.css";
library.add(fab);

function FloatingButton() {
  const [toggle, setToggle] = useState(false);
  let toggleClass = [classes.Float];
  if (toggle) toggleClass = [classes.Float, classes.Toggle];
  return (
    <div className={toggleClass.join(" ")}>
      <div className={classes.InnerFloat}>
        <button onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faLink} style={{ color: "palegoldenrod" }} />
        </button>
        <button className={classes.SecondButton}>
          <FontAwesomeIcon icon={["fab", "github"]} style={{ color: "#444" }} />
        </button>
        <button className={classes.ThirdButton}>
          <FontAwesomeIcon icon={faHome} />
        </button>
        <button className={classes.FourthButton}>
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            style={{ color: "white" }}
          />
        </button>
        <button className={classes.FivethButton}>
          <FontAwesomeIcon
            icon={["fab", "whatsapp"]}
            style={{ color: "green" }}
          />
        </button>
      </div>
    </div>
  );
}
export default FloatingButton;
