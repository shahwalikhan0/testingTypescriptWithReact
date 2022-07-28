import React, {useState, createContext} from 'react';

export interface DataType {
    id: number;
    name: string;
    price: number | undefined;
}
export type DataContextProps =  {
    data: DataType[];
    setData:React.Dispatch<React.SetStateAction<DataType[]>>
    show: string;
    setShow: React.Dispatch<React.SetStateAction<string>>;
}
export const DataContext = createContext<DataContextProps | null>(null);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [show, setShow] = useState<string>('show');
    const [data, setData] = useState<DataType[]>([
        {
            id: 1,
            name: 'Dragon',
            price: 100,
        },
        {
            id: 2,
            name: 'Tiger',
            price: 200,
        },
        {
            id: 3,
            name: 'Elephant',
            price: 300,
        }
    ]);

  return(
          <DataContext.Provider value={{data, setData, show, setShow}}>
              {children}
          </DataContext.Provider>
  )
}