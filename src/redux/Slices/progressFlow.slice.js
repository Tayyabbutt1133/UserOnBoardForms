import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    currentStep: 1,
}


const FlowSlice = createSlice({
    name: 'progressflow',
    initialState,
    reducers: {
        addNextStep: (state) => {
            if (state.currentStep < 6) {
                state.currentStep = state.currentStep + 1;
            }
        },
        addBackStep: (state) => {
            if (state.currentStep > 1) {
                state.currentStep = state.currentStep - 1;
            }
        },
        updateCurrentStep: (state, actions) => {
            state.currentStep = actions.payload;
        }
    }
})


export const { addNextStep, addBackStep, updateCurrentStep } = FlowSlice.actions;

export default FlowSlice.reducer
