import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) =>(

    /* <Provider>composant rend le Redux storedisponible pour tous les composants imbriqués qui doivent
     accéder au magasin Redux. */

    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);


export const useDataLayerValue = () => useContext(DataLayerContext);
