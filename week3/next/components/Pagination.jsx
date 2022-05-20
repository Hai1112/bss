import styles from "../styles/Pagination.module.scss";

const Pagination = ({ itemPerPage, total, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.pagination}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={styles.page}
          onClick={() => paginate(number)}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
