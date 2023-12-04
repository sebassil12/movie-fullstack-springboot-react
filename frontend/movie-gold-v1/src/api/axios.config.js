import axios from 'axios';

export default axios.create({
    baseURL:"https://37db-186-43-244-140.ngrok-free.app/",
    headers:{"ngrok-skip-browser-warning":"true"}
})