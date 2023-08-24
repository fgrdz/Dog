import axios from "axios";

const url = `https://api.thedogapi.com/v1/images/search?limit=12`;


const api = axios.create({
    baseURL: url,
    headers:{
        'x-api-key': "live_4GxUPmDXGAOjmzYjjGWxby670VtJ4i9wCwzNBFHlwjMD2a8THn204gya3eLyrwFn"
    }
})

export default api;