let initialState = {
    users: [
        {id: 1, fullName: 'Lana', status: 'I am so pretty', location: {country: 'Russia', city: 'Moscow'}},
        {id: 2, fullName: 'Marco', status: 'I am looking for a job now', location: {country: 'Brasil', city: 'Rio de Janeiro'}},
        {id: 3, fullName: 'Sasha', status: 'I am free to help you', location: {country: 'Russia', city: 'SPb'}},
        {id: 4, fullName: 'User', status: 'I am a boss here', location: {country: 'Serbia', city: 'Belgrade'}}
    ]
}

const usersReducer = (state, action) => {
    return state;
};

export default usersReducer;