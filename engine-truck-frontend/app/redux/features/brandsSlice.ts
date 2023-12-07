import { getBrands } from "@/app/services/modules/brands";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const brandState = {
  brandsList: [],
};

export const fetchBrands = createAsyncThunk(
  "brands/fetchBrands",
  async () => {
    try {
      const response:any = await getBrands();
      return response.data;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      throw error;
    }
  }
);

const brandsSlice = createSlice({
  name: "brands",
  initialState: brandState,
  reducers: {
    setBrandsList: (state, action) => {
      state.brandsList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.brandsList = action.payload;
    });
    builder.addCase(fetchBrands.rejected, (state, action) => {
      console.error("Error al obtener los datos:", action.error);
    });
  }
});

export default brandsSlice.reducer;
export const { setBrandsList } = brandsSlice.actions;
