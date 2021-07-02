const initialState = {
    email: ''
}

const userReducer = (state = initialState, action) => {

    if (action.type === 'SET_EMAIL') {
        return { ...state, email: action.payload.email };
    }

    return state;
}

export default userReducer;