import Select from "react-select";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { OptionsProps } from "../../utils/types/types";
import { options } from "../../utils/constans/plotOptions";

import styles from "./DropDown.module.scss";

export const DropDown = () => {
  const { currentPlot, setCurrentPlot } = useContext(Context);

  const handleSelection = (selectedOption: OptionsProps | null) => {
    if (selectedOption) {
      setCurrentPlot(selectedOption);
    } else {
        setCurrentPlot({ value: "", label: "" });
    }
  };

  return (
    <div className={styles.dropDownContainer}>
      <Select options={options} onChange={handleSelection} />
      {currentPlot?.label}
    </div>
  );
};
