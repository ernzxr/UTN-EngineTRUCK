import { getCompatibleComponents, createCompatibleComponent, updateCompatibleComponent, deleteCompatibleComponent } from "../../services/modules/compatibleComponents";
import { CompatibleComponentCreate, CompatibleComponentResponse } from "@/lib/services/interfaces/compatibleComponents";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface CompatibleComponentsState {
  updateState: boolean;
  loading: boolean;
  compatibleComponentsList: CompatibleComponentResponse[];
  error: string;
  response: string;
}

const compatibleComponentState:CompatibleComponentsState = {
  updateState: false,
  loading: false,
  compatibleComponentsList: [],
  error: "",
  response: ""
};

export const fetchCompatibleComponents = createAsyncThunk(
  "compatibleComponents/fetchCompatibleComponents",
  async () => {
      const response:any = await getCompatibleComponents();
      return response.data;
  }
);

export const addCompatibleComponent = createAsyncThunk(
  "manufacturers/addCompatibleComponents",
  async (data:CompatibleComponentCreate) => {
      const response:any = await createCompatibleComponent(data);
      return response.data;
  }
);

export const modifiedCompatibleComponent = createAsyncThunk(
  "compatibleComponents/modifiedCompatibleComponents",
  async (data:any) => {
      const response:any = await updateCompatibleComponent(data);
      return response.data;
  }
);

export const removeCompatibleComponent = createAsyncThunk(
  "compatibleComponents/removeCompatibleComponent",
  async (id:number) => {
      await deleteCompatibleComponent(id);
      return id;
    }
);

const compatibleComponentsSlice = createSlice({
  name: "compatibleComponents",
  initialState: compatibleComponentState,
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
    .addCase(fetchCompatibleComponents.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchCompatibleComponents.fulfilled, (state, action) => {
      state.compatibleComponentsList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchCompatibleComponents.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addCompatibleComponent.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addCompatibleComponent.fulfilled, (state, action) => {
      state.compatibleComponentsList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addCompatibleComponent.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedCompatibleComponent.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedCompatibleComponent.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.compatibleComponentsList.findIndex((compatibleComponent) => {
        return compatibleComponent.id === data.id
      });
      if (index !== -1){
        state.compatibleComponentsList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedCompatibleComponent.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeCompatibleComponent.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeCompatibleComponent.fulfilled, (state, action) => {
      state.loading = false; 
      state.compatibleComponentsList = state.compatibleComponentsList.filter((compatibleComponent) => {
        return compatibleComponent.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeCompatibleComponent.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});


export default compatibleComponentsSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = compatibleComponentsSlice.actions;
