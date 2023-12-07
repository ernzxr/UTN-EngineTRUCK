import { getManufacturers } from "@/app/services/modules/manufacturers";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const manufacturerState = {
  manufacturersList: [],
};

export const fetchManufacturers = createAsyncThunk(
  "manufacturers/fetchManufacturers",
  async () => {
    try {
      const response:any = await getManufacturers();
      return response.data;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      throw error;
    }
  }
);

const manufacturersSlice = createSlice({
  name: "manufacturers",
  initialState: manufacturerState,
  reducers: {
    setManufacturersList: (state, action) => {
      state.manufacturersList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchManufacturers.fulfilled, (state, action) => {
      state.manufacturersList = action.payload;
    });
    builder.addCase(fetchManufacturers.rejected, (state, action) => {
      console.error("Error al obtener los datos:", action.error);
    });
  }
});

export default manufacturersSlice.reducer;
export const { setManufacturersList } = manufacturersSlice.actions;
