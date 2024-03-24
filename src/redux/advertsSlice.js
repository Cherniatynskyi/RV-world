import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import { getAdvertsThunk, addAdvertThunk, deleteAdvertThunk, updateAdvertThunk } from "./operations";

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

const handleFulfilledUpd = (state,{payload}) => {
    state.isLoading = false
    state.adverts = state.adverts.map(advert =>
        advert.id === payload.id ? { ...advert, ...payload } : advert
      );
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
        error: '',
        filters: {}
    },
    reducers:{
        setFilter: (state, {payload})=>{
            state.filters = payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAdvertsThunk.fulfilled, handleFulfilledGet)
        .addCase(addAdvertThunk.fulfilled, handleFulfilledAdd)
        .addCase(deleteAdvertThunk.fulfilled, handleFulfilledDel)
        .addCase(updateAdvertThunk.fulfilled, handleFulfilledUpd)
        .addMatcher(isAnyOf(getAdvertsThunk.pending, addAdvertThunk.pending, deleteAdvertThunk.pending, updateAdvertThunk.pending), handlePending)
        .addMatcher(isAnyOf(getAdvertsThunk.rejected, addAdvertThunk.rejected, deleteAdvertThunk.rejected, deleteAdvertThunk.rejected), handleRejected)
    }
})

export const {setFilter} = AdvertSlice.actions