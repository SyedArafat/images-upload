import qs from 'qs';

const CLIENT_ID = '7b7afaf79dc49a0';
const ROOT_URL = "https://api.imgur.com";

export default {
    login() {
        const queryString = {
            client_id: CLIENT_ID,
            response_type: 'token',
            state: 1234
        };

        window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;

    }
};