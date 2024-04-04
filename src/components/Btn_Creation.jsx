import styles from "./Btn_Creation.module.css";

let Btn_Creation = ({ btn_list, onClickPassData }) => {
  return btn_list.map((btn) => (
    <button
      key={btn}
      className={`btn ${styles.main_button} btn-secondary`}
      onClick={() => onClickPassData(btn)}
    >
      {btn}
    </button>
  ));
};

export default Btn_Creation;
