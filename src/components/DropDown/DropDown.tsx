import Select from "react-select";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { OptionsProps } from "../../utils/types/types";

import styles from "./DropDown.module.scss";

interface DropDownProps {
  options: OptionsProps[];
}

export const DropDown: React.FC<DropDownProps> = ({ options }) => {
  const { setCurrentGroupBy, setCurrentPlot } = useContext(Context);

  const handleSelection = (selectedOption: OptionsProps | null) => {
    if (selectedOption) {
      if (selectedOption.value === "bar" || selectedOption.value === "pie") {
        // If the selected option is a plot type, set the plot type
        setCurrentPlot(selectedOption.value);
      } else {
        // Otherwise, set the group by option
        setCurrentGroupBy(selectedOption);
      }
    } else {
      setCurrentGroupBy({ value: "", label: "" });
    }
  };

  return (
    <div className={styles.dropDownContainer}>
      <Select options={options} onChange={handleSelection} />
    </div>
  );
};
