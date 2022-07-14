import React from "react";
import noteContext from "./noteContext";



const NoteState =(props)=>{
    const state = {
        "name":"ayush",
        "class":"it1",
    }

    return(
        <NoteState.provide value={state}>
            {props.children}
        </NoteState.provide>
    )
}
export default NoteState
