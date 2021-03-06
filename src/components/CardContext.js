import React , {createContext , useState} from "react";


export const CardContext = createContext();


export const CardProvider = (props)=>{

    const [cards , setCards] = useState([]);
    


    return(

        <CardContext.Provider value={[cards , setCards]}>
            {props.children}
        </CardContext.Provider>
    );
}

