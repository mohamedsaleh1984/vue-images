import qs from 'qs' //QueryString

const CLINET_ID = 'b46ea8be354a465';
const ROOT_URL = 'https://api.imgur.com';

export default {
    login(){
        const queryString = {
            clinet_id : CLINET_ID,
            response_type: 'token'
        };
        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
    }
}