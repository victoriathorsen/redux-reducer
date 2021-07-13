export function manageFriends(state = {
    friends: []
}, action){
    switch(action.type){
        case 'ADD-FRIEND':
            return (
                {
                    ...state,
                    friends: [
                        ...state.friends,
                        action.friend
                    ]
                }
            )
        case 'REMOVE-FRIEND':
            const removalIndx = state.friends.findIndex(friend => friend.id === action.id)
            return (
                {
                    ...state,
                        friends: [
                            ...state.friends.slice(0, removalIndx),
                            ...state.friends.slice(removalIndx + 1)
                        ]
                }
            )
        default:
            return state;
    }
}
