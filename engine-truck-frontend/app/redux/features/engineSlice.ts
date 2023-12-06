import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    model: "",
    hidden: "",
    available: "",
    brand_id: "",
    manufacturer_id: ""
};

export const engineSlice = createSlice({
    name: "engine",
    initialState,
    reducers: {
        addEngine: (state, action) => {

        } 
    }
}) 