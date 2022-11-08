import * as types from "./actionTypes";

const initialState={
    isLoading:false,
    isError:false,
 
}

export const reducer=(state=initialState,action)=>{
  const {type,payload}=action;
  switch(type){
     case types.GET_REQUEST:return {...state,isLoading:true,isError:false};
     case types.GET_SUCCESSFUL: return {...state,isLoading:false,isError:false};
     case types.GET_FAILURE:return {...state,isLoading:false,isError:true};

     case types.CREATE_REQUEST:return {...state,isLoading:true,isError:false};
     case types.CREATE_SUCCESSFUL: return {...state,isLoading:false,isError:false};
     case types.CREATE_FAILURE:return {...state,isLoading:false,isError:true};


     
     case types.DELETE_REQUEST:return {...state,isLoading:true,isError:false};
     case types.DELETE_SUCCESSFUL: return {...state,isLoading:false,isError:false};
     case types.DELETE_FAILURE:return {...state,isLoading:false,isError:true};


     case types.UPDATE_REQUEST:return {...state,isLoading:true,isError:false};
     case types.UPDATE_SUCCESSFUL: return {...state,isLoading:false,isError:false};
     case types.UPDATE_FAILURE:return {...state,isLoading:false,isError:true};

    default:return state
  }
}