import { createContext, useState } from "react";
import { OptionsProps, DataRow } from "../utils/types/types";

interface ContextProviderProps {
  children: React.ReactNode;
}

export interface ContextType {
  data: DataRow[];
  setData: (value: DataRow[]) => void;
  currentGroupBy: OptionsProps | null;
  setCurrentGroupBy: (value: OptionsProps | null) => void;
  currentPlot: string;
  setCurrentPlot: (value: string) => void;
  mapCurrentIndividual: string;
  setMapCurrentIndividual: (value: string) => void;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: ContextProviderProps) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [currentGroupBy, setCurrentGroupBy] = useState<OptionsProps | null>(
    null
  );
  const [currentPlot, setCurrentPlot] = useState("");
  const [mapCurrentIndividual, setMapCurrentIndividual] = useState("");

  return (
    <Context.Provider
      value={{
        data,
        setData,
        currentGroupBy,
        setCurrentGroupBy,
        currentPlot,
        setCurrentPlot,
        mapCurrentIndividual,
        setMapCurrentIndividual
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
