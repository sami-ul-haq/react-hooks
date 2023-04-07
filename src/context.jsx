import { createContext, useState } from "react";


export const DataContext = createContext();


const DataContextProvider = ({children}) => {
    
    const [renders, setRenders] = useState(0);
    
    return (
        <DataContext.Provider value={{renders,setRenders}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;