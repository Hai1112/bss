import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import styles from "../styles/Dashboard.module.scss";
import axios from "axios";

const dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [ip, setIp] = useState("");
  const [power, setPower] = useState("");
  const [list, setList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getDevices = async () => {
      const res = await axios.get("http://localhost:4000/devices");
      setList(res.data);
    };
    getDevices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let date = new Date();
    let today =
      date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    if (name && macAddress && ip && power) {
      const newDevice = {
        name,
        macAddress,
        ip,
        createdDate: today,
        powerConsumption: power,
      };
      await axios.post("http://localhost:4000/devices", newDevice);
      setError("");
      setList((prev) => [...prev, newDevice]);
    } else {
      setError("Please fill up all device info");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuButton} onClick={() => setOpenMenu(true)}>
        <i className={`${styles.menuIcon} fa-solid fa-bars`}></i>
      </div>
      <Sidebar openMenu={openMenu} />
      <div className={styles.main} onClick={() => setOpenMenu(false)}>
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
              {list.map((device) => (
                <tr key={device.name}>
                  <td>{device.name}</td>
                  <td>{device.macAddress}</td>
                  <td>{device.ip}</td>
                  <td>{device.createdDate}</td>
                  <td>{device.powerConsumption}</td>
                </tr>
              ))}
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
            <div className={styles.chart}></div>
            <form className={styles.form}>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="Name"
                />
              </div>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setMacAddress(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="MAC Address"
                />
              </div>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setIp(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="IP"
                />
              </div>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setPower(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="Power consumption"
                />
              </div>
              <span className={styles.errorMessage}>{error}</span>
              <button
                onClick={handleSubmit}
                type="submit"
                className={styles.formButton}
              >
                ADD DEVICE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
