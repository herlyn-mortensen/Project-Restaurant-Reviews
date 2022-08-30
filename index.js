const express = require('express');
const cors = require('cors');
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();
app.set('view engine', 'hbs');


app.use(express.urlencoded({
    'extended': false  
}))
app.use(cors());


wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');


require('handlebars-helpers')({
  handlebars: hbs.handlebars
});

app.get('/', function(req, res){
    res.render('index.hbs');
})

app.listen(3000, function(){
    console.log("Server has started")
})


