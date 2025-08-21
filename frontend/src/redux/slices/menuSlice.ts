import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance from "@/api/axioseInstance"
import { endPoints } from "@/api/endPoints" 
import axios from "axios";



export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  menuId: number;
}

export interface Menu {
  id: number;
  name: string;
  description: string;
  items: MenuItem[];      
  createdAt?: string;
  updatedAt?: string;
}

interface MenuState {
  menus: Menu[];
  loading: boolean;
  error: string | null;
}

const initialState: MenuState = {
  menus: [],
  loading: false,
  error: null,
};
export const fetchMenus = createAsyncThunk<Menu[], void, { rejectValue: string }>("menu/fetchMenus", async(_, { rejectWithValue })=>{
   try {
     const response = await axiosInstance.get(endPoints.MENUS.GETMENU);
    return response.data as Menu[];
   } catch (error:unknown) {
    if (axios.isAxiosError(error)) {
        const errMsg =
          (error.response?.data as { message?: string })?.message ||
          error.message ||
          "Something went wrong";
        return rejectWithValue(errMsg);
      }
      return rejectWithValue("Unexpected error occurred");
    }
   }
)

export const createMenu = createAsyncThunk<
  Menu,
  { name: string; description: string },
  { rejectValue: string }
>("menu/createMenu", async (menuData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<Menu>(
      endPoints.MENUS.POSTMENU,
      menuData
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errMsg =
        (error.response?.data as { message?: string })?.message ||
        error.message ||
        "Failed to create menu";
      return rejectWithValue(errMsg);
    }
    return rejectWithValue("Unexpected error occurred");
  }
});


const menuSlice = createSlice({
    name : "menu",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
    builder

    .addCase(fetchMenus.pending,(state)=>{
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchMenus.fulfilled,(state,action)=>{
        state.loading = false;
        state.menus = action.payload;
    })
    .addCase(fetchMenus.rejected,(state,action)=>{
        state.loading =  false;
        state.error = action.payload as string;
    })

   .addCase(createMenu.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createMenu.fulfilled, (state, action) => {
        state.loading = false;
        state.menus.push(action.payload); 
      })
      .addCase(createMenu.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create menu";
      });

    }
})

export default menuSlice.reducer;
