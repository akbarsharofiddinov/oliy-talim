import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  language: string;
}

const initialState: IState = {
  language: "",
};

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState,
  reducers: {
    setLanugage: (state, { payload }: PayloadAction<string>) => {
      state.language = payload;
    },
  },
});

export const { setLanugage } = languageSlice.actions;

export default languageSlice.reducer;
