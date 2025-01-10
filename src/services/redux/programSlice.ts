import { createSlice } from "@reduxjs/toolkit";
import { IChannelResponse } from "../../types/channel";

export type IProgramSliceState = {
  favouriteList: IChannelResponse[];
}

const initialState: IProgramSliceState = {
  favouriteList: [],
}

export const programSlice = createSlice({
  name: "program",
  initialState,
  reducers: {
    addOrRemoveFavourite: (state, action: {payload: IChannelResponse}) => {
      if(state.favouriteList.find(program => program.id === action.payload.id)) {
        // found - remove from favourite
        state.favouriteList = state.favouriteList.filter(
          (program) => program.id !== action.payload.id
        );
      } else {
        // not found - add to favourite
        state.favouriteList.push(action.payload);
      };   
   
    },
    removeFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter(
        (program) => program.id !== action.payload
      );
    },
  },
})

export const { addOrRemoveFavourite, removeFavourite } = programSlice.actions;
export default programSlice.reducer;