


export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Supprimer apres la fin du developpement
    // token: "BQC1nPmXVUYARAm1cl35I6T5JcZyqvHSHkgH4Tbmy4p7UwshPWrJrpXFlOQmR1ok1YMMN4BUzO59I-UcTKEdTIr4__DdlyX-b4wgcIiZsHoD4hZJmR7vlUgl6UkFkzMhxlubX3_Qtt7p_jbxbzibV60kdoG0pIx1EXq2XeMQBSen_Uw2iRYewp-MOF4HPHHYyqcLRs-XK1w-HQmnLHU4",
};

const reducer = (state, action) =>{
    
    console.log(action)

    // Action -> type, [payload]
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };

            case 'SET_PLAYLISTS': 
                return {
                    ...state,
                    playlists: action.playlists,
                };

            default: 
                return state;
    }

}

export default reducer