const express=require('express');

const moongose=require('mongoose');
const app=express();
const bodyparser=require('body-parser');
//database connection
require('./mongo');
//models
require('./Module/post');

//Midleware

app.use(bodyparser.json());

const post =moongose.model('post');

app.get('/posts',async (Request,Response)=>{
try {
    const posts=await post.find({});
    Response.send(posts);
} catch (error) {
    Response.status(500);
}
});
app.post('/posts',async (Request,Response)=>{
//console.log(Request.body);
//Response.send(Request.body);
try {
    const posts=new post();
posts.title=Request.body.title;
posts.content=Request.body.content;
//post save return promises
await post.save();
Response.send(posts)
} catch (error) {
    Response.status(500);
}

})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
    
})