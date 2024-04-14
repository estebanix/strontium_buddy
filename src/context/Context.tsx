import { createContext, useState } from "react";

export interface ContextType {
  data: DataRow[];
  setData: (value: DataRow[]) => void;
}

export interface DataRow {
  [key: string]: string | number;
}

export const Context = createContext<ContextType>({} as ContextType);

const ContextProvider = (props: any) => {
  const [data, setData] = useState<DataRow[]>([]);

  return (
    <Context.Provider
      value={{
        data,
        setData
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
