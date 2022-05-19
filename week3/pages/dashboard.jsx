import { useEffect, useState, PureComponent } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import styles from "../styles/Dashboard.module.scss";
import { devices } from "../constant/devices";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";

const dashboard = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [name, setName] = useState("");
  const [macAddress, setMacAddress] = useState("");
  const [ip, setIp] = useState("");
  const [power, setPower] = useState("");
  const [list, setList] = useState(devices);

  const handleSubmit = (e) => {
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
      setList(list.push(newDevice));
    }
  };

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={fill}
          fill="none"
        />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          textAnchor={textAnchor}
          fill="#333"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) * 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="#999"
        >
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuButton} onClick={() => setOpenMenu(true)}>
        <i className={`${styles.menuIcon} fa-solid fa-bars`}></i>
      </div>
      <Sidebar openMenu={openMenu} />
      <div className={styles.main} onClick={() => setOpenMenu(false)}>
        <Topbar />
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
              {devices.map((device) => (
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
            <div className={styles.chart}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                  <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={list}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={this.onPieEnter}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <form className={styles.form}>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="Name"
                />
                <span className={styles.errorMessage}></span>
              </div>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setMacAddress(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="MAC Address"
                />
                <span className={styles.errorMessage}></span>
              </div>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setIp(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="IP"
                />
                <span className={styles.errorMessage}></span>
              </div>
              <div className={styles.formInput}>
                <input
                  onChange={(e) => setPower(e.target.value)}
                  type="text"
                  className={styles.input}
                  placeholder="Power consumption"
                />
                <span className={styles.errorMessage}></span>
              </div>
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
