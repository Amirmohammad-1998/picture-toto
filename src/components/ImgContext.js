import React , {createContext , useState} from "react";


export const ImgContext = createContext();


export const ImgProvider = (props)=>{

    const [imgUrl , setImgUrl] = useState("");
    


    return(

        <ImgContext.Provider value={[imgUrl , setImgUrl]}>
            {props.children}
        </ImgContext.Provider>
    );
}

