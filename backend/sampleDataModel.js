const mongoose = require('mongoose');

const sampleDataSchema = new mongoose.Schema({
    ts:{
        type:Date,
        required:true
    },
    vibration:{
        type:Number,
        required:true
    }
});
module.exports = mongoose.model('SampleData',sampleDataSchema); 