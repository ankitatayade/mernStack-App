const axios  = require('axios');
const API_KEY = 'home';
const API_URL = 'https://api.example.com/wathare';
async function fetchWathareData(location){
    try{
        const response =  await axios.getAdapter(API_URL,{
            params:{
                key:API_KEY,
                location:location
            }
        });
        return response.data;
    } catch(error){
        console.error('error fetching data',error);
        throw error;
    }
    }
    module.exports = {
       fetchWathareData
    };