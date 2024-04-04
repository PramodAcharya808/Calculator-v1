import styles from "./InputArea.module.css";

let InputArea = ({ inputData }) => {
  return <input className={`${styles.display}`} value={inputData} readOnly />;
};

export default InputArea;
