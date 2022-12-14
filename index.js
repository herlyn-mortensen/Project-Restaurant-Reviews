const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const wax = require('wax-on');


const app = express();
app.set('view engine', 'hbs');

const path = require('path')
app.set('views', path.join(__dirname,'/views/'));

require('dotenv').config();
const jwt = require('jsonwebtoken');

//console.log(process.env);

const mongoUtil = require('./MongoUtil');
const { ObjectID } = require('bson');

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    'extended': false  
}))
app.use(cors());
app.use(express.json())


wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');


require('handlebars-helpers')({
  handlebars: hbs.handlebars
});

app.get('/', function(req, res){
    res.render('index.hbs');
})

app.get('/login', function(req, res){
    res.render('login.hbs');
})

app.get('/sign-up', function(req, res){
    res.render('sign-up.hbs');
})


app.get('/write-review', function(req,res){
    res.render('write-review.hbs')
})

app.get('/home', function(req,res){
    res.render('home.hbs')
})


const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.DB_NAME;
const TOKEN_SECRET = process.env.TOKEN_SECRET;

function generateAccessToken(id, email) {
    return jwt.sign({
        'id':id,
        'email': email
     }, TOKEN_SECRET, {
        'expiresIn': '3hr'
    })
}

function checkIfAuthenticatedJWT(req, res, next){
    if (req.headers.authorization) {
        const headers = req.headers.authorization;
        const token = headers.split(" ")[1];

        jwt.verify(token, TOKEN_SECRET, function (err, tokenData) {
            if (err) {
                res.status(403);
                res.json({
                    'error': "Your access token is invalid"
                })
                return;
            }
            req.user = tokenData;

            next();

        })

    } else {
        res.status(403);
        res.json({
            'error': "You must provide an access token to access this route"
        })
    }

}


   
console.log(new Date(), "Connecting to server...")
mongoUtil.connect(MONGO_URI, DB_NAME).then((db) => {
    main(app, db)
});

async function main (app, db){

    app.get('/find-restaurant', async function(req,res){
       
        try {

        let criteria = {};

        if(req.query.restaurant) {
            criteria.restaurant = {
                '$regex': req.query.restaurant,
                '$options': 'i'
            }
        }

        if (req.query.min_ratings) {
            criteria.ratings = {
                '$gte': parseInt(req.query.min_ratings)
            }
        }


        const reviews = await db.collection('reviews').find(criteria, {
            'projection': {
                '_id': 1,
                'restaurant': 1,
                'title': 1,
                'date': 1,
                'cuisine': 1,
                'foodordered': 1,
                'review': 1,
                'ratings': 1
            }
        }).toArray();
        await res.render('find-restaurant.hbs', {'entries':reviews})
    } catch (e) {
        console.log(e);
        res.status(500);
        res.json({
            'error': "Internal server error"
        })
    }

    })


    app.post('/mongo/write-review', async function(req,res){
        console.log(req.body)
        const results = await db.collection('reviews').insertOne({
            "restaurant": req.body.restaurant,
            "title": req.body.title,
            "date": req.body.date,
            "cuisine": req.body.cuisine,
            "foodordered": req.body.foodordered,
            "review": req.body.review,
            "ratings": req.body.ratings
            
        })
    
        res.redirect('/home')
    })
    

    app.post('/reviews/:reviewId', async function(req,res){
        console.log(req.body)

        const review = await db.collection('reviews').findOne({
            '_id': ObjectID(req.params.reviewId)
        })
        
        await res.render('editreview.hbs', {'entries':review})
      
    })

    app.post('/edit/reviews/:reviewId', async function(req,res){

        const review = await db.collection('reviews').find({
            '_id': ObjectID(req.params.reviewId)
        })

    
        const results = await db.collection('reviews').updateOne({
            '_id': ObjectID(req.params.reviewId)
        }, {
            "$set": {
                'restaurant': req.body.restaurant ? req.body.food : review.restaurant,
                'title': req.body.title ? req.body.title : review.title,
                'date': req.body.date ? req.body.date : review.date,
                'cuisine': req.body.cuisine ? req.body.cuisine : review.cuisine,
                'foodordered': req.body.foodordered ? req.body.foodordered : review.foodordered,
                'review': req.body.review ? req.body.review : review.review,
                'rating': req.body.rating ? req.body.rating : review.rating
            }
        })

        
        await res.redirect('/find-restaurant')
    })



    app.post('/delete/reviews/:reviewId', async function (req, res) {
        console.log("deleted")
        await db.collection('reviews').deleteOne({
            '_id': ObjectID(req.params.reviewId)
        })
        res.redirect('/')
    })


    app.post('/reviews/:reviewId/comments', async function(req,res){
        const results = await db.collection('reviews').updateOne({
            _id: ObjectID(req.params.reviewId)
        },{
            '$push':{
                'comments':{
                    '_id': ObjectID(),
                    'review': req.body.review,
                    'nickname': req.body.nickname
                }
            }
        })

        res.json({
            'message': 'Comment has been added successfully',
            'results': results
        })
    })


    app.put('/comments/:commentId/update', async function(req,res){
        const results = await db.collection('reviews').updateOne({
            'comments._id':ObjectID(req.params.commentId)
        },{
            '$set': {
                'comments.$.review': req.body.review,
                'comments.$.nickname': req.body.nickname
            }
        })
        res.json({
            'message': 'Comment updated',
            'results': results
        })
    })
    app.delete('/comments/:commentId', async function(req,res){
        const results = await db.collection('reviews').updateOne({
            'comments._id': ObjectID(req.params.commentId)
        }, {
            '$pull': {
                'comments': {
                    '_id': ObjectID(req.params.commentId)
                }
            }
        })
        res.json({
            'message': 'Comment deleted',
            'result': results
        })
    })



    app.post('/users', async function (req, res) {
        const results = await db.collection('users').insertOne({
            "email": req.body.email,
            "password": req.body.password
        });

        res.redirect('/home')
    })

    app.post('/login', async function(req,res){
        const user = await db.collection('users').findOne({
            'email': req.body.email,
            'password': req.body.password
        });
        
        if (user) {
            let token = generateAccessToken(user._id, user.email);
            res.json({
                'accessToken': token
            })
        } else {
            res.status(401);
            res.redirect('/sign-up')
        }
    })

    app.get('/user/:userId', [checkIfAuthenticatedJWT], async function (req, res) {

        res.json({
            'email': req.user.email,
            'id': req.user.id,
        })

    })


app.listen(3000, function(){
    console.log("Server has started")
})
}





