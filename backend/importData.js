const fs = require('fs');
const mongoose = require('mongoose');
const sampleData = require('./sampleDataModel');

async function importData(){
    try{
        //read data from json file provided
        const rawData = fs.readFileSync("D:\\CDAC\\wathare\\backend\\sampleData.json",'utf8');
        const jsonData = JSON.parse(rawData);
        
        //connect to mongodb
        await mongoose.connect('mongodb://localhost:27017/wathare',{
           // useNewUrlParser: true,
            //useUndefinedTopology:true
        });

        //inserting the data
        await sampleData.insertMany(jsonData);
        console.log("Data successfully imported");
    }
    catch(error){
        console.error("Data not imported",error);
    }
    finally{
        //close connection
        mongoose.connection.close();
    }

    }
//call function to import data
module.exports = importData;