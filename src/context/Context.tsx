import { createContext, useState } from "react";
import { OptionsProps, DataRow } from "../utils/types/types";

interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextType {
  data: DataRow[];
  setData: (value: DataRow[]) => void;
  currentPlot: OptionsProps | null; // Allow null
  setCurrentPlot: (value: OptionsProps | null) => void; 
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: ContextProviderProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [currentPlot, setCurrentPlot] = useState<OptionsProps | null>(null);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        currentPlot,
        setCurrentPlot
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
