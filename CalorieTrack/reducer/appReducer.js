export function appReducer(state, action){
    switch(action.type){
        case "open_home_page":
            return {
                ...state,
                isHomePageShown: true,
                isFormShown: false,
                isListShown: false,

            };
        case "open_form":
            return {
                ...state,
                isHomePageShown: false,
                isFormShown: true,
                isListShown: false,
            };
        case "open_list":
            return {
                ...state,
                isHomePageShown: false,
                isFormShown: false,
                isListShown: true,

            };


            default:
            throw new Error("Action not supported!");
    }
}