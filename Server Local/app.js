const express = require('express');
const morgan = require('morgan');

const blogRoutes =require('./routes/blogRoutes');
//express app
const app= express();
const mongoose= require('mongoose');
const blog = require('./models/blog');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
//mongoDB
const urlDB='mongodb+srv://<username>:<password>@cluster0.lrcbobt.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(urlDB).then((result)=> app.listen(3000))
.catch((err)=>console.log(err));


//register view engine
app.set('view engine', 'ejs');
//midlleware static files
app.use(express.static('public'));

app.get('/',(req, res)=>{
res.redirect('/blogs')

});
// routes Blogs
app.use('/blogs',blogRoutes);

app.get('/about',(req, res)=>{
   res.render('about', {title: 'Sobre nosostros'});

});


app.get('/about-us',(req, res)=>{
    res.redirect('/about');
 
 });

 app.use((req, res)=>{
  
    res.status(404).render('404', {title: '404'})
 
 });