
// is the environment variable, NODE_ENV, set to PRODUCTION? 
// import fs from 'fs';
// import path from 'path';
// import url from 'url';
import mongoose from 'mongoose';

import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

let dbURI = process.env.MONGO_URI

if (process.env.NODE_ENV === 'production') {
  const configData = fs.readFileSync('./config.json')
  const config = JSON.parse(configData)
  dbURI = config.dbURI
}

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(error => console.error(error))

/* import slug from 'mongoose-slug-updater';


const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

let dbconf;
if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/crb623';
} */

/* console.log('Waiting for connection to database...')
try {
  await mongoose.connect('mongodb://localhost/hw06', {useNewUrlParser: true});
  console.log('Successfully connected to database.')
} catch (err) {
  console.log('ERROR: ', err);
}

mongoose.plugin(slug); */

// Import Mongoose module
//const mongoose = require('mongoose');

//user schcema with username,password, and email
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, minLength: 3, maxLength: 15},
    password: {type: String, required: true, minLength: 5},
    email: {type: String, required: true},
});

// schema a blog post
const BlogSchema = new mongoose.Schema({
    //restaurant name
    restaurant: {type: String, required: true},
    //dish name
    dishname: {type: String, required: true},
    //my description
    description: {type: String},
    //image of food
    blogimage: {type: String},
    //favorites button
    favorite: {type: String},
    //created time
    createdAt: {type: Date, default: Date.now},
    //view rating
    rating: {type: Number, default: 0},
    //item for my rating
    christinasrating: {type: Number, default: 0},
    //counts rating
    ratingscount: {type: Number, default: 0}
});

// Export modules
mongoose.model('User', UserSchema);
mongoose.model('Blog', BlogSchema);