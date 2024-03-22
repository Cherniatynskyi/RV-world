import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import { getAdvertsThunk, addAdvertThunk, deleteAdvertThunk } from "./operations";

const handlePending = (state) => {
    state.isLoading = true
}

const handleFulfilledGet = (state,{payload}) => {
    state.isLoading = false
    state.adverts = payload
    state.error = ''
}

const handleFulfilledAdd = (state, action) => {
    state.isLoading = false
    state.adverts.push(action.payload)
    state.error = ''
}

const handleFulfilledDel = (state,{payload}) => {
    state.isLoading = false
    state.adverts = state.Advert.filter(el=>el.id!==payload?.id)
    state.error = ''
}

const handleRejected = (state,{payload}) => {
    state.error = payload
    state.isLoading = false
    console.log('error')
}

export const AdvertSlice = createSlice({
    name: 'adverts',
    initialState: {
        adverts:[],
        isLoading: false,
        error: ''
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAdvertsThunk.fulfilled, handleFulfilledGet)
        .addCase(addAdvertThunk.fulfilled, handleFulfilledAdd)
        .addCase(deleteAdvertThunk.fulfilled, handleFulfilledDel)
        .addMatcher(isAnyOf(getAdvertsThunk.pending, addAdvertThunk.pending, deleteAdvertThunk.pending), handlePending)
        .addMatcher(isAnyOf(getAdvertsThunk.rejected, addAdvertThunk.rejected, deleteAdvertThunk.rejected), handleRejected)
    }
})