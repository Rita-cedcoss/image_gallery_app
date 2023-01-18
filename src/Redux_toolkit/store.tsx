import { configureStore } from "@reduxjs/toolkit";
import imageGalleryReducer from "./gallerySlice";
export const store=configureStore({
    reducer:{
        imageGalleryReducer,
    }
})