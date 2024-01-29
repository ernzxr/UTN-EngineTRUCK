import { getFeatureDetails, createFeatureDetail, updateFeatureDetail, deleteFeatureDetail } from "../../services/modules/featureDetails";
import { FeatureDetailCreate, FeatureDetailResponse } from "@/lib/services/interfaces/featureDetails";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface FeatureDetailsState {
  updateState: boolean;
  loading: boolean;
  featureDetailsList: FeatureDetailResponse[];
  error: string;
  response: string;
}

const featureDetailState:FeatureDetailsState = {
  updateState: false,
  loading: false,
  featureDetailsList: [],
  error: "",
  response: ""
};

export const fetchFeatureDetails = createAsyncThunk(
  "featureDetails/fetchFeatureDetails",
  async () => {
      const response:any = await getFeatureDetails();
      return response.data;
  }
);

export const addFeatureDetail = createAsyncThunk(
  "manufacturers/addFeatureDetails",
  async (data:FeatureDetailCreate) => {
      const response:any = await createFeatureDetail(data);
      return response.data;
  }
);

export const modifiedFeatureDetail = createAsyncThunk(
  "featureDetails/modifiedFeatureDetails",
  async (data:any) => {
      const response:any = await updateFeatureDetail(data);
      return response.data;
  }
);

export const removeFeatureDetail = createAsyncThunk(
  "featureDetails/removeFeatureDetail",
  async (id:number) => {
      await deleteFeatureDetail(id);
      return id;
    }
);

const featureDetailsSlice = createSlice({
  name: "featureDetails",
  initialState: featureDetailState,
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
    .addCase(fetchFeatureDetails.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchFeatureDetails.fulfilled, (state, action) => {
      state.featureDetailsList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchFeatureDetails.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addFeatureDetail.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addFeatureDetail.fulfilled, (state, action) => {
      state.featureDetailsList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addFeatureDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedFeatureDetail.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedFeatureDetail.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.featureDetailsList.findIndex((featureDetail) => {
        return featureDetail.id === data.id
      });
      if (index !== -1){
        state.featureDetailsList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedFeatureDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeFeatureDetail.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeFeatureDetail.fulfilled, (state, action) => {
      state.loading = false; 
      state.featureDetailsList = state.featureDetailsList.filter((featureDetail) => {
        return featureDetail.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeFeatureDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});


export default featureDetailsSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = featureDetailsSlice.actions;
