import styles from "../styles/Topbar.module.scss";

const Topbar = () => {
  return (
    <div className={styles.topBar}>
      <i className={`${styles.userIcon} fa-solid fa-circle-user`}></i>
      <span className={styles.userText}>Welcome John</span>
    </div>
  );
};

export default Topbar;
