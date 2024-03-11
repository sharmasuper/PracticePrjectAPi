import { createSlice } from "@reduxjs/toolkit";
import { FetchNewsAPi } from "../APIcommon/ThunkAdd";

const StoreSlice = createSlice({
    name : "APIdata",
    initialState : {
        Movies : [],
       AddCard : [],
       NextStore : []
    },
    reducers: {
        AddToCard: (state,action) =>{
            // state.AddCard.push(action.payload) 
         let FindIndex =   state.AddCard.findIndex((items)=>{
                return items.title === action.payload.title
            })
            if(FindIndex>=0){
               
            }else{
                state.AddCard.push(action.payload)
            }

        },
        DeleteItem : (state,action) =>{
              state.AddCard = state.AddCard.filter((item)=>item.title !== action.payload)
            
        },
       SelectNews :(state,action) =>{
        state.NextStore.push(action.payload)
       },
       RemoveSelect : (state,action) =>{
        state.NextStore = []
       }
       
    },
    extraReducers :(builder) =>{
        builder.addCase(FetchNewsAPi.pending,(state,action)=>{
            console.log("pending")
        })
        builder.addCase(FetchNewsAPi.fulfilled,(state,action)=>{
           state.Movies = action.payload
        })
        builder.addCase(FetchNewsAPi.rejected,(state,action)=>{
          console.log("err",action.payload)
        })
    }
})
export default StoreSlice.reducer


export const { AddToCard,DeleteItem, SelectNews, RemoveSelect} = StoreSlice.actions






