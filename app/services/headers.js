import Cookies from 'universal-cookie';
const cookies = new Cookies();
const token = cookies.get('token');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,  
};

export default headers;
