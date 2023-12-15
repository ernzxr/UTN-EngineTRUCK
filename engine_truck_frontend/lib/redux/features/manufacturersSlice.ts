import { getManufacturers, createManufacturer, updateManufacturer, deleteManufacturer } from "@/lib/services/modules/manufacturers";
import { Manufacturer, ManufacturerCreate, ManufacturerResponse } from "@/lib/services/interfaces/manufacturers";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ManufacturersState {
  updateState: boolean;
  loading: boolean;
  manufacturersList: ManufacturerResponse[];
  error: string;
  response: string;
}

const manufacturerState:ManufacturersState = {
  updateState: false,
  loading: false,
  manufacturersList: [],
  error: "",
  response: ""
};

export const fetchManufacturers = createAsyncThunk(
  "manufacturers/fetchManufacturers",
  async () => {
      const response:any = await getManufacturers();
      return response.data;
  }
);

export const addManufacturer = createAsyncThunk(
  "manufacturers/addManufacturer",
  async (data:ManufacturerCreate) => {
      const response:any = await createManufacturer(data);
      return response.data;
  }
);

export const modifiedManufacturer = createAsyncThunk(
  "manufacturers/modifiedManufacturer",
  async (data:ManufacturerResponse) => {
      await updateManufacturer(data);
      return data;
  }
);

export const removeManufacturer = createAsyncThunk(
  "manufacturers/removeManufacturer",
  async (id:number) => {
      await deleteManufacturer(id);
      return id;
    }
);

const manufacturersSlice = createSlice({
  name: "manufacturers",
  initialState: manufacturerState,
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
    .addCase(fetchManufacturers.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchManufacturers.fulfilled, (state, action) => {
      state.manufacturersList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchManufacturers.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addManufacturer.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addManufacturer.fulfilled, (state, action) => {
      state.manufacturersList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addManufacturer.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedManufacturer.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedManufacturer.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.manufacturersList.findIndex((manufacturer) => {
        return manufacturer.id === data.id
      });
      if (index !== -1){
        state.manufacturersList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedManufacturer.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeManufacturer.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeManufacturer.fulfilled, (state, action) => {
      state.loading = false; 
      state.manufacturersList = state.manufacturersList.filter((manufacturer) => {
        return manufacturer.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeManufacturer.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});

export default manufacturersSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = manufacturersSlice.actions;
