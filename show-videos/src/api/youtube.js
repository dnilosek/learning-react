import Axios from 'axios';

const KEY = 'AIzaSyB8FmxNS1gU8fR7vd9nP6DoDwaXE4CrtYA'

export default Axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
