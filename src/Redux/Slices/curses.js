import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchcurses=createAsyncThunk("courses/fetchcurses",async(arg,{rejectWithValue} )=>{
     try {
        const res=await axios.get("http://localhost:3000/courses")
        return res.data
     } catch (error) {
        return rejectWithValue("دریافت اطلاعات با خطا مواجه شده است")
     }
})

export const coursesSlice=createSlice({
         name:"courses",
         initialState:{
            data:[],
            loading:false,
            errorMessage:null

         },
         reducers:{
                  // getAllCourses:(state,action)=>{
                  //          //code
                  // },
                  // getCoursesById:(state,action)=>{
                  //          //code
                  // },
                  // editCoursesById:(state,action)=>{
                  //          //code
                  // },
                  // removeCoursesById:(state,action)=>{
                  //          //code
                  // }
         },
         extraReducers:(builder)=>{
 builder.addCase(fetchcurses.fulfilled,(state,action)=>{
state.data=action.payload
state.loading=false
 })
 builder.addCase(fetchcurses.rejected,(state,action)=>{
    console.log(action);
    
        state.errorMessage=action.payload
        state.loading=false
 }) 
 builder.addCase(fetchcurses.pending,(state,action)=>{
     state.loading=true
    
     
   
 })
         }
})
export default coursesSlice.reducer
export const {getAllCourses,getCoursesById,editCoursesById,removeCoursesById}=coursesSlice.actions