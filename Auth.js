//passport packg import.
const passport = require('passport'); 

//passport-method --> local type (username-password).
const LocalStrategy = require('passport-local').Strategy; 

//Person file importing.
const Person = require('./models/Person');


//Authentication Function for checking validation.
//done is callback function.
//parameter flow mandatory as shown in below.
passport.use(new LocalStrategy(async(USERNAME, password, done) => {
  
  //Authentication logic.
  try{
    // console.log(`Received credentials, username:${USERNAME} and password: ${password}`);

    const user = await Person.findOne({username:USERNAME});
    if(!user){
      return done(null, false, {message:'Incorrect username.'});
    }

    // const isPassWordMatch = (user.password === password ? true :false);
    const isPassWordMatch = await user.comparePassword(password);
    if(isPassWordMatch){
      return done(null,user); //user authenticated.
    }
    else{
      return done(null,false, {message:'Incorrect Password.'});
    }
  }
  catch(error){
    return done(error);
  }
}));

module.exports = passport;