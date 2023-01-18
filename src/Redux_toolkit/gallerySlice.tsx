import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { imgGalleryReducerProps } from "../typreprops";

const initialState:imgGalleryReducerProps = {
  posts:[],
  loading:false,
  error:{}
};

export const fetchedGalleryData = createAsyncThunk("images/fetchedGalleryData", async () => {
  let res;
  try{
   res = await axios.get(
    "https://api.pexels.com/v1/curated?page=11&per_page=30",
    {
      headers: {
        Authorization:
          "563492ad6f91700001000001b1388687b41444c18f4a7606bf4bc329",
        "Content-Type": "multipart/mixed",
      },
    }
  );
  }catch(err){
    return err
  }
  if(res!==undefined){
  let temp = res.data.photos.map((item:any) => {
    return {
      comments:[],
      like:false,
      dislike:false,
      src:item.src.original
    };
  });
  return temp
}
});

export const imgGallerySlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    Like:(state,action)=>{
      state.posts[action.payload].like=!state.posts[action.payload].like
    },
    Dislike:(state,action)=>{
      state.posts[action.payload].dislike=!state.posts[action.payload].dislike
    },
    addComment:(state,action)=>{
      console.log(action.payload)
      state.posts[action.payload.ind].comments.push(action.payload.comment);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchedGalleryData.pending, (state, action) => {
        state.loading=false;
      })
      .addCase(fetchedGalleryData.fulfilled, (state, action) => {
        state.loading=false;
        if(action.payload!==undefined)
        state.posts=action.payload
      })
      .addCase(fetchedGalleryData.rejected, (state, action) => {
        if(action.error!==undefined)
        state.error=action.error
      });
  },
});

export const {Like,Dislike,addComment}=imgGallerySlice.actions;
export default imgGallerySlice.reducer;