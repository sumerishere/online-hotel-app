const express = require('express');
const app = express();  //blue print of express.
const db = require('./db');

//configure env file by calling config function.
require('dotenv').config();

const bodyParser = require('body-parser');

//store in req.body for further use.
app.use(bodyParser.json()); 


const PORT = process.env.PORT || 3000;
//where process.env use to access var present in env file.



app.get('/', function (req, res) {
  res.send('Welcome! to Our Hotel :)')
})

// app.post('/person', async(req, res) => {

//   try {

//     //asssuming req.body contains data.
//     const data = req.body;

//     const newPerson = new Person(data); //simply pass data
    
//     // save the new person to the database.
//     const response = await newPerson.save();
//     console.log('data saved successfully!');
//     res.status(200).json(response);

//   }catch(err){
//     console.log(err);
//     res.status(500).json({err:'Internal server Error '});
//   }
// })


// app.get('/person', async(req, res) => {

//   try{
//     const data = await Person.find();
//     console.log('Data Fetched')
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({err:'Internal server Error '});
//   }
// })


// app.post('/menu', async(req, res) => {

//   try{

//     const data = req.body; 
//     const menuObj = new menuItems(data);
//     const response = await menuObj.save();
//     console.log('Data saved successfully!');
//     res.status(200).json(response);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({err:'Internal server error'});
//   }

// })

// app.get('/menu', async(req, res) => {

//   try{
//     const data = await menuItems.find();
//     console.log('Data fetched successfully!');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({err:'Internal server error'})
//   }
// })


const personRoutes = require('./routes/personRoutes'); //import the router files

//menu router import.
const menuRoutes = require('./routes/menuRoutes');

//use the routers, it takes router name & router file.
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);

// ------------------------------------------------//


          //------avoid WET code-----//

// app.get('/person/chef', async(req, res) => {

//   try{
//     const data = await Person.find({work:'chef'});
//     console.log('Data fetched successfully!');
//     res.status(200).json(data);
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({err:'Internal server error'})
//   }
// })



     //------- parameterized get method --------//

// app.get('/person/:workerType', async(req, res) => {
  
//   try{
//     const workerType = req.params.workerType;

//     if(workerType == 'chef' || workerType == 'waiter' || workerType == 'manager' ){

//       const response = await Person.find({work:workerType});
//       console.log('response fetched');
//       res.status(200).json(response);

//     }
//     else{
//       console.log(error)
//       res.status(404).json({error: 'Invalid worker Type'})
//     }
//   }
//   catch(err){
//     console.log(err);
//     res.status(500).json({err:'Internal server error'});
//   }

// })




app.listen(PORT, ()=> console.log('Bhaii server started port:3000! pe.'))


