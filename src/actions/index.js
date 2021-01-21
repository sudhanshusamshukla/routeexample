import streams from '../apis/streams';

export const signIn = userId => {
    return {
        type: 'SIGN_IN',
        payload: userId
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

export const CREATE_STREAM = () => {
    return {
        type: 'CREATE_STREAM'
    };
};

export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);

    dispatch({ type: CREATE_STREAM, payload: response.data });
};