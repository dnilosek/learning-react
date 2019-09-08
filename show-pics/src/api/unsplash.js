import Axios from 'axios';

export default Axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 4525433578c713d7f209523d7b9dd95ed5de3f55d07b8b361bbbd90ac66051f6'
    }
});