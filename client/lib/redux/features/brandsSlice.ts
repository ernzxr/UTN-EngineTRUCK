import { getBrands, createBrand, updateBrand, deleteBrand } from "../../services/modules/brands";
import { Brand, BrandCreate, BrandResponse } from "@/lib/services/interfaces/brands";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface BrandsState {
  updateState: boolean;
  loading: boolean;
  brandsList: BrandResponse[];
  error: string;
  response: string;
}

const brandState:BrandsState = {
  updateState: false,
  loading: false,
  brandsList: [],
  error: "",
  response: ""
};


export const fetchBrands = createAsyncThunk(
  "brands/fetchBrands",
  async () => {
      const response:any = await getBrands();
      return response.data;
  }
);

export const addBrand = createAsyncThunk(
  "manufacturers/addBrands",
  async (data:BrandCreate) => {
      const response:any = await createBrand(data);
      return response.data;
  }
);

export const modifiedBrand = createAsyncThunk(
  "brands/modifiedBrands",
  async (data:BrandResponse) => {
      await updateBrand(data);
      return data;
  }
);

export const removeBrand = createAsyncThunk(
  "brands/removeBrand",
  async (id:number) => {
      await deleteBrand(id);
      return id;
    }
);

const brandsSlice = createSlice({
  name: "brands",
  initialState: brandState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBrands.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchBrands.fulfilled, (state, action) => {
      state.brandsList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchBrands.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addBrand.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addBrand.fulfilled, (state, action) => {
      state.brandsList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedBrand.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedBrand.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.brandsList.findIndex((brand) => {
        return brand.id === data.id
      });
      if (index !== -1){
        state.brandsList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeBrand.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeBrand.fulfilled, (state, action) => {
      state.loading = false; 
      state.brandsList = state.brandsList.filter((brand) => {
        return brand.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});


export default brandsSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = brandsSlice.actions;
