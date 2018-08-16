

const GET_USER = 'GET_USER'

export function getUser(id, username, profilePicture) {
    return {
        type: GET_USER,
        payload: { id, username, profilePicture }
    }
}

const initialState = {
    id: 0,
    username: '',
    profilePicture: ''
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            console.log(action.payload);
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                profilePicture: action.payload.profilePicture
            }
        default:
            return state;
    }
}