import styles from "./App.module.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Btn_Creation from "./components/Btn_Creation.jsx";
import InputArea from "./components/InputArea.jsx";
import { useState } from "react";

let App = () => {
  let btn_list = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  let [inputData, setEvalData] = useState("");

  let onClickHandler = (inputVal) => {
    if (inputVal == "C") {
      setEvalData("");
    } else if (inputVal == "=") {
      setEvalData(eval(inputData));
    } else {
      const newData = inputData + inputVal;
      setEvalData(newData);
    }
  };

  return (
    <div className={styles.outer_wrapper}>
      <div className={styles.inner_wrapper}>
        <InputArea inputData={inputData}></InputArea>
        <div className={`${styles.button_container} text-center`}>
          <Btn_Creation
            btn_list={btn_list}
            onClickPassData={onClickHandler}
          ></Btn_Creation>
        </div>
      </div>
    </div>
  );
};

export default App;
