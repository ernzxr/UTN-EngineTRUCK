import { getFeatures, createFeature, updateFeature, deleteFeature } from "../../services/modules/features";
import { Feature, FeatureResponse } from "@/lib/services/interfaces/features";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface FeaturesState {
  updateState: boolean;
  loading: boolean;
  featuresList: FeatureResponse[];
  error: string;
  response: string;
}

const featureState:FeaturesState = {
  updateState: false,
  loading: false,
  featuresList: [],
  error: "",
  response: ""
};


export const fetchFeatures = createAsyncThunk(
  "features/fetchFeatures",
  async () => {
      const response:any = await getFeatures();
      return response.data;
  }
);

export const addFeature = createAsyncThunk(
  "manufacturers/addFeatures",
  async (data:Feature) => {
      const response:any = await createFeature(data);
      return response.data;
  }
);

export const modifiedFeature = createAsyncThunk(
  "features/modifiedFeatures",
  async (data:any) => {
      const response:any = await updateFeature(data);
      return response.data;
  }
);

export const removeFeature = createAsyncThunk(
  "features/removeFeature",
  async (id:number) => {
      await deleteFeature(id);
      return id;
    }
);

const featuresSlice = createSlice({
  name: "features",
  initialState: featureState,
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
    .addCase(fetchFeatures.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchFeatures.fulfilled, (state, action) => {
      state.featuresList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchFeatures.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addFeature.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addFeature.fulfilled, (state, action) => {
      state.featuresList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addFeature.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedFeature.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedFeature.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.featuresList.findIndex((feature) => {
        return feature.id === data.id
      });
      if (index !== -1){
        state.featuresList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedFeature.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeFeature.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeFeature.fulfilled, (state, action) => {
      state.loading = false; 
      state.featuresList = state.featuresList.filter((feature) => {
        return feature.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeFeature.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});


export default featuresSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = featuresSlice.actions;
