import Sidebar from "../components/Sidebar";
import styles from "../styles/Logs.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";

const logs = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [logs, setLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(4);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState();

  useEffect(() => {
    const getLogs = async () => {
      const res = await axios.get("http://localhost:4000/logs");
      setLogs(res.data);
    };
    getLogs();
  }, []);

  const indexLastItem = itemPerPage * currentPage;
  const indexFirstItem = indexLastItem - itemPerPage;
  const currentItems = logs.slice(indexFirstItem, indexLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const handleSearch = () => {
      let result = logs;
      if (searchInput) {
        result = logs.filter(
          (items) =>
            items.name
              .toLowerCase()
              .search(searchInput.toLowerCase().trim()) !== -1
        );
      }
      setSearchResult(result);
    };
    handleSearch();
  }, [searchInput]);

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
          <div className={styles.header}>
            <h2 className={styles.title}>Action Logs</h2>
            <div className={styles.searchWrapper}>
              <input
                className={styles.searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search..."
              />
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
              {(searchInput ? searchResult : currentItems).map((device) => (
                <tr key={device.id}>
                  <td>{device.id}</td>
                  <td>{device.name}</td>
                  <td>{device.action}</td>
                  <td>{device.power}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!searchInput && (
            <Pagination
              itemPerPage={itemPerPage}
              total={logs.length}
              paginate={paginate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default logs;
