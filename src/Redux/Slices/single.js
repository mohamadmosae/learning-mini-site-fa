import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchcourse=createAsyncThunk("single/fetchcourseById", async(id,{rejectWithValue} )=>{
      try {
         const res=await axios.get(`http://localhost:3000/courses/${id}`)
         return res.data
      } catch (error) {
         return rejectWithValue("دریافت اطلاعات با خطا مواجه شده است")
      }
 })
export const singleSlice=createSlice(
      {
      name:"single",
      initialState:{
            loading:false,
            course:[],
            error:null
      },
      reducers:{
//code
      },
      extraReducers:(builder)=>{
builder.addCase(fetchcourse.fulfilled,(state,action)=>{
// state.course= state.course.push(action.payload)
state.course=action.payload
state.loading=false

})
builder.addCase(fetchcourse.pending,(state,action)=>{
      state.loading=true
})
builder.addCase(fetchcourse.rejected,(state,action)=>{
     state.error=action.payload
state.loading=false
      
})
      }
}
)
export default singleSlice.reducer
