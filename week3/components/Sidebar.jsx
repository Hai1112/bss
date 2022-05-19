import styles from "../styles/Sidebar.module.scss";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <i className={`${styles.headerIcon} fa-solid fa-desktop`}></i>
        <span className={styles.headerText}>Device Manager</span>
      </div>
      <div className={styles.user}>
        <i className={`${styles.userIcon} fa-solid fa-circle-user`}></i>
        <span className={styles.userText}>Welcome</span>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} href="/dashboard">
            <a>
              <i
                className={`${styles.itemIcon} fa-solid fa-bars-staggered`}
              ></i>
              <span>Dashboard</span>
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} href="/logs">
            <a>
              <i
                className={`${styles.itemIcon} fa-solid fa-clock-rotate-left`}
              ></i>
              <span>Logs</span>
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <i className={`${styles.itemIcon} fa-solid fa-gear`}></i>
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
