const bodyParser = Npm.require('body-parser');
const express = Npm.require('express');
const app = express();

WebApp.connectHandlers.use(bodyParser.json());

WebApp.connectHandlers.use(Meteor.bindEnvironment(app));

MetaNews = new Mongo.Collection("MetaNews");

app.put('/api/posts', AuthenticateAdminUser, function(req, res) {
        const submittedPost = Posts.submit(req.body);
        res.json(submittedPost);
});

app.put('/api/metanews', AuthenticateAdminUser, function(req, res){
       const submitted = MetaNews.insert(req.body);
       res.json(submitted);
});

app.get('/api/metanews', function(req, res){
        res.json(MetaNews.find().fetch());
});
