import { createSlice } from "@reduxjs/toolkit";

interface ICheckListProps {
  openChoiseMenu: boolean;
  selectedItems: string[];
}

const initialState: ICheckListProps = {
  openChoiseMenu: false,
  selectedItems: [],
};

const checkListSlice = createSlice({
  name: "checkList",
  initialState,
  reducers: {
    setOpenChoiseMenu(state) {
      state.openChoiseMenu = !state.openChoiseMenu;
    },
    toggleSelectedItem: (state, action) => {
      const itemId = action.payload;
      const selectedIndex = state.selectedItems.indexOf(itemId);

      if (selectedIndex === -1) {
        state.selectedItems.push(itemId);
      } else {
        state.selectedItems.splice(selectedIndex, 1);
      }
    },
    toggleAllItems(state, action) {
      const itemId = action.payload;
      const selectedIndex = state.selectedItems.indexOf(itemId);

      if (selectedIndex === -1) {
        state.selectedItems.push(itemId);
      } else {
        return;
      }
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const {
  setOpenChoiseMenu,
  toggleSelectedItem,
  clearSelectedItems,
  toggleAllItems,
} = checkListSlice.actions;
export default checkListSlice.reducer;
