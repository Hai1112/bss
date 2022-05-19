import Sidebar from "../components/Sidebar";
import styles from "../styles/Dashboard.module.scss";

const dashboard = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <div className={styles.topBar}>
          <i className={`${styles.userIcon} fa-solid fa-circle-user`}></i>
          <span className={styles.userText}>Welcome John</span>
        </div>
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Devices</th>
                <th>MAC Address</th>
                <th>IP</th>
                <th>Created Date</th>
                <th>Power Consumption(Kw/h)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TV</td>
                <td>00:18:44:11:3A:B7</td>
                <td>127.0.0.1</td>
                <td>2022-5-31</td>
                <td>50</td>
              </tr>
              <tr>
                <td>TV</td>
                <td>00:18:44:11:3A:B7</td>
                <td>127.0.0.1</td>
                <td>2022-5-31</td>
                <td>50</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td>100</td>
              </tr>
            </tfoot>
          </table>
          <div className={styles.wrapper}>
            <div className={styles.chart}>chart</div>
            <form className={styles.form}>
              <div className={styles.formInput}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Name"
                />
                <span className={styles.errorMessage}>error</span>
              </div>
              <div className={styles.formInput}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="MAC Address"
                />
                <span className={styles.errorMessage}>error</span>
              </div>
              <div className={styles.formInput}>
                <input type="text" className={styles.input} placeholder="IP" />
                <span className={styles.errorMessage}>error</span>
              </div>
              <div className={styles.formInput}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Power consumption"
                />
                <span className={styles.errorMessage}>error</span>
              </div>
              <button className={styles.formButton}>ADD DEVICE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
