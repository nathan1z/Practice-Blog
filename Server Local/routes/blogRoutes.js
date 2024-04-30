const express = require('express');
const router =express.Router();
const blogController= require('../controllers/blogController')
/*
//add mongodb
router.get('/add-blog',(req,res)=>{
 const blog = new Blog({
   title: 'new blog 2',
   snippet: 'about my new blog',
   body: 'more about my blog'
 });
 blog.save()
 .then((result)=>{
   res.send(result)
 }).catch((err)=>{
   console.log(err);
 })
});
// view all blogs
router.get('/all-blog',(req,res)=>{
  Blog.find()
  .then((result)=>{
    res.send(result)
  }).catch((err)=>{
    console.log(err);
  })
 });

 // vonly one blog
router.get('/single-blog',(req,res)=>{
  Blog.findById('6628543d4dd48cda742bad58')
  .then((result)=>{
    res.send(result)
  }).catch((err)=>{
    console.log(err);
  })
 });


*/

router.get('/', blogController.blog_index); 
router.get('/create',blogController.blog_create_get);
router.post('/',blogController.blog_create_post);
router.get('/:id',blogController.blog_details);
router.delete('/:id',blogController.blog_delete);

module.exports= router;
  