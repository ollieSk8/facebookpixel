/**
 * Created by ollie on 2017/11/17.
 */
const express = require('express');
const consolidate = require('consolidate');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', './views');
app.engine('html', consolidate.ejs);

app.get('/',(req,res)=>{
    res.render('index.ejs')
});
app.listen(3000);
