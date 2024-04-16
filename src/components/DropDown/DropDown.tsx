import Select from "react-select";

import styles from "./DropDown.module.scss";

interface OptionsProps {
  value: string;
  label: string;
}

export const DropDown = () => {
  const options = [
    { value: "line", label: "Line Plot" },
    { value: "bar", label: "Bar Chart" },
    { value: "scatter", label: "Scatter Plot" },
    { value: "histogram", label: "Histogram" },
  ];

  const handleSelection = (selectedOption: OptionsProps | null) => {
    console.log(selectedOption);
  };

  return (
    <div className={styles.dropDownContainer}>
      <Select options={options} onChange={handleSelection} />
    </div>
  );
};
