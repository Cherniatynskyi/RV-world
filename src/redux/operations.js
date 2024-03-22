import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAdverts, addAdvert, deleteAdvert } from "services/rvsApi";

export const getAdvertsThunk = createAsyncThunk('adverts/getAdverts', async()=>{
    return await getAdverts()
})

export const addAdvertThunk = createAsyncThunk('adverts/addAdvert', async(data)=>{
    const contacts = await addAdvert(data);
    return contacts.data
})

export const deleteAdvertThunk = createAsyncThunk('adverts/deleteAdvert', async(id)=>{
    const contacts = await deleteAdvert(id);
    return contacts.data
})