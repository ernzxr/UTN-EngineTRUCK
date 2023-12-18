import { getMedias, createMedia, updateMedia, deleteMedia } from "@/lib/services/modules/media";
import { MediaCreate, MediaResponse } from "@/lib/services/interfaces/media";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface MediaState {
  updateState: boolean;
  loading: boolean;
  mediaList: MediaResponse[];
  error: string;
  response: string;
}

const mediaState:MediaState = {
  updateState: false,
  loading: false,
  mediaList: [],
  error: "",
  response: ""
};

export const fetchMedias = createAsyncThunk(
  "media/fetchMedias",
  async () => {
      const response:any = await getMedias();
      return response.data;
  }
);

export const addMedia = createAsyncThunk(
  "media/addMedia",
  async (data:MediaCreate) => {
      const response:any = await createMedia(data);
      return response.data;
  }
);

export const modifiedMedia = createAsyncThunk(
  "media/modifiedMedia",
  async (data:MediaResponse) => {
      await updateMedia(data);
      return data;
  }
);

export const removeMedia = createAsyncThunk(
  "media/removeMedia",
  async (id:number) => {
      await deleteMedia(id);
      return id;
    }
);

const mediaSlice = createSlice({
  name: "media",
  initialState: mediaState,
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
    .addCase(fetchMedias.pending, (state) => { 
      state.loading = true;
      state.error = "";
    })
    .addCase(fetchMedias.fulfilled, (state, action) => {
      state.mediaList = action.payload;
      state.response = "Get";
      state.loading = false;
      state.error = "";
    })
    .addCase(fetchMedias.rejected, (state, action) => {
      state.error = "Error";
      state.loading = false;
    });

    builder
    .addCase(addMedia.pending, (state) => { 
      state.loading = true;
    })
    .addCase(addMedia.fulfilled, (state, action) => {
      state.mediaList.push(action.payload);
      state.loading = false; 
      state.response = "Add";
    })
    .addCase(addMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(modifiedMedia.pending, (state, action) => {
     state.loading = true;
    })
    .addCase(modifiedMedia.fulfilled, (state, action) => {
      const data:any = action.payload;
      const index = state.mediaList.findIndex((media) => {
        return media.id === data.id
      });
      if (index !== -1){
        state.mediaList[index] = data;
      }
      state.loading = false;
      state.response = "Update";
    })
    .addCase(modifiedMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });

    builder
    .addCase(removeMedia.pending, (state) => { 
      state.loading = true;
    })
    .addCase(removeMedia.fulfilled, (state, action) => {
      state.loading = false; 
      state.mediaList = state.mediaList.filter((media) => {
        return media.id !== action.payload;
      });
      state.response = "Delete";})
    .addCase(removeMedia.rejected, (state, action) => {
      state.loading = false;
      state.error = "Error";
    });
  }
});

export default mediaSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = mediaSlice.actions;
