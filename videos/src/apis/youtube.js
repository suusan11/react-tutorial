import axios from 'axios';

const KEY = 'AIzaSyCvoGK-Uoivp0pJ8OPIQ5zwr00i_ViM4Qw';

export default axios.create({
   baseURL = 'https://www.googleapis.com/youtube/v3',
    params: {
       part: 'snippet',
        maxResult: 5,
        key: KEY,
        q: 'surfboards'
    }
});