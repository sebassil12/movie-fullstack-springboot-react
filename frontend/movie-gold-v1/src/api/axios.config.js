import axios from 'axios';

export default axios.create({
    baseURL:"https://8e8e-191-100-103-160.ngrok-free.app",
    headers:{"ngrok-skip-browser-warning":"true"}
})