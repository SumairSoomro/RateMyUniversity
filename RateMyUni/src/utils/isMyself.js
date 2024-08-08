import {jwtDecode} from 'jwt-decode';

export const isMyself = (passedId) => {
    const token = localStorage.getItem('token');
    const decodedUser = jwtDecode(token);

    return passedId === decodedUser?.id;
}