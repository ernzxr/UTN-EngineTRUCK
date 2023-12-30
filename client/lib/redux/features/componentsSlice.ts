import { getComponents, createComponent, updateComponent, deleteComponent } from "@/lib/services/modules/components";
import { ComponentCreate, ComponentResponse } from "@/lib/services/interfaces/components";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ComponentsState {
  updateState: boolean;
  loading: boolean;
  componentsList: ComponentResponse[];
  error: string;
  response: string;
}

const componentState:ComponentsState = {
  updateState: false,
  loading: false,
  componentsList: [],
  error: "",
  response: ""
};

export const fetchComponents = createAsyncThunk(
  "components/fetchComponents",
  async () => {
      const response:any = await getComponents();
      return response.data;
  }
);

export const addComponent = createAsyncThunk(
  "components/addComponent",
  async (data:ComponentCreate) => {
      const response:any = await createComponent(data);
      return response.data;
  }
);

export const modifiedComponent = createAsyncThunk(
  "components/modifiedComponent",
  async (data:any) => {
    const response:any = await updateComponent(data);
      return response.data;
  }
);

export const removeComponent = createAsyncThunk(
  "components/removeComponent",
  async (id:number) => {
      await deleteComponent(id);
      return id;
    }
);

const componentsSlice = createSlice({
  name: "components",
  initialState: componentState,
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
    .addCase(fetchComponents.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchComponents.fulfilled, (state, action) => {
      state.componentsList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchComponents.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addComponent.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addComponent.fulfilled, (state, action) => {
      state.componentsList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addComponent.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedComponent.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedComponent.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.componentsList.findIndex((component) => {
        return component.id === data.id
      });
      if (index !== -1){
        state.componentsList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedComponent.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeComponent.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeComponent.fulfilled, (state, action) => {
      state.loading = false; 
      state.componentsList = state.componentsList.filter((component) => {
        return component.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeComponent.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});

export default componentsSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = componentsSlice.actions;
