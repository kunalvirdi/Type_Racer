import {configureStore} from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import paraSlice from "./paraSlice";


const store=configureStore({
    reducer:{username:usersSlice.reducer,paragraphs:paraSlice.reducer}
})
export default store;