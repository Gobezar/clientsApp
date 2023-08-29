import { createSlice } from "@reduxjs/toolkit";
import { IClientsProps } from "../../../widgets/ClientsList/consts/clients";

interface ICurrentClientProps {
  currentClient: IClientsProps[];
  currentMenuCategory: string;
}

const initialState: ICurrentClientProps = {
  currentClient: [],
  currentMenuCategory: "Заметки",
};

const currentClientSlice = createSlice({
  name: "currentClient",
  initialState,
  reducers: {
    setCurrentClient(state, action) {
      if (state.currentClient.length < 1) {
        state.currentClient.push(action.payload);
      } else {
        state.currentClient.splice(0);
        state.currentClient.push(action.payload);
      }
    },
    setCurrentMenuCategory(state, action) {
      state.currentMenuCategory = action.payload;
    },
  },
});

export const { setCurrentClient, setCurrentMenuCategory } =
  currentClientSlice.actions;
export default currentClientSlice.reducer;
