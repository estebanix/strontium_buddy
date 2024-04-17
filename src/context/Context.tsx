import { createContext, useState } from "react";
import { OptionsProps, DataRow } from "../utils/types/types";

interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextType {
  data: DataRow[];
  setData: (value: DataRow[]) => void;
  currentGroupBy: OptionsProps | null; // Allow null
  setCurrentGroupBy: (value: OptionsProps | null) => void; 
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: ContextProviderProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [currentGroupBy, setCurrentGroupBy] = useState<OptionsProps | null>(null);

  return (
    <Context.Provider
      value={{
        data,
        setData,
        currentGroupBy,
        setCurrentGroupBy
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
