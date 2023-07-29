import {createSlice} from "@reduxjs/toolkit";


const paraSlice=createSlice({
    name:'paragraphs',
    initialState:{
        paragraph:''
    },
    reducers:{
        addPara(state,action){
            state.paragraph=action.payload.paragraph
        }
    }
})

export const paragraphActions=paraSlice.actions;
export default paraSlice;