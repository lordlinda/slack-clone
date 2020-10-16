export const initialState = {
    user: {
        displayName: 'lord luke',
        userimage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRnJ4ZnB5X7teEeunLtSkoC8EQ3nuDAkLAq5g&usqp=CAU'
    }
}
export const actionTypes = {
    SET_USER: 'SET_USER',
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer