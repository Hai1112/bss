import Sidebar from "../components/Sidebar";
import styles from "../styles/Logs.module.scss";
import Topbar from "../components/Topbar";
import { useState } from "react";

const logs = () => {
  const devices = [
    {
      id: "101",
      name: "TV",
      action: "Turn On",
      power: "50",
    },
    {
      id: "102",
      name: "Radio",
      action: "Turn On",
      power: "20",
    },
    {
      id: "103",
      name: "Washer",
      action: "Turn Off",
      power: "80",
    },
    {
      id: "104",
      name: "Lamp",
      action: "Turn On",
      power: "10",
    },
    {
      id: "105",
      name: "Washing machine",
      action: "Sleep",
      power: "60",
    },
    {
      id: "106",
      name: "PC",
      action: "Sleep",
      power: "40",
    },
    {
      id: "107",
      name: "Refrigerator",
      action: "Turn On",
      power: "100",
    },
    {
      id: "108",
      name: "Smart TV",
      action: "Sleep",
      power: "70",
    },
    {
      id: "109",
      name: "Laptop",
      action: "Turn Off",
      power: "10",
    },
    {
      id: "110",
      name: "Electric Stove",
      action: "Turn On",
      power: "40",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.menuButton} onClick={() => setOpenMenu(true)}>
        <i className={`${styles.menuIcon} fa-solid fa-bars`}></i>
      </div>
      <Sidebar openMenu={openMenu} />
      <div className={styles.main} onClick={() => setOpenMenu(false)}>
        <Topbar />
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>Action Logs</h2>
            <div className={styles.searchWrapper}>
              <input className={styles.searchInput} placeholder="Search..." />
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Device ID</th>
                <th>Name</th>
                <th>Action</th>
                <th>Power Consumption</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((device) => (
                <tr key={device.id}>
                  <td>{device.id}</td>
                  <td>{device.name}</td>
                  <td>{device.action}</td>
                  <td>{device.power}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.pagination}>
            <button className={styles.page}>1</button>
            <button className={styles.page}>2</button>
            <button className={styles.page}>3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default logs;
