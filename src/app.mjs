import express from 'express';
import mongoose from 'mongoose';
import sanitize from 'mongo-sanitize';
import './db.mjs';
import bcrypt from 'bcryptjs';
import session from 'express-session';
//import bodyParser from 'body-parser';
import path from 'path';
import url, { fileURLToPath } from 'url';
import {startAuthenticatedSession, endAuthenticatedSession} from './auth.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const __filename = fileURLToPath(import.meta.url);

const app = express();

const Blog = mongoose.model('Blog');
const User = mongoose.model('User');



app.use(express.static(path.join(__dirname, 'src')));


const sessionOptions = {

  secret: 'sesion secret',
  resave: true,
  saveUninitialized: true,

};

app.use(session(sessionOptions));

app.set('view engine', 'hbs');


app.use(express.urlencoded({ extended: false }));

const authRequired = (req, res, next) => {
  if(!req.session.user) {
    req.session.redirectPath = req.path;
    return res.redirect('/login'); 
  } else {
    next();
  }
};

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.get('/', async (req, res) => {
  const blogs = await Blog.find({}).sort('-createdAt').exec();
  res.render('index', {user: req.session.user, home: true, blogs: blogs});
});

app.post('/logout', async (req, res) => {
  await endAuthenticatedSession(req);
  res.redirect('/');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const username = sanitize(req.body.username);
  const password = sanitize(req.body.password);

  try {
    // search for user by username
    const user = await User.findOne({ username });

    // user not found --> login page with error message
    if (!user) {
      return res.render('login', { message: 'Invalid username' });
    }

    // Check password
    const password_validator = await bcrypt.compare(password, user.password);

    // password is not valid --> login page with error message
    if (!password_validator) {
      return res.render('login', { message: 'Invalid password' });
    }

    // authenticated session
    await startAuthenticatedSession(req, user);

    res.redirect("/");

  } catch (err) {
    if(err instanceof mongoose.Error.ValidationError) {
      res.render('login', {message: err.message});
    } else {
      throw err;
    }
  }
});

app.get('/restricted', authRequired, (req, res) => {
  let message = '<span class="error">this page is not 4 u (plz <a href="login">login</a> first)</span>';
  if(req.session.user) {
      message = '<span class="success">you are logged in, so you can see secret stuff</span>';
      res.render('restricted', {message: message});
  } else {
      res.redirect('login'); 
  } 
});


//app.listen(3000);
app.listen(process.env.PORT ?? 3000);
