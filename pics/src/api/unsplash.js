import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2315ca43642a43e81abed212dda9744129a4feb86d47b0cbdfb552d68b2066fe'
    }
});