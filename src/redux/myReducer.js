const MyinitilaState = {
    personal:[]
}

export const MyReducer = (state = MyinitilaState, action)=>{
    switch (action.type){
        case "PERSONAL_INFORMATION" : {
            return {...state, personal: action.payload}
        }
        default :{
            return state
        }
    }
};