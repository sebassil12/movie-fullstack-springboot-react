import axios from 'axios';

export default axios.create({
    baseURL:"https://4af3-191-100-103-160.ngrok-free.app",
    headers:{"ngrok-skip-browser-warning":"true"}
})