const express = require('express');
const mongoose = require('mongoose');
const SampleData = require('./sampleDataModel'); 
//const sampleDataRouter = require('./routes/sampleDataRouter'); // Assuming your router file is named sampleDataRouter.js
const importData = require('./importData'); // Assuming your importData script is in importData.js

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/wathare', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
    // Once connected to MongoDB, start importing data
    importData();
})
.catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if unable to connect to MongoDB
});

/*
// Middleware
app.use(express.json()); // Parse JSON bodies
app.use('/api', sampleDataRouter); // Mount sampleDataRouter under /api prefix

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});




app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  */



  app.get('/api/sampledata',async(req,res)=>{
    try{
        //query to retrrive database data
        const sampleData = await SampleData.find();
        res.json(sampleData);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
  });

  



// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
