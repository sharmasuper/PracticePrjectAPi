import { createAsyncThunk } from "@reduxjs/toolkit";
import { APiAdd } from "./APIURL";
import { ApiKey } from "./APIKey";

export const FetchNewsAPi = createAsyncThunk('movies/fetchNewsApi',async(term)=>{
//  const movieText = 'Harry'
 const Response = await APiAdd.get(`?country=us&apikey=${ApiKey}&category=${term}`)
 return Response.data
})

  





