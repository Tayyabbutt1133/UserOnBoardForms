import { configureStore } from "@reduxjs/toolkit";
import profilereducer from './redux/Slices/profiledropdown.slice.js'
import progressflowreducer from './redux/Slices/progressFlow.slice.js'


const store = configureStore({
    reducer: {
        profile: profilereducer,
        progressflow : progressflowreducer
        
    }
})

export default store