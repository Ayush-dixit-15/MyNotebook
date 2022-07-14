import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";



const NoteState =(props)=>{
    const s1 = {
        "name":"ayush",
        "class":"it1",
    }
    const [state, setState] = useState(s1);
    const update=()=>{
        setTimeout(() => {
            setState({ 
                "name":"prtayush",
                "class":"12a",
            })
        }, 1000);
    }

    return(
        <NoteContext.Provider value={{state, update}}>
            {props.children} 
        </NoteContext.Provider>
    )
}
export default NoteState
