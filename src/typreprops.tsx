import { SerializedError } from "@reduxjs/toolkit";
export type post= {
    comments: string[];
    dislike: boolean;
    like: boolean;
    src: string;
  }
  
  export type imgGalleryReducerProps={
    posts: post[];
    loading: boolean;
    error: SerializedError;
  };
  
  export type storeProps= {
    imageGalleryReducer:imgGalleryReducerProps
  }