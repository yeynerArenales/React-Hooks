import React from "react";
import styles from "../styles/Character.module.css";

function Character({
  name,
  urlImage,
  status,
  species,
  url,
  locationName,
  gender,
}) {
  let circleStatus;
  if (status === "Dead") {
    circleStatus = <div className={styles.DeadCircle}></div>;
  } else if (status === "Alive") {
    circleStatus = <div className={styles.AliveCircle}></div>;
  } else {
    circleStatus = <div className={styles.UnknownCircle}></div>;
  }
  return (
    <div className={styles.Character}>
      <img className={styles.Image} src={urlImage} alt={name} />
      <div className={styles.Info}>
        <a
          href={url}
          className={styles.Title}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          {name}
        </a>
        <div className={styles.StatusInfo}>
          {circleStatus}
          <span className={styles.Status}>
            {status} - {species}
          </span>
        </div>
        <div className={styles.Desc}>
          <span className={styles.SubTitle}>Last known location:</span>
          <p className={styles.Content}>{locationName}</p>
        </div>
        <div className={styles.Desc}>
          <span className={styles.SubTitle}>Gender:</span>
          <p className={styles.Content}>{gender}</p>
        </div>
      </div>
    </div>
  );
}

export default Character;
