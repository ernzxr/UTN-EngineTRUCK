import { getEngines, createEngine, updateEngine, deleteEngine } from "../../services/modules/engines";
import { EngineCreate, EngineResponse } from "@/lib/services/interfaces/engines";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface EnginesState {
  updateState: boolean;
  loading: boolean;
  enginesList: EngineResponse[];
  error: string;
  response: string;
}

const engineState:EnginesState = {
  updateState: false,
  loading: false,
  enginesList: [],
  error: "",
  response: ""
};


export const fetchEngines = createAsyncThunk(
  "engines/fetchEngines",
  async () => {
      const response:any = await getEngines();
      return response.data;
  }
);

export const addEngine = createAsyncThunk(
  "manufacturers/addEngines",
  async (data:EngineCreate) => {
      const response:any = await createEngine(data);
      return response.data;
  }
);

export const modifiedEngine = createAsyncThunk(
  "engines/modifiedEngines",
  async (data:any) => {
      const response:any = await updateEngine(data);
      return response.data;
  }
);

export const removeEngine = createAsyncThunk(
  "engines/removeEngine",
  async (id:number) => {
      await deleteEngine(id);
      return id;
    }
);

const enginesSlice = createSlice({
  name: "engines",
  initialState: engineState,
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
    .addCase(fetchEngines.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchEngines.fulfilled, (state, action) => {
      state.enginesList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchEngines.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addEngine.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addEngine.fulfilled, (state, action) => {
      state.enginesList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addEngine.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedEngine.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedEngine.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.enginesList.findIndex((engine) => {
        return engine.id === data.id
      });
      if (index !== -1){
        state.enginesList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedEngine.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeEngine.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeEngine.fulfilled, (state, action) => {
      state.loading = false; 
      state.enginesList = state.enginesList.filter((engine) => {
        return engine.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeEngine.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});


export default enginesSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = enginesSlice.actions;
