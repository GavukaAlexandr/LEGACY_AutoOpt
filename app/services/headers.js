import cookie from 'react-cookie';

export let headers = {
    'Authorization': cookie.load('token'),  
};
