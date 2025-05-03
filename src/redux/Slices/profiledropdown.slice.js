import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileIsOpen: false
}


export const profileDropdown = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        toggleProfile: (state) => {
            state.profileIsOpen = !state.profileIsOpen;
        },
        openProfile: (state) => {
            state.profileIsOpen = true
        },
        closeProfile: (state) => {
            state.profileIsOpen = false
        }
    }
})

export const { toggleProfile, openProfile, closeProfile } = profileDropdown.actions;

export default profileDropdown.reducer