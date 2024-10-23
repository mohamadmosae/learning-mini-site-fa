import { configureStore } from "@reduxjs/toolkit";
import Rootreduser from "./Slices";

  const store=configureStore({
      reducer:Rootreduser
})


export default store