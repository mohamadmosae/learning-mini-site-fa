import { themeSlice } from "./theme";
import { coursesSlice } from "./curses";
import { cartSlice } from "./cart";

import { combineSlices } from "@reduxjs/toolkit";
import { singleSlice } from "./single";

const Rootreduser=combineSlices(themeSlice,coursesSlice,cartSlice,singleSlice)
export default Rootreduser