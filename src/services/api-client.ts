import axios from 'axios';
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'13376760765344da8b203aea21d3dbe9'
    }
})